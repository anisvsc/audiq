"use client";

import { Button } from "@/components/ui/button";
import { AudioVisualizer } from "@/components/ui/audio-visualizer";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { number: "10K+", label: "Active Users" },
  { number: "50K+", label: "Tracks" },
  { number: "100+", label: "Genres" },
] as const;

export function HeroSection() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section className="relative overflow-hidden py-20 md:py-32 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <AudioVisualizer />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/0" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:3rem_3rem]" />

      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.div className="space-y-6 max-w-4xl" initial="hidden" animate="visible" variants={fadeUpVariants}>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl ">
            Unleash Your Music Genius with <span className="bg-gradient-to-r from-violet-400 via-primary to-purple-400 text-transparent bg-clip-text">Audiq</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-white/70 text-base md:text-lg leading-relaxed">Challenge yourself with our interactive music quizzes. Guess the tracks, beat the scores, and climb the leaderboards.</p>
        </motion.div>

        <motion.div className="mt-10 flex flex-wrap gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
          <Button size="lg" variant="gradient" className="h-12 w-48 px-8 group">
            Start Quizzing
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 w-48 px-8 group border-white/10 bg-white/5 hover:bg-white/10">
            Learn More
            <Sparkles className="ml-2 h-4 w-4 transition-transform animate-pulse" />
          </Button>
        </motion.div>

        <motion.div className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-16" variants={statsVariants} initial="hidden" animate="visible">
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={statItemVariants} className="flex flex-col items-center">
              <span className="text-4xl font-bold bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">{stat.number}</span>
              <span className="text-sm text-white/60 mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -left-24 -top-24 size-[900px] sm:size-[3500px]  bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -right-24 -bottom-24 size-[900px] sm:size-[3500px]  bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
    </motion.section>
  );
}
