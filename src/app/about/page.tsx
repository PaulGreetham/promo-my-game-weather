export default function About() {
  return (
    <div className="container mx-auto px-4">
      <main className="flex flex-col gap-6 items-center w-full">
        <h1 className="text-4xl font-normal text-white font-[family-name:var(--font-bebas-neue)]">About</h1>
        <div className="max-w-2xl mx-auto text-white">
          <p className="text-lg text-center">
            My Game Weather helps you plan your outdoor activities by providing accurate weather forecasts for your favorite sports venues.
          </p>
        </div>
      </main>
    </div>
  );
}