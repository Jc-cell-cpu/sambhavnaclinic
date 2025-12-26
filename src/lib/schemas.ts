
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .length(10, "Phone number must be exactly 10 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const bookingStep1Schema = z.object({
  mobile: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    .regex(/^\d+$/, "Mobile number must contain only digits"),
});

export const bookingStep2Schema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
});

export const bookingStep3Schema = z.object({
  treatment: z
    .string({ message: "Please select a treatment" })
    .min(1, "Please select a treatment"),
});

export const bookingStep4Schema = z.object({
  date: z.date({ message: "Please select a date" }),
  timeSlot: z.string({ message: "Please select a time slot" }).min(1, "Please select a time slot"),
});

export const bookingStep5Schema = z.object({
  firstName: z.string().min(10, "First name must be at least 10 characters"),
  lastName: z.string().min(10, "Last name must be at least 10 characters"),
  email: z.string().email("Invalid email address"),
  note: z.string().optional(),
});

export const quickAppointmentSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .length(10, "Phone number must be exactly 10 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  message: z.string().optional(),
});
