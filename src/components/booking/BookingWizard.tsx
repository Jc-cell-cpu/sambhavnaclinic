"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Step1Contact from "./Step1Contact";
import Step2OTP from "./Step2OTP";
import Step3Treatment from "./Step3Treatment";
import Step4DateTime from "./Step4DateTime";
import Step5Details from "./Step5Details";
import Step6Summary from "./Step6Summary";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface BookingFormData {
  mobile: string;
  otp: string;
  treatment: string | null;
  date: Date | null;
  timeSlot: string | null;
  firstName: string;
  lastName: string;
  email: string;
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
    note: "",
  });

  const nextStep = () => {
    // Basic validation logic could go here
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1Contact
            mobile={formData.mobile}
            setMobile={(val) => setFormData({ ...formData, mobile: val })}
            labels={step1}
          />
        );
      case 2:
        return (
          <Step2OTP
            otp={formData.otp}
            setOtp={(val) => setFormData({ ...formData, otp: val })}
            mobile={formData.mobile}
            labels={step2}
          />
        );
      case 3:
        return (
          <Step3Treatment
            selectedTreatment={formData.treatment}
            setTreatment={(val) => setFormData({ ...formData, treatment: val })}
            labels={step3}
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
          />
        );
      case 6:
        return <Step6Summary formData={formData} labels={step6} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:px-8 max-w-7xl">
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
          <div className="flex-1">{renderStep()}</div>

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
                onClick={nextStep}
                className="bg-linear-to-r from-[#17899B] to-[#109C8E] hover:from-[#137a8b] hover:to-[#0d8579] text-white px-8 rounded-xl shadow-lg shadow-teal-500/20"
              >
                {navigation.next}
                {/* <ArrowRight className="w-4 h-4 ml-2" /> */}
              </Button>
            )}

            {currentStep === 6 && (
              <Button className="bg-[#0e5a65] hover:bg-[#0b4851] text-white px-8 rounded-xl">
                {navigation.confirm}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
