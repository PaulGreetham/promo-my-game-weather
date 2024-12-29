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
    <html lang="en">
      <body
        className={`${bebasNeue.variable} antialiased min-h-screen bg-main bg-cover bg-center bg-fixed before:content-[''] before:fixed before:inset-0 before:bg-gradient-to-br before:from-[#098D48]/95 before:to-[#098D48]/90 before:z-[-1]`}
      >
        <Navbar />
        <div className="pt-48 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
