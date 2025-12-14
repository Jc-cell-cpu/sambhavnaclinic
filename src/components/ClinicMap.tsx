"use client";

import React from "react";

export default function ClinicMap() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h3 className="text-[#00256E] font-bold uppercase tracking-wider mb-2 text-sm md:text-base">
            FIND US
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-[#333333]">
            Visit Our Clinic
          </h2>
        </div>

        <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.645934651397!2d72.8576433!3d19.1231873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c82c6109968d%3A0xc3c9053cc2c58971!2sSambhavna%20Ayurvedic%20Clinic!5e0!3m2!1sen!2sin!4v1633000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
