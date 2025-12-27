"use server";

import nodemailer from "nodemailer";

export async function sendOTP(email: string, lang: "en" | "hi" = "en") {
  if (!email || !email.includes("@")) {
    return { success: false, message: "Invalid email address" };
  }

  // Generate a 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  const content = {
    en: {
      subject: "Your Verification Code for Sambhavna Clinic",
      title: "Verification Code",
      intro: "Thank you for choosing Sambhavna Clinic. Please use the following code to verify your email address:",
      expiry: "This code will expire in 10 minutes. If you did not request this code, please ignore this email.",
      footer: "Sambhavna Clinic - Holistic Cancer Care",
    },
    hi: {
      subject: "संभावना क्लिनिक के लिए आपका सत्यापन कोड",
      title: "सत्यापन कोड",
      intro: "संभावना क्लिनिक चुनने के लिए धन्यवाद। कृपया अपने ईमेल पते को सत्यापित करने के लिए निम्नलिखित कोड का उपयोग करें:",
      expiry: "यह कोड 10 मिनट में समाप्त हो जाएगा। यदि आपने इस कोड का अनुरोध नहीं किया है, तो कृपया इस ईमेल को अनदेखा करें।",
      footer: "संभावना क्लिनिक - समग्र कैंसर देखभाल",
    },
  };

  const selected = content[lang];

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
      to: email,
      subject: selected.subject,
      text: `${selected.intro} ${otp}. ${selected.expiry}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0e5a65;">${selected.title}</h2>
          <p>${selected.intro}</p>
          <div style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #17899B; padding: 20px 0; text-align: center;">
            ${otp}
          </div>
          <p>${selected.expiry}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888;">${selected.footer}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // In a real app, you would store this OTP in Redis or a DB with an expiration.
    // Return the OTP here for the wizard to verify (simple implementation for now).
    return { success: true, otp, message: "OTP sent successfully!" };
  } catch (error) {
    console.error("Error sending OTP email:", error);
    return {
      success: false,
      message: "Failed to send OTP. Please try again.",
    };
  }
}
