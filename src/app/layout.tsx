import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { DotPattern } from "@/components/ui/dot-pattern";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "My Game Weather",
  description: "Promotional website for My Game Weather app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${bebasNeue.variable} antialiased h-full overflow-hidden`}>
        {/* Fixed background */}
        <div className="fixed inset-0 w-full h-full bg-[#098D48]">
          <DotPattern 
            width={32} 
            height={32} 
            cx={2} 
            cy={2} 
            cr={1} 
            className="opacity-20 fill-white [mask-image:radial-gradient(100%_100%_at_center,white,transparent)]"
          />
        </div>
        
        {/* Fixed navbar */}
        <div className="fixed top-0 left-0 right-0 z-[3]">
          <Navbar />
        </div>
        
        {/* Main content */}
        <main className="relative z-[2] h-full flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
