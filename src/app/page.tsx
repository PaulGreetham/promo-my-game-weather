import Image from 'next/image';
import { HamburgerMenu } from '@/components/hamburger-menu';

export default function Home() {
  return (
    <div className="h-[100dvh] grid grid-rows-[1fr_auto_1fr] items-center justify-items-center p-4 sm:p-20">
      <HamburgerMenu />
      <div />
      <main className="flex flex-col gap-6 items-center w-full">
        <h1 className="text-4xl font-normal text-white font-[family-name:var(--font-bebas-neue)]">My Game Weather</h1>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full px-4">
          <a 
            href="https://apps.apple.com/your-app-link-here" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity w-[160px] sm:w-[200px]"
          >
            <div className="w-full h-[48px] sm:h-[60px] relative">
              <Image
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                alt="Download on the App Store"
                fill
                style={{ objectFit: 'fill' }}
                priority
              />
            </div>
          </a>
          <a 
            href="https://play.google.com/store/apps/your-app-link-here" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity w-[160px] sm:w-[200px]"
          >
            <div className="w-full h-[48px] sm:h-[60px] relative">
              <Image
                src="/GetItOnGooglePlay_Badge_Web_color_English.png"
                alt="Get it on Google Play"
                fill
                style={{ objectFit: 'fill' }}
                priority
              />
            </div>
          </a>
        </div>
      </main>
      <div />
    </div>
  );
}
