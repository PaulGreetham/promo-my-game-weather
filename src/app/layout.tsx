import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

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
        className={`${bebasNeue.variable} antialiased bg-main bg-cover bg-center bg-fixed before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#098D48]/95 before:to-[#098D48]/90 before:z-[-1] relative`}
      >
        {children}
      </body>
    </html>
  );
}
