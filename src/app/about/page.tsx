import { HamburgerMenu } from '@/components/hamburger-menu';

export default function About() {
  return (
    <div className="h-[100dvh] grid grid-rows-[1fr_auto_1fr] items-center justify-items-center p-4 sm:p-20">
      <HamburgerMenu />
      <div />
      <main className="flex flex-col gap-6 items-center w-full">
        <h1 className="text-4xl font-normal text-white font-[family-name:var(--font-bebas-neue)]">About</h1>
        <div className="max-w-2xl mx-auto px-4 text-white">
          <p className="text-lg text-center">
            My Game Weather helps you plan your outdoor activities by providing accurate weather forecasts for your favorite sports venues.
          </p>
        </div>
      </main>
      <div />
    </div>
  );
} 