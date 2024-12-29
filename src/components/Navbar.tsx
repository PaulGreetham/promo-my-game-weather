"use client"

import { HamburgerMenu } from "./hamburger-menu"

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full flex justify-between items-center">
        <div className="text-4xl text-white font-[family-name:var(--font-bebas-neue)] p-6">
          My Game Weather
        </div>
        <div className="p-6">
          <HamburgerMenu />
        </div>
      </div>
    </div>
  )
} 