import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQs() {
  return (
    <div className="container mx-auto px-4">
      <main className="flex flex-col gap-6 sm:gap-8 items-center w-full max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-normal text-white font-[family-name:var(--font-bebas-neue)]">FAQs</h1>
        <div className="w-full px-0 sm:px-4">
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 sm:p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-white/20">
                <AccordionTrigger className="text-lg sm:text-xl font-[family-name:var(--font-bebas-neue)] text-white hover:text-white/80">
                  How accurate are the weather forecasts?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-300">
                  Our forecasts are updated regularly using data from multiple reliable weather services, ensuring you get the most accurate and up-to-date information for your venue.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-white/20">
                <AccordionTrigger className="text-lg sm:text-xl font-[family-name:var(--font-bebas-neue)] text-white hover:text-white/80">
                  Which sports venues are supported?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-300">
                  We support major sports venues across the country, including football stadiums, baseball parks, and outdoor arenas. Our list is continuously expanding to include more venues.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-white/20">
                <AccordionTrigger className="text-lg sm:text-xl font-[family-name:var(--font-bebas-neue)] text-white hover:text-white/80">
                  How often is the weather data updated?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-300">
                  Weather data is updated every hour to ensure you have the latest information for your venue. Real-time alerts are also available for sudden weather changes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-white/20">
                <AccordionTrigger className="text-lg sm:text-xl font-[family-name:var(--font-bebas-neue)] text-white hover:text-white/80">
                  Is the app free to use?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-300">
                  Yes, the basic version of My Game Weather is free to use. We also offer a premium version with additional features like extended forecasts and detailed weather analytics.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-white/20">
                <AccordionTrigger className="text-lg sm:text-xl font-[family-name:var(--font-bebas-neue)] text-white hover:text-white/80">
                  What weather metrics are displayed?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-300">
                  [Content to be added about temperature, precipitation, wind speed, humidity, and other weather metrics]
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-b border-white/20">
                <AccordionTrigger className="text-lg sm:text-xl font-[family-name:var(--font-bebas-neue)] text-white hover:text-white/80">
                  Can I get notifications for weather changes?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-300">
                  [Content to be added about notification system and alerts]
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-b border-white/20">
                <AccordionTrigger className="text-lg sm:text-xl font-[family-name:var(--font-bebas-neue)] text-white hover:text-white/80">
                  How far in advance can I check the forecast?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-300">
                  [Content to be added about forecast timeframes and accuracy]
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-none">
                <AccordionTrigger className="text-lg sm:text-xl font-[family-name:var(--font-bebas-neue)] text-white hover:text-white/80">
                  How safe is my personal information?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-300">
                  [Content to be added about unique features and benefits]
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-b border-white/20">
                <AccordionTrigger className="text-lg sm:text-xl font-[family-name:var(--font-bebas-neue)] text-white hover:text-white/80">
                  How far in advance can I check the forecast?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-300">
                  [Content to be added about forecast timeframes and accuracy]
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-none">
                <AccordionTrigger className="text-lg sm:text-xl font-[family-name:var(--font-bebas-neue)] text-white hover:text-white/80">
                  How safe is my personal information?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-300">
                  [Content to be added about unique features and benefits]
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  );
} 