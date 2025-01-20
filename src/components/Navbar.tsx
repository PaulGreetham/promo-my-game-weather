"use client"

import { HamburgerMenu } from "./hamburger-menu"
import { ModeToggle } from "./mode-toggle"

export function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center bg-[#004700] dark:bg-[#111111] fixed top-0 left-0 right-0 z-[3] h-[72px]">
      <div className="text-4xl text-white font-[family-name:var(--font-bebas-neue)] p-4">
        My Game Weather
      </div>
      <div className="p-4 flex items-center gap-4">
        <ModeToggle />
        <HamburgerMenu />
      </div>
    </nav>
  )
} 