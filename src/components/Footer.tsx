import {
  MapPin,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Departments", path: "#departments" },
    { name: "Testimonials", path: "#testimonials" },
    { name: "FAQs", path: "#faqs" },
    { name: "Contact Us", path: "#contact-us" },
  ];

  return (
    <footer
      className="bg-white pt-16 pb-12 px-4 md:px-8 font-sans"
      style={{
        borderTop: "1px solid",
        borderImageSource:
          "linear-gradient(270.03deg, rgba(17, 136, 0, 0.870588) 0.02%, rgba(0, 150, 136, 0.935294) 50.35%, #056271 103.43%)",
        borderImageSlice: 1,
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Brand & Contact Info */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-[#0e5c66]">
            ShambhavnaClinic
          </h2>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-1" />
              <span className="text-gray-700 font-medium">
                Meerut, Uttar Pradesh 250001
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-teal-600 shrink-0" />
              <span className="text-gray-700 font-medium">
                Sambhavnaclinic@gmail.com
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-teal-600 shrink-0" />
              <span className="text-gray-700 font-medium">
                Sambhavnaclinic.com
              </span>
            </li>
          </ul>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-[#0e5c66] uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {/* Hardcode About Us to verify functionality first, or add to array */}
            {/* <li>
              <Link
                href="/about-us"
                className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
              >
                About Us
              </Link>
            </li> */}
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Newsletter & Socials */}
        <div className="flex flex-col gap-8">
          {/* Stay Updated */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-[#0e5c66] uppercase tracking-wide">
              Stay Updated
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Receive integrative cancer care Insights recover stories and
              wellness rituals curated by our clinical experts
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="grow bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-100"
              />
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors">
                Join
              </button>
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-[#0e5c66] uppercase tracking-wide">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow group border border-gray-100"
              >
                <Facebook className="w-5 h-5 text-teal-600 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/sambhavna_clinic?igsh=MzJua2E1bDdubTNh"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow group border border-gray-100"
              >
                <Instagram className="w-5 h-5 text-teal-600 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow group border border-gray-100"
              >
                <Youtube className="w-5 h-5 text-teal-600 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
