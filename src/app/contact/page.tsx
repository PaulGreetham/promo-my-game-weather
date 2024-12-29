export default function Contact() {
  return (
    <div className="container mx-auto px-4">
      <main className="flex flex-col gap-8 items-center w-full max-w-2xl mx-auto">
        <h1 className="text-4xl font-normal text-white font-[family-name:var(--font-bebas-neue)]">Contact Us</h1>
        <div className="w-full text-white text-center">
          <p className="text-lg">
            Have questions or feedback? We&apos;d love to hear from you.
          </p>
          <p className="text-lg mt-6">
            Email us at:{" "}
            <a href="mailto:contact@mygameweather.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              contact@mygameweather.com
            </a>
          </p>
        </div>
      </main>
    </div>
  );
} 