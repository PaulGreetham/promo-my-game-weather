export default function Terms() {
  return (
    <div className="h-[100dvh] grid grid-rows-[1fr_auto_1fr] items-center justify-items-center p-4 sm:p-20">
      <div />
      <main className="flex flex-col gap-8 items-center w-full max-w-3xl mx-auto">
        <h1 className="text-4xl font-normal text-white font-[family-name:var(--font-bebas-neue)]">Terms &amp; Conditions</h1>
        <div className="w-full space-y-6 px-4 text-white">
          <div>
            <h2 className="text-xl font-[family-name:var(--font-bebas-neue)] mb-2">1. Terms of Use</h2>
            <p className="text-gray-300">By downloading and using My Game Weather, you agree to these terms and conditions.</p>
          </div>
          <div>
            <h2 className="text-xl font-[family-name:var(--font-bebas-neue)] mb-2">2. Privacy Policy</h2>
            <p className="text-gray-300">We respect your privacy and protect your personal information. See our privacy policy for details.</p>
          </div>
        </div>
      </main>
      <div />
    </div>
  );
} 