"use client";

import Image from "next/image";
import { ShinyButton } from "@/components/magicui/shiny-button";
import type { AnimationProps } from "framer-motion";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";

const buttonAnimation = (delay: number): Partial<AnimationProps> => ({
  initial: { "--x": "100%" },
  animate: { "--x": "-100%" },
  transition: {
    repeat: Infinity,
    repeatType: "loop" as const,
    duration: 2,
    repeatDelay: 2,
    delay: delay,
  },
});

function Iphone15ProDemo() {
  return (
    <div className="relative flex w-[100px] md:w-[600px] gap-4">
      <Iphone15Pro
        src="/Simulator Screenshot - iPhone 16 Pro - 2025-03-05 at 12.30.18.png"
        className="w-full h-auto"
      />
      <Iphone15Pro
        src="/Simulator Screenshot - iPhone 16 Pro - 2025-03-05 at 12.30.33.png"
        className="w-full h-auto"
      />
      <Iphone15Pro
        src="/Simulator Screenshot - iPhone 16 Pro - 2025-03-05 at 12.31.22.png"
        className="w-full h-auto"
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-start justify-between gap-12">
        
        {/* Left Section: Text and Buttons */}
        <div className="flex flex-col items-start text-left gap-4 sm:gap-8 md:w-1/2">
          <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white font-[family-name:var(--font-bebas-neue)] tracking-tight">
            My Game Weather
          </h1>
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white font-[family-name:var(--font-bebas-neue)] tracking-tight max-w-[900px]">
            The most advanced football weather app ever created
          </h2>
          <div className="flex gap-4 items-start justify-start w-full mt-8">
            {/* Apple Store Button */}
            <a
              href="https://apps.apple.com/your-app-link-here"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[164px] h-[72px] transition-all duration-200"
            >
              <ShinyButton
                className="w-full h-full hover:opacity-80 flex items-center justify-center overflow-hidden bg-black p-3 rounded-lg"
                {...buttonAnimation(0)}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                    alt="Download on the App Store"
                    width={240}
                    height={80}
                    className="object-contain"
                    priority
                  />
                </div>
              </ShinyButton>
            </a>

            {/* Google Play Button */}
            <a
              href="https://play.google.com/store/apps/your-app-link-here"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[164px] h-[72px] transition-all duration-200"
            >
              <ShinyButton
                className="w-full h-full hover:opacity-80 flex items-center justify-center overflow-hidden bg-black p-3 rounded-lg"
                {...buttonAnimation(2)}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src="/GetItOnGooglePlay_Badge_Web_color_English.png"
                    alt="Get it on Google Play"
                    width={240}
                    height={80}
                    className="object-contain"
                    priority
                  />
                </div>
              </ShinyButton>
            </a>
          </div>
        </div>

        {/* Right Section: Images */}
        <div className="flex items-center justify-center md:w-1/2 gap-8">
          <Iphone15ProDemo />
        </div>
      </div>
    </div>
  );
}
