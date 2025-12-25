"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* <div className="text-center mb-16">
          <h3 className="text-[#00256E] font-bold uppercase tracking-wider mb-2 text-sm md:text-base">
            GET IN TOUCH
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-[#333333]">
            Contact Us
          </h2>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-[#333333] mb-6">
                Contact Information
              </h3>
              <p className="text-[#4F4F4F] mb-8 leading-relaxed">
                We are here to help you on your journey to recovery with
                authentic Ayurvedic treatments. Reach out to us for appointments
                or queries.
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
                      Our Location
                    </h4>
                    <p className="text-[#4F4F4F]">
                      E-66 Saradhapuri Phase-2, opposite Kailashi,
                      <br />
                      Kanker Khera, Baypass, Meerut, Uttar Pradesh 250001
                    </p>
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
                      Phone Number
                    </h4>
                    <p className="text-[#4F4F4F]">70377 09494</p>
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
                      Email Address
                    </h4>
                    <p className="text-[#4F4F4F]">info@sambhavnaclinic.com</p>
                    <p className="text-[#4F4F4F]">
                      support@sambhavnaclinic.com
                    </p>
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
                      Working Hours
                    </h4>
                    <p className="text-[#4F4F4F]">
                      Mon - Sat: 10:00 AM - 07:00 PM
                    </p>
                    <p className="text-[#4F4F4F]">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-[#333333] mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-[#333333]"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#17899B] focus:ring-1 focus:ring-[#17899B] outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-[#333333]"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#17899B] focus:ring-1 focus:ring-[#17899B] outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#333333]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#17899B] focus:ring-1 focus:ring-[#17899B] outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-[#333333]"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#17899B] focus:ring-1 focus:ring-[#17899B] outline-none transition-all bg-white"
                >
                  <option value="">Select a subject</option>
                  <option value="consultation">Book Consultation</option>
                  <option value="treatment">Treatment Inquiry</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-[#333333]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#17899B] focus:ring-1 focus:ring-[#17899B] outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-lg text-white font-semibold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                style={{
                  background:
                    "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
                }}
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
