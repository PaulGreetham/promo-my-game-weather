'use client'

import { useState } from 'react'
import { cn } from "@/lib/utils"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loading) return

    const form = e.target as HTMLFormElement
    const formValues = Object.fromEntries(new FormData(form).entries())

    setLoading(true)
    setSuccessMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      await response.json()
      setSuccessMessage('Thank you for contacting us!')
      form.reset()
    } catch (err) {
      console.error(err)
      alert('An error occurred while sending your message...')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md mx-auto space-y-6">
      <div className="space-y-2">
        <label className="block text-white text-xl font-[family-name:var(--font-bebas-neue)] tracking-tight">
          Name
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 font-sans text-base"
          />
        </label>
      </div>

      <div className="space-y-2">
        <label className="block text-white text-xl font-[family-name:var(--font-bebas-neue)] tracking-tight">
          Email
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 font-sans text-base"
          />
        </label>
      </div>

      <div className="space-y-2">
        <label className="block text-white text-xl font-[family-name:var(--font-bebas-neue)] tracking-tight">
          Message
          <textarea
            name="message"
            required
            rows={4}
            className="mt-1 block w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 font-sans text-base"
          />
        </label>
      </div>

      <button
        disabled={loading}
        type="submit"
        className={cn(
          "inline-flex items-center justify-center rounded-md text-xl px-4 py-2 font-[family-name:var(--font-bebas-neue)] tracking-tight bg-white/10 text-white hover:bg-white/20 dark:hover:bg-white/20 border border-white/20",
          loading && "opacity-50 cursor-not-allowed"
        )}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {successMessage && (
        <p className="text-green-400 text-center text-xl font-[family-name:var(--font-bebas-neue)] tracking-tight">{successMessage}</p>
      )}
    </form>
  )
} 