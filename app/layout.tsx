import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from 'next/font/google'
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Sidebar } from "@/components/sidebar/sidebar";
import { MobileSidebar } from "@/components/sidebar/mobile-sidebar";
import { cn } from "@/lib/utils";

const openSans = Open_Sans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "My Personal Domain",
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>  
          <Sidebar />
          <main className="relative flex flex-1">
            <MobileSidebar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
