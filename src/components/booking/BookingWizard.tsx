"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Step1Contact from "./Step1Contact";
import Step2OTP from "./Step2OTP";
import Step3Treatment from "./Step3Treatment";
import Step4DateTime from "./Step4DateTime";
import Step5Details from "./Step5Details";
import Step6Summary from "./Step6Summary";
import BookingSuccess from "./BookingSuccess";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { sendOTP } from "@/app/actions/otp";
import { submitWizardBooking } from "@/app/actions/appointment";
import {
  bookingStep1Schema,
  bookingStep2Schema,
  bookingStep3Schema,
  bookingStep4Schema,
  bookingStep5Schema,
} from "@/lib/schemas";

interface BookingFormData {
  mobile: string;
  otp: string;
  treatment: string | null;
  date: Date | null;
  timeSlot: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  note: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BookingWizard({ dictionary }: { dictionary: any }) {
  const {
    heading,
    subheading,
    sidebar,
    step1,
    step2,
    step3,
    step4,
    step5,
    step6,
    navigation,
  } = dictionary.bookingWizard;

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>({
    mobile: "",
    otp: "",
    treatment: null,
    date: null,
    timeSlot: null,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    note: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [errors, setErrors] = useState<any>({});
  const [isSendingOTP, setIsSendingOTP] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailLanguage, setEmailLanguage] = useState<"en" | "hi">("en");
  const [sentOTP, setSentOTP] = useState<string | null>(null);

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    setErrors({});
    try {
      const result = await submitWizardBooking({ ...formData, emailLanguage });
      if (result.success) {
        setIsSuccess(true);
      } else {
        setErrors({ submit: result.message });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrors({ submit: "An unexpected error occurred." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateStep = (step: number) => {
    try {
      setErrors({});
      switch (step) {
        case 1:
          bookingStep1Schema.parse({ contact: formData.mobile });
          break;
        case 2:
          bookingStep2Schema.parse({ otp: formData.otp });
          if (sentOTP && formData.otp !== sentOTP) {
            throw {
              errors: [
                {
                  path: ["otp"],
                  message: "Invalid OTP. Please check your email.",
                },
              ],
            };
          }
          break;
        case 3:
          bookingStep3Schema.parse({ treatment: formData.treatment });
          break;
        case 4:
          bookingStep4Schema.parse({
            date: formData.date,
            timeSlot: formData.timeSlot,
          });
          break;
        case 5:
          bookingStep5Schema.parse({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            note: formData.note,
          });
          break;
      }
      return true;
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const zodError = error as any;
      const validationIssues = zodError.issues || zodError.errors;

      if (validationIssues) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fieldErrors: any = {};

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        validationIssues.forEach((err: any) => {
          if (err.path) {
            let field = err.path[0];
            // Map generic schema fields to state fields
            if (field === "contact") field = "mobile";

            fieldErrors[field] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const isMobileContact = (val: string) => /^\d{10}$/.test(val);

  const nextStep = async () => {
    if (validateStep(currentStep)) {
      if (currentStep === 1) {
        if (isMobileContact(formData.mobile)) {
          setCurrentStep(3); // Skip OTP
        } else {
          // Send OTP for Email
          setIsSendingOTP(true);
          const result = await sendOTP(formData.mobile, emailLanguage);
          setIsSendingOTP(false);

          if (result.success) {
            setSentOTP(result.otp || null);
            setCurrentStep(2);
          } else {
            setErrors({ mobile: result.message });
          }
        }
      } else if (currentStep < 6) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep === 3) {
      if (isMobileContact(formData.mobile)) {
        setCurrentStep(1); // Skip OTP back
      } else {
        setCurrentStep(2);
      }
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1Contact
            mobile={formData.mobile}
            setMobile={(val) => setFormData({ ...formData, mobile: val })}
            emailLanguage={emailLanguage}
            setEmailLanguage={setEmailLanguage}
            labels={step1}
            error={errors.mobile}
          />
        );
      case 2:
        return (
          <Step2OTP
            otp={formData.otp}
            setOtp={(val) => setFormData({ ...formData, otp: val })}
            mobile={formData.mobile}
            labels={step2}
            isResending={isSendingOTP}
            error={errors.otp}
            onResend={async () => {
              setIsSendingOTP(true);
              const result = await sendOTP(formData.mobile, emailLanguage);
              setIsSendingOTP(false);
              if (result.success) {
                setSentOTP(result.otp || null);
              } else {
                setErrors({ otp: result.message });
              }
            }}
          />
        );
      case 3:
        return (
          <Step3Treatment
            selectedTreatment={formData.treatment}
            setTreatment={(val) => setFormData({ ...formData, treatment: val })}
            labels={step3}
            error={errors.treatment}
          />
        );
      case 4:
        return (
          <Step4DateTime
            selectedDate={formData.date}
            setDate={(val) => setFormData({ ...formData, date: val })}
            selectedSlot={formData.timeSlot}
            setSlot={(val) => setFormData({ ...formData, timeSlot: val })}
            labels={step4}
            error={errors.date || errors.timeSlot}
          />
        );
      case 5:
        return (
          <Step5Details
            formData={formData}
            updateField={(field, val) =>
              setFormData({ ...formData, [field]: val })
            }
            labels={step5}
            errors={errors}
            emailLanguage={emailLanguage}
            setEmailLanguage={setEmailLanguage}
          />
        );
      case 6:
        return <Step6Summary formData={formData} labels={step6} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {isSuccess ? (
        <BookingSuccess formData={formData} labels={step6.success} />
      ) : (
        <>
          <div className="text-center mb-12">
            <h4 className="text-[#0e5a65] font-bold tracking-wider text-sm uppercase mb-2">
              {subheading}
            </h4>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              {heading}
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left Sidebar */}
            <Sidebar currentStep={currentStep} labels={sidebar} />

            {/* Right Content Area */}
            <div className="flex-1 bg-white rounded-2xl shadow-sm border border-teal-100 p-8 min-h-[600px] flex flex-col justify-between relative">
              {/* Step Content */}
              <div className="flex-1">
                {errors.submit && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-medium">
                    {errors.submit}
                  </div>
                )}
                {renderStep()}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-end gap-4 border-t border-gray-100 pt-8 mt-4">
                {currentStep > 1 && (
                  <Button
                    variant="ghost"
                    onClick={prevStep}
                    className="text-gray-600 hover:text-[#0e5a65] hover:bg-teal-50 gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {navigation.goBack}
                  </Button>
                )}

                {currentStep < 6 && (
                  <Button
                    disabled={isSendingOTP}
                    onClick={nextStep}
                    className="bg-linear-to-r from-[#17899B] to-[#109C8E] hover:from-[#137a8b] hover:to-[#0d8579] text-white px-8 rounded-xl shadow-lg shadow-teal-500/20 disabled:opacity-70"
                  >
                    {isSendingOTP ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      navigation.next
                    )}
                  </Button>
                )}

                {currentStep === 6 && (
                  <Button
                    onClick={handleFinalSubmit}
                    disabled={isSubmitting}
                    className="bg-[#0e5a65] hover:bg-[#0b4851] text-white px-8 rounded-xl shadow-lg shadow-teal-900/20"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Scheduling...
                      </>
                    ) : (
                      navigation.confirm
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
