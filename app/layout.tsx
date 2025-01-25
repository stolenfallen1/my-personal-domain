import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from 'next/font/google'
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Sidebar } from "@/components/sidebar/sidebar";
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
      <body className={cn("flex", openSans.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>  
          <Sidebar />
          <main className="relative max-w-screen-3xl mx-auto flex-1 bg-white dark:bg-gray-950">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
