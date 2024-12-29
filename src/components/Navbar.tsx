"use client"

import { HamburgerMenu } from "./hamburger-menu"

export function Navbar() {
  return (
    <div className="w-full flex justify-between items-center bg-transparent">
      <div className="text-4xl text-white font-[family-name:var(--font-bebas-neue)] p-4">
        My Game Weather
      </div>
      <div className="p-4">
        <HamburgerMenu />
      </div>
    </div>
  )
} 