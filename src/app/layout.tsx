import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

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
      <body className={`${bebasNeue.variable} antialiased h-full`}>
        {/* Fixed background */}
        <div className="fixed inset-0 w-full h-full bg-main bg-cover bg-center before:content-[''] before:fixed before:inset-0 before:bg-gradient-to-br before:from-[#098D48]/95 before:to-[#098D48]/90 before:z-[1]" />
        
        {/* Fixed navbar */}
        <div className="fixed top-0 left-0 right-0 z-[3]">
          <Navbar />
        </div>
        
        {/* Scrollable content */}
        <main className="relative z-[2] h-full overflow-y-auto">
          <div className="py-48">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
