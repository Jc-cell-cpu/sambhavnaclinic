/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .length(10, "Phone number must be exactly 10 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  email: z.email({
  message: "Invalid email address",
}),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Update these schemas to functions that accept 'validation' dictionary
export const getBookingStep1Schema = (validation: any) =>
  z.object({
    contact: z.string().refine(
      (val) => {
        const isMobile = /^\d{10}$/.test(val);
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        return isMobile || isEmail;
      },
      {
        message:
          validation?.invalidContact ||
          "Please enter a valid 10-digit mobile number or email address",
      }
    ),
  });

export const getBookingStep2Schema = (validation: any) =>
  z.object({
    otp: z.string().length(6, {
      message: validation?.otpLength || "OTP must be 6 digits",
    }),
  });

export const getBookingStep3Schema = (validation: any) =>
  z.object({
    treatment: z
      .string({
        message: validation?.requiredTreatment || "Please select a treatment",
      })
      .min(1, {
        message: validation?.requiredTreatment || "Please select a treatment",
      }),
  });

export const getBookingStep4Schema = (validation: any) =>
  z.object({
    date: z.date({
      message: validation?.requiredDate || "Please select a date",
    }),
    timeSlot: z.string({
      message: validation?.requiredTimeSlot || "Please select a time slot",
    }).min(1, {
        message: validation?.requiredTimeSlot || "Please select a time slot",
    }),
  });

export const getBookingStep5Schema = (validation: any) =>
  z.object({
    firstName: z.string().min(2, {
      message:
        validation?.firstNameMin || "First name must be at least 2 characters",
    }),
    lastName: z.string().min(2, {
      message:
        validation?.lastNameMin || "Last name must be at least 2 characters",
    }),
    email: z.email({
      message: validation?.invalidEmail || "Invalid email address",
    }),
    phoneNumber: z
      .string()
      .length(10, {
        message:
          validation?.phoneLength || "Phone number must be exactly 10 digits",
      })
      .regex(/^\d+$/, {
        message:
          validation?.phoneDigits || "Phone number must contain only digits",
      })
      .optional()
      .or(z.literal("")),
    note: z.string().optional(),
    confirmationLanguage: z.enum(["hindi", "english"]).optional(),
  });

export const wizardBookingSchema = z.object({
  mobile: z.string(),
  treatment: z.string(),
  date: z.date(),
  timeSlot: z.string(),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.email(),
  phoneNumber: z.string().optional(),
  note: z.string().optional(),
  emailLanguage: z.string().optional(),
});

export const quickAppointmentSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.email({
  message: "Invalid email address",
}),
  phone: z
    .string()
    .length(10, "Phone number must be exactly 10 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  message: z.string().optional(),
});
