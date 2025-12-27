/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import nodemailer from "nodemailer";
import { quickAppointmentSchema } from "@/lib/schemas";

export async function submitQuickAppointment(prevState: any, formData: FormData) {
  const data = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    date: formData.get("date") as string,
    time: formData.get("time") as string,
    message: formData.get("message") as string,
  };

  const validation = quickAppointmentSchema.safeParse(data);

  if (!validation.success) {
    return {
      success: false,
      message: validation.error.issues[0].message,
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, email, phone, date, time, message } = validation.data;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "srichandanmohapatra408@gmail.com", // Keeping the email from contact.ts
      subject: `New Quick Appointment Request: ${firstName} ${lastName}`,
      text: `
        New Appointment Request
        
        Name: ${firstName} ${lastName}
        Phone: ${phone}
        Email: ${email}
        Date: ${date}
        Time: ${time}
        Message: ${message || "No message provided"}
      `,
      html: `
        <h3>New Quick Appointment Request</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Message:</strong> ${message || "No message provided"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: "Appointment request sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send request. Please try again.",
    };
  }
}
export async function submitWizardBooking(data: any) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const {
      firstName,
      lastName,
      email,
      mobile,
      phoneNumber,
      treatment,
      date,
      timeSlot,
      note,
    } = data;

    const dateStr = new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // 1. Email to Clinic
    const clinicMailOptions = {
      from: process.env.EMAIL_USER,
      to: "srichandanmohapatra408@gmail.com",
      subject: `Wizard Booking: ${firstName} ${lastName} - ${treatment}`,
      html: `
        <div style="font-family: sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #0e5a65; border-bottom: 2px solid #0e5a65; padding-bottom: 10px;">New Appointment via Wizard</h2>
          <p>A new appointment has been scheduled through the website booking wizard.</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 150px;">Patient Name:</td><td>${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Verified Contact:</td><td>${mobile}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Secondary Contact:</td><td>${phoneNumber || "N/A"}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${email}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Treatment:</td><td style="color: #17899B; font-weight: bold;">${treatment.toUpperCase()}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Date:</td><td>${dateStr}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Time Slot:</td><td>${timeSlot}</td></tr>
          </table>
          
          <div style="margin-top: 20px; background: #f9f9f9; padding: 15px; border-radius: 5px;">
            <p style="margin: 0; font-weight: bold;">Patient Note:</p>
            <p style="margin: 5px 0 0 0;">${note || "No specific note provided."}</p>
          </div>
          
          <p style="margin-top: 20px; font-size: 12px; color: #777;">This is an automated notification from Sambhavna Clinic Booking System.</p>
        </div>
      `,
    };

    // 2. Email to User (Confirmation)
    const { emailLanguage } = data;
    const isHindi = emailLanguage === "hi";

    const userSubject = isHindi 
      ? `बुकिंग की पुष्टि: संभावना क्लिनिक में आपकी यात्रा` 
      : `Booking Confirmed: Your Visit to Sambhavna Clinic`;

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: userSubject,
      html: `
        <div style="font-family: sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #0e5a65; margin: 0;">${isHindi ? "अपॉइंटमेंट की पुष्टि हो गई" : "Appointment Confirmed"}</h1>
            <p style="color: #17899B; font-weight: bold;">${isHindi ? "नमस्ते" : "Namaste"}, ${firstName}!</p>
          </div>
          
          <p>${
            isHindi 
              ? "संभावना क्लिनिक चुनने के लिए धन्यवाद। आपकी अपॉइंटमेंट की पुष्टि हो गई है और हमारी टीम आपसे मिलने के लिए उत्सुक है।" 
              : "Thank you for choosing Sambhavna Clinic. Your appointment is confirmed and our team is looking forward to seeing you."
          }</p>
          
          <div style="background: #E0F4F4; padding: 20px; border-radius: 15px; margin: 25px 0;">
            <p style="margin: 0 0 10px 0; font-weight: bold; color: #0e5a65;">${isHindi ? "बुकिंग सारांश:" : "Booking Summary:"}</p>
            <p style="margin: 5px 0;">📅 <strong>${isHindi ? "दिनांक" : "Date"}:</strong> ${dateStr}</p>
            <p style="margin: 5px 0;">⏰ <strong>${isHindi ? "समय" : "Time"}:</strong> ${timeSlot}</p>
            <p style="margin: 5px 0;">🌿 <strong>${isHindi ? "इलाज" : "Treatment"}:</strong> ${treatment.split("-").map((s: string) => s.charAt(0).toUpperCase() + s.slice(1)).join(" ")}</p>
          </div>
          
          <p><strong>${isHindi ? "स्थान" : "Location"}:</strong> ${isHindi ? "संभावना क्लिनिक, होलिस्टिक कैंसर केयर सेंटर।" : "Sambhavna Clinic, Holistic Cancer Care Center."}</p>
          <p>${
            isHindi 
            ? "यदि आपको पुनः समय निर्धारित करने की आवश्यकता है या कोई प्रश्न हैं, तो कृपया हमसे <strong>+91 91781 53131</strong> पर संपर्क करें।" 
            : "If you need to reschedule or have any questions, please contact us at <strong>+91 91781 53131</strong>."
          }</p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
          
          <div style="text-align: center; font-size: 14px; color: #0e5a65;">
            <p style="margin: 0;"><strong>${isHindi ? "संभावना क्लिनिक" : "Sambhavna Clinic"}</strong></p>
            <p style="margin: 5px 0;">${isHindi ? "होलिस्टिक आयुर्वेद और कैंसर देखभाल" : "Holistic Ayurveda & Cancer Care"}</p>
          </div>
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(clinicMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return { success: true, message: "Booking fulfilled successfully!" };
  } catch (error) {
    console.error("Error in wizard booking submission:", error);
    return { success: false, message: "Failed to fulfill booking. Please try again." };
  }
}
