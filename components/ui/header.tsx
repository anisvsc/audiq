"use client"

import { useState } from "react"
import Link from "next/link"
import { Music, Loader2, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [isSigningUp, setIsSigningUp] = useState(false)

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
  ]

  const handleLogin = async () => {
    setIsLoggingIn(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setIsLoggingIn(false)
    }
  }

  const handleSignUp = async () => {
    setIsSigningUp(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
    } catch (error) {
      console.error('Signup failed:', error)
    } finally {
      setIsSigningUp(false)
    }
  }

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      role="banner"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link 
          href="/"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <div className="rounded-lg bg-primary/10 p-2 backdrop-blur-sm">
            <Music className="h-6 w-6 text-primary" aria-hidden="true" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 text-transparent bg-clip-text">
            Audiq
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className="group relative text-sm text-white/70 hover:text-white transition-colors"
              aria-label={`${item.name} section`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-primary to-purple-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="hidden md:flex hover:bg-white/5" 
            aria-label="Log in"
            onClick={handleLogin}
            disabled={isLoggingIn}
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                Logging in...
              </>
            ) : (
              "Log in"
            )}
          </Button>
          <Button 
            variant="gradient"
            className="hidden md:flex"
            aria-label="Sign up"
            onClick={handleSignUp}
            disabled={isSigningUp}
          >
            {isSigningUp ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                Signing up...
              </>
            ) : (
              "Sign up"
            )}
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-white/5"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              id="mobile-menu" 
              role="dialog" 
              aria-label="Mobile menu"
              className="w-full max-w-xs border-white/10 bg-background/95 backdrop-blur-xl"
            >
              <nav className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href} 
                    className="text-lg text-white/70 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                    aria-label={`${item.name} section`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-4 mt-4">
                  <Button 
                    variant="gradient"
                    className="w-full"
                    aria-label="Sign up"
                    onClick={handleSignUp}
                    disabled={isSigningUp}
                  >
                    {isSigningUp ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                        Signing up...
                      </>
                    ) : (
                      "Sign up"
                    )}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-white/10 hover:bg-white/5"
                    aria-label="Log in"
                    onClick={handleLogin}
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                        Logging in...
                      </>
                    ) : (
                      "Log in"
                    )}
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}