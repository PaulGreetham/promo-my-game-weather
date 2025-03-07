"use client";

import Image from "next/image";
import { ShinyButton } from "@/components/magicui/shiny-button";
import type { AnimationProps } from "framer-motion";
import { TextRevealByWord } from "@/components/magicui/text-reveal-by-word";
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

export function Iphone15ProDemo() {
  return (
    <div className="relative w-[100px] md:w-[166px]">
      <Iphone15Pro
        src="/Simulator Screenshot - iPhone 16 Pro - 2025-03-05 at 12.30.33.png"  // Ensure this path is correct and the image is in the public folder
        className="w-full h-auto"
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center">
        <div className="w-full max-w-[1000px] mx-auto px-4 flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col items-center text-center gap-4 sm:gap-8">
            <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white font-[family-name:var(--font-bebas-neue)] tracking-tight">
              My Game Weather
            </h1>
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white font-[family-name:var(--font-bebas-neue)] tracking-tight max-w-[900px]">
              The most advanced football weather app ever created
            </h2>
          </div>
          
          <Iphone15ProDemo />

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
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
      </div>

      {/* Text Reveal Section */}
      <TextRevealByWord 
        text="Stay ahead of the game with real-time weather updates, precise forecasts, and detailed analytics for every football venue. Whether you're a player, coach, or fan, make informed decisions with the most comprehensive weather data at your fingertips."
      />
    </div>
  );
}
