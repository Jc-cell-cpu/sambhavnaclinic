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
