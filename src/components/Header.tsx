"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Globe, Menu, X } from "lucide-react"

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState("ENG")

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    const navLinks = [
        { href: "/", label: "Home", isActive: true },
        { href: "/about", label: "About Us", isActive: false },
        { href: "/services", label: "Services", isActive: false },
        { href: "/contact", label: "Contact Us", isActive: false },
    ]

    const languages = [
        { code: "ENG", label: "ENG | ENGLISH" },
        { code: "HIN", label: "HIN | HINDI" },
    ]

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
                <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={
                                link.isActive
                                    ? "relative text-teal-600 font-semibold px-4 py-2 rounded-full bg-teal-50 transition-all duration-200 ease-out"
                                    : "transition-all duration-200 ease-out hover:text-teal-600 hover:-translate-y-px"
                            }
                        >
                            {link.label}
                        </Link>
                    ))}
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
                    <Button
                        className="bg-linear-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold rounded-xl px-6 py-2.5 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                    >
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
                    <div className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
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
                className={`md:hidden bg-white shadow-md border-t border-gray-100 overflow-hidden transition-all duration-300 ease-out relative z-50 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="container mx-auto px-4 py-6 space-y-4">
                    {/* Mobile Navigation Links */}
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={
                                link.isActive
                                    ? "block text-teal-600 font-bold text-lg py-3 px-4 rounded-xl bg-teal-50 transition-colors"
                                    : "block text-gray-700 font-semibold text-lg py-3 px-4 rounded-xl hover:bg-gray-50 hover:text-teal-600 transition-colors"
                            }
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Mobile Language Selector */}
                    <div className="pt-4 border-t border-gray-100">
                        <div className="text-gray-500 text-sm font-medium mb-2 px-4">Language</div>
                        <div className="space-y-2">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    className={`flex items-center w-full text-left py-3 px-4 rounded-xl transition-colors ${selectedLanguage === lang.code
                                        ? 'bg-teal-50 text-teal-600 font-semibold'
                                        : 'text-gray-700 hover:bg-gray-50'
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
                    <div className="pt-4">
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
    )
}
