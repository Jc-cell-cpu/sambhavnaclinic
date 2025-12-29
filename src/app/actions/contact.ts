/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import nodemailer from "nodemailer";
import { getContactFormSchema } from "@/lib/schemas";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";

export async function submitContactForm(lang: Locale, prevState: any, formData: FormData) {
  const dictionary = await getDictionary(lang);

  const data = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  const validation = getContactFormSchema(dictionary.validation).safeParse(data);

  if (!validation.success) {
    return {
      success: false,
      message: validation.error.flatten().fieldErrors.name?.[0] || validation.error.issues[0].message,
    };
  }

  const { name, phone, email, subject, message } = validation.data;

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
      to: "srichandanmohapatra408@gmail.com", // Replace with your support email
      subject: `New Contact Form Submission: ${subject || "General Inquiry"}`,
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again.",
    };
  }
}
