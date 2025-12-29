/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";

import { Locale } from "@/i18n-config";

export default function ContactUs({
  dictionary,
  lang,
}: {
  dictionary: any;
  lang: Locale;
}) {
  const {
    contactInfoTitle,
    contactInfoDesc,
    locationTitle,
    locationAddress,
    phoneTitle,
    emailTitle,
    workingHoursTitle,
    workingHoursDays,
    workingHoursSunday,
    sendMessageTitle,
    labels,
    placeholders,
    subjectOptions,
    buttonText,
  } = dictionary.contactUs;
  const { phoneValue, emailValue } = dictionary.needHelp;

  const [state, action, isPending] = useActionState(
    submitContactForm.bind(null, lang),
    null
  );

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-[#333333] mb-6">
                {contactInfoTitle}
              </h3>
              <p className="text-[#4F4F4F] mb-8 leading-relaxed">
                {contactInfoDesc}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{
                      background:
                        "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#333333] mb-1">
                      {locationTitle}
                    </h4>
                    <p className="text-[#4F4F4F]">{locationAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{
                      background:
                        "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#333333] mb-1">
                      {phoneTitle}
                    </h4>
                    <p className="text-[#4F4F4F]">{phoneValue}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{
                      background:
                        "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#333333] mb-1">
                      {emailTitle}
                    </h4>
                    <p className="text-[#4F4F4F]">info@sambhavnaclinic.com</p>
                    <p className="text-[#4F4F4F]">{emailValue}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{
                      background:
                        "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
                    }}
                  >
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#333333] mb-1">
                      {workingHoursTitle}
                    </h4>
                    <p className="text-[#4F4F4F]">{workingHoursDays}</p>
                    <p className="text-[#4F4F4F]">{workingHoursSunday}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-[#333333] mb-6">
              {sendMessageTitle}
            </h3>
            <form action={action} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-[#333333]"
                  >
                    {labels.fullName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={placeholders.fullName}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#17899B] focus:ring-1 focus:ring-[#17899B] outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-[#333333]"
                  >
                    {labels.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder={placeholders.phone}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#17899B] focus:ring-1 focus:ring-[#17899B] outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#333333]"
                >
                  {labels.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={placeholders.email}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#17899B] focus:ring-1 focus:ring-[#17899B] outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-[#333333]"
                >
                  {labels.subject}
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#17899B] focus:ring-1 focus:ring-[#17899B] outline-none transition-all bg-white"
                >
                  <option value="">{subjectOptions.default}</option>
                  <option value="consultation">
                    {subjectOptions.consultation}
                  </option>
                  <option value="treatment">{subjectOptions.treatment}</option>
                  <option value="general">{subjectOptions.general}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-[#333333]"
                >
                  {labels.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder={placeholders.message}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#17899B] focus:ring-1 focus:ring-[#17899B] outline-none transition-all resize-none"
                ></textarea>
              </div>

              {state && (
                <div
                  className={`p-4 rounded-lg text-sm ${
                    state.success
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {state.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-4 px-6 rounded-lg text-white font-semibold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                style={{
                  background:
                    "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
                  opacity: isPending ? 0.7 : 1,
                  cursor: isPending ? "not-allowed" : "pointer",
                }}
              >
                {isPending ? "Sending..." : buttonText}
                {!isPending && <Send size={20} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
