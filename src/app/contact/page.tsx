'use client'

import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white font-[family-name:var(--font-bebas-neue)] tracking-tight">
              Contact Us
            </h1>
            <h2 className="text-4xl max-w-[700px] text-white/80 text-xl md:text-4xl font-[family-name:var(--font-bebas-neue)] tracking-tight">
              Have a question or feedback? We&apos;d love to hear from you.
            </h2>
          </div>
          <div className="w-full max-w-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
} 