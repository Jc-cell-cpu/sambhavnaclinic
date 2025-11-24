"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-background py-4 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo Area - Assuming text based on image, or empty if not specified. 
            The image shows "Sambhavnaclinic" in the top banner, but the header seems to have navigation centered/right.
            Actually, looking at the image, the logo might be on the left but it's cut off or just white space?
            The image shows "Home About Us Services Contact Us" centered-ish.
            I will assume a logo placeholder or just the nav.
            Let's put a text logo "Sambhavna Clinic" for now or leave it empty if the design implies it.
            The image shows a lot of white space on the left.
            I'll add a placeholder logo.
        */}
                <div className="text-2xl font-bold text-primary hidden md:block">
                    {/* Placeholder for Logo if needed, or just empty space as per design if it's textless */}
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
                            <Button variant="ghost" className="flex items-center gap-1 text-muted-foreground bg-gray-100 hover:bg-gray-200">
                                ENG | ENGLISH <ChevronDown className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>ENG | ENGLISH</DropdownMenuItem>
                            <DropdownMenuItem>HIN | HINDI</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-md px-6">
                        Request A Call
                    </Button>
                </div>
            </div>
        </header>
    );
}
