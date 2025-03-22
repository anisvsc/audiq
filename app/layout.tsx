import type { Metadata } from "next";

import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { ErrorBoundary } from "@/components/error-boundary";
import { AudioVisualizer } from "@/components/ui/audio-visualizer";
// import { ThemeProvider } from "@/components/theme-provider"

// euclid font
const euclid = localFont({
  src: [
    {
      path: "../public/fonts/EuclidCircularBRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/EuclidCircularBMedium.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Audiq - Music Quiz Platform",
  description: "Test your music knowledge with interactive quizzes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={cn(euclid.className, "bg-background antialiased relative min-h-screen")}>
        <div className="fixed inset-0 z-0">
          <AudioVisualizer />
        </div>
        <div className="relative z-10 ">
          {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem> */}
          <ErrorBoundary>{children}</ErrorBoundary>
          {/* </ThemeProvider> */}
        </div>
      </body>
    </html>
  );
}
