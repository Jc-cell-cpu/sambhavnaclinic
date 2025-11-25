"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function Header() {
    return (
        <header className="bg-background py-4 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex items-center">
                    <Image src="/images/logo.svg" alt="Sambhavna Clinic Logo" width={120} height={60} className="h-auto" />
                </div>

                <nav className="hidden md:flex items-center gap-8 font-medium text-foreground/80">
                    <Link href="#" className="text-primary font-semibold border-b-2 border-primary">
                        Home
                    </Link>
                    <Link href="#" className="hover:text-primary transition-colors">
                        About Us
                    </Link>
                    <Link href="#" className="hover:text-primary transition-colors">
                        Services
                    </Link>
                    <Link href="#" className="hover:text-primary transition-colors">
                        Contact Us
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="flex items-center gap-1 text-muted-foreground bg-gray-100 hover:bg-gray-200"
                            >
                                ENG | ENGLISH <ChevronDown className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>ENG | ENGLISH</DropdownMenuItem>
                            <DropdownMenuItem>HIN | HINDI</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button
                        className="hover:bg-primary/90 text-white rounded-md px-6"
                        style={{
                            background: "linear-gradient(184.51deg, #17899B 4.02%, #109C8E 96.72%)",
                        }}
                    >
                        Request A Call
                    </Button>
                </div>
            </div>
        </header>
    )
}
