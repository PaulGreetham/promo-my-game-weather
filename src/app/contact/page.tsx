export default function Contact() {
  return (
    <div className="h-[100dvh] grid grid-rows-[1fr_auto_1fr] items-center justify-items-center p-4 sm:p-20">
      <div />
      <main className="flex flex-col gap-8 items-center w-full max-w-2xl mx-auto">
        <h1 className="text-4xl font-normal text-white font-[family-name:var(--font-bebas-neue)]">Contact Us</h1>
        <div className="w-full space-y-6 px-4 text-white text-center">
          <p className="text-lg">
            Have questions or feedback? We&apos;d love to hear from you.
          </p>
          <p className="text-lg">
            Email us at:{" "}
            <a href="mailto:contact@mygameweather.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              contact@mygameweather.com
            </a>
          </p>
        </div>
      </main>
      <div />
    </div>
  );
} 