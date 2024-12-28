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
        <button className="fixed top-4 right-4 p-2 text-white hover:opacity-80 transition-opacity">
          <Menu className="h-10 w-10" />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-black/95 border-l-0 w-full sm:max-w-full">
        <SheetClose className="absolute right-4 top-4 p-2 text-white hover:opacity-80 transition-opacity">
          <X className="h-10 w-10" />
        </SheetClose>
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <nav className="flex flex-col gap-8 mt-16">
          <Link href="/" className="text-5xl sm:text-3xl text-white hover:text-gray-300 transition-colors text-center font-[family-name:var(--font-bebas-neue)]">
            Home
          </Link>
          <Link href="/about" className="text-5xl sm:text-3xl text-white hover:text-gray-300 transition-colors text-center font-[family-name:var(--font-bebas-neue)]">
            About
          </Link>
          <Link href="/faqs" className="text-5xl sm:text-3xl text-white hover:text-gray-300 transition-colors text-center font-[family-name:var(--font-bebas-neue)]">
            FAQs
          </Link>
          <Link href="/terms" className="text-5xl sm:text-3xl text-white hover:text-gray-300 transition-colors text-center font-[family-name:var(--font-bebas-neue)]">
            T&Cs
          </Link>
          <Link href="/contact" className="text-5xl sm:text-3xl text-white hover:text-gray-300 transition-colors text-center font-[family-name:var(--font-bebas-neue)]">
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 