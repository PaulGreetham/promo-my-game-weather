import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${bebasNeue.variable} antialiased min-h-screen bg-[#004700] dark:bg-[#111111]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Fixed navbar */}
          <Navbar />
          
          {/* Background with dots */}
          <div className="fixed inset-x-0 top-[72px] bottom-0 z-[1]">
            <DotPattern 
              width={32} 
              height={32} 
              cx={2} 
              cy={2} 
              cr={1} 
              className="opacity-20 fill-white [mask-image:radial-gradient(65%_65%_at_center,white,transparent)] sm:[mask-image:radial-gradient(70%_70%_at_center,white,transparent)] md:[mask-image:radial-gradient(100%_100%_at_center,white,transparent)]"
            />
          </div>
          
          {/* Main content */}
          <main className="relative z-[2] min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
