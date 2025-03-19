"use client"

import { Button } from "@/components/ui/button"
import { AudioVisualizer } from "@/components/ui/audio-visualizer"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 z-0">
        <AudioVisualizer />
      </div>
      <div className="container relative z-10 flex flex-col items-center text-center">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Test Your Music Knowledge with{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 text-transparent bg-clip-text">
              Audiq
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
            Challenge yourself with our interactive music quizzes. Guess the tracks, beat the scores, and climb the leaderboards.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="h-12 px-8">
            Start Quizzing
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8">
            Learn More
          </Button>
        </div>
        <div className="mt-16 flex items-center justify-center gap-8 text-muted-foreground">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-foreground">10K+</span>
            <span className="text-sm">Active Users</span>
          </div>
          <div className="h-10 w-px bg-border"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-foreground">50K+</span>
            <span className="text-sm">Tracks</span>
          </div>
          <div className="h-10 w-px bg-border"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-foreground">100+</span>
            <span className="text-sm">Genres</span>
          </div>
        </div>
      </div>
    </section>
  )
}
