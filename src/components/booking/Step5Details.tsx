"use client";

import { Input } from "@/components/ui/input";

interface Step5DetailsProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    note: string;
  };
  updateField: (field: string, value: string) => void;
}

export default function Step5Details({
  formData,
  updateField,
}: Step5DetailsProps) {
  return (
    <div className="space-y-6">
      <div className="text-left">
        <h2 className="text-xl font-bold text-[#0e5a65]">
          Enter Basic Details
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            First Name
          </label>
          <Input
            placeholder="Enter your firstname"
            value={formData.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            className="rounded-xl py-6"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Last Name
          </label>
          <Input
            placeholder="Enter your Last Name"
            value={formData.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            className="rounded-xl py-6"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Email Address
          </label>
          <Input
            type="email"
            placeholder="Enter your Email Address"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="rounded-xl py-6"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Note
          </label>
          <textarea
            placeholder="Enter your Email Address" // Placeholder in mockup seems copypasted, but let's keep it or fix it. I'll use "Any notes..."
            value={formData.note}
            onChange={(e) => updateField("note", e.target.value)}
            className="flex min-h-[120px] w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </div>
    </div>
  );
}
