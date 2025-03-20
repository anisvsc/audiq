"use client";

import Link from "next/link";
import { Music, Twitter, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
    ],
    social: [
      { name: "Twitter", href: "#", icon: <Twitter className="h-4 w-4" /> },
      { name: "Discord", href: "#", icon: <MessageCircle className="h-4 w-4" /> },
      { name: "Instagram", href: "#", icon: <Instagram className="h-4 w-4" /> },
    ],
  };

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-background/50 to-background">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="container relative z-10 py-12">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-8">
          {/* Branding Section - Full width on mobile */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
              <div className="rounded-lg bg-primary/10 p-2 backdrop-blur-sm">
                <Music className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Audiq</span>
            </Link>
            <p className="text-sm text-white/60 max-w-xs leading-relaxed">The ultimate music quiz platform for testing your knowledge and competing with friends.</p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white/90">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white/90 transition-colors inline-flex items-center gap-2">
                    <span className="bg-gradient-to-r from-transparent to-transparent hover:from-primary/50 hover:to-transparent bg-[length:0%_5px] hover:bg-[length:100%_5px] bg-no-repeat bg-left-bottom transition-all duration-500">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white/90">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white/90 transition-colors inline-flex items-center gap-2">
                    <span className="bg-gradient-to-r from-transparent to-transparent hover:from-primary/50 hover:to-transparent bg-[length:0%_5px] hover:bg-[length:100%_5px] bg-no-repeat bg-left-bottom transition-all duration-500">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white/90">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white/90 transition-colors inline-flex items-center gap-2 group">
                    <span className="bg-white/5 p-1.5 rounded-md group-hover:bg-white/10 transition-colors">{link.icon}</span>
                    <span className="bg-gradient-to-r from-transparent to-transparent hover:from-primary/50 hover:to-transparent bg-[length:0%_5px] hover:bg-[length:100%_5px] bg-no-repeat bg-left-bottom transition-all duration-500">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section - Stack on mobile */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
            <p className="text-xs text-white/60 text-center sm:text-left">© {new Date().getFullYear()} Audiq. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((text) => (
                <Link key={text} href="#" className="text-xs text-white/60 hover:text-white/90 transition-colors inline-flex items-center gap-2">
                  <span className="bg-gradient-to-r from-transparent to-transparent hover:from-primary/50 hover:to-transparent bg-[length:0%_5px] hover:bg-[length:100%_5px] bg-no-repeat bg-left-bottom transition-all duration-500">{text}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
