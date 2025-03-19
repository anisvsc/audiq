import type { Metadata } from "next"
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import "./globals.css"
import { cn } from "@/lib/utils"
import { ErrorBoundary } from "@/components/error-boundary"
import { AudioVisualizer } from "@/components/ui/audio-visualizer"
// import { ThemeProvider } from "@/components/theme-provider"

const geistSans = GeistSans
const geistMono = GeistMono

export const metadata: Metadata = {
  title: "Audiq - Music Quiz Platform",
  description: "Test your music knowledge with interactive quizzes",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          GeistSans.className,
          "bg-background font-sans antialiased relative min-h-screen"
        )}
      >
        <div className="fixed inset-0 z-0">
          <AudioVisualizer />
        </div>
        <div className="relative z-10">
          {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem> */}
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          {/* </ThemeProvider> */}
        </div>
      </body>
    </html>
  )
}
