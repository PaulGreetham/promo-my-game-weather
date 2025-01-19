"use client";

import Image from "next/image";
import { ShinyButton } from "@/components/ui/shiny-button";
import type { AnimationProps } from "framer-motion";

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

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-48">
      <main className="flex flex-col gap-6 items-center w-full">
        <h1 className="text-4xl font-normal text-white font-[family-name:var(--font-bebas-neue)]">
          My Game Weather
        </h1>
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
      </main>
    </div>
  );
}
