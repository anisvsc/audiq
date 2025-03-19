"use client"

import { useState } from "react"
import Link from "next/link"
import { Music, Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true)
    try {
      // Add your login logic here
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignUp = async () => {
    setIsLoading(true)
    try {
      // Add your signup logic here
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
    } catch (error) {
      console.error('Signup failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md" role="banner">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Music className="h-6 w-6 text-primary" aria-hidden="true" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 text-transparent bg-clip-text">
            Audiq
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Main navigation">
          <Link 
            href="#features" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Features section"
          >
            Features
          </Link>
          <Link 
            href="#testimonials" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Testimonials section"
          >
            Testimonials
          </Link>
          <Link 
            href="#pricing" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Pricing section"
          >
            Pricing
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="hidden md:flex" 
            aria-label="Log in"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                Logging in...
              </>
            ) : (
              "Log in"
            )}
          </Button>
          <Button 
            aria-label="Sign up"
            onClick={handleSignUp}
            disabled={isLoading}
          >
            {isLoading ? (
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
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" id="mobile-menu" role="dialog" aria-label="Mobile menu">
              <div className="flex flex-col gap-4 mt-8">
                <Link 
                  href="#features" 
                  className="text-sm hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                  aria-label="Features section"
                >
                  Features
                </Link>
                <Link 
                  href="#testimonials" 
                  className="text-sm hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                  aria-label="Testimonials section"
                >
                  Testimonials
                </Link>
                <Link 
                  href="#pricing" 
                  className="text-sm hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                  aria-label="Pricing section"
                >
                  Pricing
                </Link>
                <Button 
                  className="mt-4" 
                  aria-label="Sign up"
                  onClick={handleSignUp}
                  disabled={isLoading}
                >
                  {isLoading ? (
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
                  aria-label="Log in"
                  onClick={handleLogin}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                      Logging in...
                    </>
                  ) : (
                    "Log in"
                  )}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
