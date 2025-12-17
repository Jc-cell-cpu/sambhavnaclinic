"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Globe, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ENG");
  const pathname = usePathname();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home", isActive: pathname === "/" },
    {
      label: "About",
      children: [
        {
          href: "/about-us",
          label: "About Us",
          isActive: pathname === "/about-us",
        },
        {
          href: "/testimonials",
          label: "Testimonials",
          isActive: pathname === "/testimonials",
        },
      ],
    },
    {
      label: "Medical Services",
      children: [
        {
          href: "/services",
          label: "Services",
          isActive: pathname === "/services",
        },
        {
          href: "/departments",
          label: "Departments",
          isActive: pathname === "/departments",
        },
        {
          href: "/appointment",
          label: "Book an Appointment",
          isActive: pathname === "/appointment",
        },
      ],
    },
    {
      href: "/contact",
      label: "Contact Us",
      isActive: pathname === "/contact",
    },
  ];

  const languages = [
    { code: "ENG", label: "ENG | ENGLISH" },
    { code: "HIN", label: "HIN | HINDI" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-b border-white/30">
      <div className="container mx-auto md:max-w-7xl flex justify-between items-center px-4 md:px-8 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center z-50">
          <Image
            src="/images/logo.svg"
            alt="Sambhavna Clinic Logo"
            width={110}
            height={55}
            className="h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-gray-600">
          {navLinks.map((link) => {
            if (link.children) {
              const isActive = link.children.some((child) => child.isActive);
              // We need to control the open state to rotate the chevron, but using 'asChild' and hover
              // interactions with shadcn's DropdownMenu can be tricky for simple CSS states.
              // Instead, we'll rely on group-data-state from the trigger or just keep it simple.
              // Actually, shadcn DropdownMenu adds data-state="open" to the trigger.
              return (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`group flex items-center gap-1.5 transition-all duration-200 ease-out hover:text-teal-600 py-2 outline-none ${
                        isActive ? "text-teal-600 font-semibold" : ""
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 mt-0.5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    sideOffset={8}
                    className="rounded-2xl p-2 w-56 bg-white/95 backdrop-blur-sm border border-teal-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
                  >
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.label} asChild>
                        <Link
                          href={child.href}
                          className={`w-full cursor-pointer flex items-center justify-between rounded-xl px-4 py-3 mb-1 last:mb-0 transition-all duration-200 group ${
                            child.isActive
                              ? "bg-teal-50 text-teal-700 font-semibold"
                              : "text-gray-600 hover:bg-teal-50 hover:text-teal-600"
                          }`}
                        >
                          {child.label}
                          {/* Optional: Add a small arrow on hover */}
                          <ChevronDown
                            className={`w-3 h-3 -rotate-90 opacity-0 -translate-x-2 transition-all duration-200 ${
                              child.isActive
                                ? "opacity-100 translate-x-0"
                                : "group-hover:opacity-100 group-hover:translate-x-0"
                            }`}
                          />
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href!}
                className={
                  link.isActive
                    ? "relative text-teal-600 font-semibold px-4 py-2 rounded-full bg-teal-50 transition-all duration-200 ease-out"
                    : "transition-all duration-200 ease-out hover:text-teal-600 hover:-translate-y-px"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Side: Language Dropdown + CTA */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 shadow-sm rounded-xl px-4 py-2 h-auto transition-all duration-200"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{selectedLanguage}</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-xl">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  className="cursor-pointer"
                  onClick={() => setSelectedLanguage(lang.code)}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* CTA Button */}
          <Button className="bg-linear-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold rounded-xl px-6 py-2.5 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
            Request A Call
          </Button>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-teal-600 z-50 p-2 hover:bg-teal-50 rounded-lg transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
        >
          <div
            className={`transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white shadow-md border-t border-gray-100 overflow-hidden transition-all duration-300 ease-out relative z-50 ${
          isMobileMenuOpen
            ? "max-h-[85vh] opacity-100 overflow-y-auto"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 space-y-2">
          {/* Mobile Navigation Links */}
          {navLinks.map((link) => {
            if (link.children) {
              return (
                <div key={link.label} className="space-y-1">
                  <div className="text-gray-400 font-semibold text-xs tracking-wider uppercase px-4 py-2 mt-2">
                    {link.label}
                  </div>
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className={
                        child.isActive
                          ? "block text-teal-600 font-bold text-lg py-3 px-4 rounded-xl bg-teal-50 transition-colors ml-2 border-l-2 border-teal-500"
                          : "block text-gray-700 font-medium text-lg py-3 px-4 rounded-xl hover:bg-gray-50 hover:text-teal-600 transition-colors ml-2"
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href!}
                className={
                  link.isActive
                    ? "block text-teal-600 font-bold text-lg py-3 px-4 rounded-xl bg-teal-50 transition-colors mt-2"
                    : "block text-gray-700 font-bold text-lg py-3 px-4 rounded-xl hover:bg-gray-50 hover:text-teal-600 transition-colors mt-2"
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Mobile Language Selector */}
          <div className="pt-6 mt-4 border-t border-gray-100">
            <div className="text-gray-500 text-sm font-medium mb-2 px-4">
              Language
            </div>
            <div className="space-y-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`flex items-center w-full text-left py-3 px-4 rounded-xl transition-colors ${
                    selectedLanguage === lang.code
                      ? "bg-teal-50 text-teal-600 font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedLanguage(lang.code)}
                >
                  <Globe className="w-4 h-4 mr-3" />
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile CTA Button */}
          <div className="pt-4 pb-8">
            <Button
              className="w-full py-3 bg-linear-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request A Call
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
