"use client"

import { HamburgerMenu } from "./hamburger-menu"
import { ModeToggle } from "./mode-toggle"

export function Navbar() {
  return (
    <div className="w-full flex justify-between items-center bg-transparent">
      <div className="text-4xl text-white font-[family-name:var(--font-bebas-neue)] p-4">
        My Game Weather
      </div>
      <div className="p-4 flex items-center gap-4">
        <ModeToggle />
        <HamburgerMenu />
      </div>
    </div>
  )
} 