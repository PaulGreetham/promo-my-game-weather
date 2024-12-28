import { HamburgerMenu } from '@/components/hamburger-menu';

export default function FAQs() {
  return (
    <div className="h-[100dvh] grid grid-rows-[1fr_auto_1fr] items-center justify-items-center p-4 sm:p-20">
      <HamburgerMenu />
      <div />
      <main className="flex flex-col gap-8 items-center w-full max-w-3xl mx-auto">
        <h1 className="text-4xl font-normal text-white font-[family-name:var(--font-bebas-neue)]">FAQs</h1>
        <div className="w-full space-y-6 px-4 text-white">
          <div>
            <h2 className="text-xl font-[family-name:var(--font-bebas-neue)] mb-2">How accurate are the weather forecasts?</h2>
            <p className="text-gray-300">Our forecasts are updated regularly using data from multiple reliable weather services.</p>
          </div>
          <div>
            <h2 className="text-xl font-[family-name:var(--font-bebas-neue)] mb-2">Which sports venues are supported?</h2>
            <p className="text-gray-300">We support major sports venues across the country. The list is continuously expanding.</p>
          </div>
        </div>
      </main>
      <div />
    </div>
  );
} 