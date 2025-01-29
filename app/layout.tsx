import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from 'next/font/google'
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Sidebar } from "@/components/sidebar/sidebar";
import { CursorAnimation } from "@/components/theme/cursor-animation";
import { cn } from "@/lib/utils";

const openSans = Open_Sans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Jhon Llyod Quizeo's Portfolio",
  description: "Jhon Llyod Quizeo's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("h-screen flex", openSans.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>  
          <Sidebar />
          <CursorAnimation />
          <main className="relative flex-1 overflow-y-auto bg-white dark:bg-gray-950 scroll-smooth">
              {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}