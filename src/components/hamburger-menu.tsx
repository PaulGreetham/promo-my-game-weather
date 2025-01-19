"use client"

import { Menu, X } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"
import Link from "next/link"

export function HamburgerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-white hover:opacity-80 transition-opacity">
          <Menu className="h-10 w-10" />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-black/95 border-l-0 w-full sm:w-[400px] lg:w-[500px]">
        <SheetClose className="absolute right-6 top-6 text-white hover:opacity-80 transition-opacity">
          <X className="h-10 w-10" />
        </SheetClose>
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <nav className="flex flex-col gap-8 mt-16">
          <SheetClose asChild>
            <Link href="/" className="text-4xl sm:text-3xl text-white hover:text-gray-300 transition-colors text-center font-[family-name:var(--font-bebas-neue)]">
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/about" className="text-4xl sm:text-3xl text-white hover:text-gray-300 transition-colors text-center font-[family-name:var(--font-bebas-neue)]">
              About
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/faqs" className="text-4xl sm:text-3xl text-white hover:text-gray-300 transition-colors text-center font-[family-name:var(--font-bebas-neue)]">
              FAQs
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/terms" className="text-4xl sm:text-3xl text-white hover:text-gray-300 transition-colors text-center font-[family-name:var(--font-bebas-neue)]">
              T&amp;Cs
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/contact" className="text-4xl sm:text-3xl text-white hover:text-gray-300 transition-colors text-center font-[family-name:var(--font-bebas-neue)]">
              Contact
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 