import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full">
        <h1 className="text-4xl font-normal text-white font-[family-name:var(--font-bebas-neue)]">My Game Weather</h1>
        <div className="flex gap-4 items-center justify-center w-full px-4">
          <a 
            href="https://apps.apple.com/your-app-link-here" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
              alt="Download on the App Store"
              width={200}
              height={80}
              priority
            />
          </a>
          <a 
            href="https://play.google.com/store/apps/your-app-link-here" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/GetItOnGooglePlay_Badge_Web_color_English.png"
              alt="Get it on Google Play"
              width={200}
              height={80}
              priority
            />
          </a>
        </div>
      </main>
    </div>
  );
}
