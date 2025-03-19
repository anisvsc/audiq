"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div 
        className="container relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="rounded-3xl relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-primary/5 to-purple-600/10" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          
          {/* Content */}
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="mx-auto max-w-2xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70">
                  Ready to test your music knowledge?
                </h2>
                <p className="mt-4 text-lg text-white/70">
                  Join thousands of music enthusiasts and put your skills to the test. Sign up today and get access to all
                  our premium quizzes.
                </p>
              </motion.div>

              <motion.div 
                className="mt-8 flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button 
                  size="lg" 
                  className="h-12 px-8 bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/50 transition-all duration-300 group"
                >
                  Start Quizzing Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-12 px-8 border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white hover:text-white transition-all duration-300 group"
                >
                  View Demo
                  <Sparkles className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          <div className="absolute -left-24 -top-24 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:3rem_3rem] pointer-events-none" />
        </div>
      </motion.div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background to-background/0 pointer-events-none" />
    </section>
  )
}

