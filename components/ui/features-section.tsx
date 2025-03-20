"use client";

import { Music, Trophy, UserCircle, Headphones, BarChart3, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function FeaturesSection() {
  const features = [
    {
      icon: <Music className="h-10 w-10 text-white" />,
      title: "Extensive Track Library",
      description: "Access thousands of tracks across all genres and eras to test your music knowledge",
      gradient: "from-violet-600/10 via-violet-400/5 to-violet-500/0",
      iconGradient: "from-violet-500 to-violet-400",
      borderGradient: "hover:border-violet-500/50",
      shadowColor: "group-hover:shadow-violet-500/25",
    },
    {
      icon: <Trophy className="h-10 w-10 text-white" />,
      title: "Global Leaderboards",
      description: "Compete with friends and music enthusiasts worldwide to climb the rankings",
      gradient: "from-amber-600/10 via-amber-400/5 to-amber-500/0",
      iconGradient: "from-amber-500 to-amber-400",
      borderGradient: "hover:border-amber-500/50",
      shadowColor: "group-hover:shadow-amber-500/25",
    },
    {
      icon: <UserCircle className="h-10 w-10 text-white" />,
      title: "Personalized Experience",
      description: "Connect with your music streaming services for quizzes based on your listening habits",
      gradient: "from-blue-600/10 via-blue-400/5 to-blue-500/0",
      iconGradient: "from-blue-500 to-blue-400",
      borderGradient: "hover:border-blue-500/50",
      shadowColor: "group-hover:shadow-blue-500/25",
    },
    {
      icon: <Headphones className="h-10 w-10 text-white" />,
      title: "Audio Snippets",
      description: "Identify songs from short audio clips with varying difficulty levels",
      gradient: "from-rose-600/10 via-rose-400/5 to-rose-500/0",
      iconGradient: "from-rose-500 to-rose-400",
      borderGradient: "hover:border-rose-500/50",
      shadowColor: "group-hover:shadow-rose-500/25",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-white" />,
      title: "Detailed Statistics",
      description: "Track your progress and see how your music knowledge improves over time",
      gradient: "from-emerald-600/10 via-emerald-400/5 to-emerald-500/0",
      iconGradient: "from-emerald-500 to-emerald-400",
      borderGradient: "hover:border-emerald-500/50",
      shadowColor: "group-hover:shadow-emerald-500/25",
    },
    {
      icon: <Globe className="h-10 w-10 text-white" />,
      title: "Community Challenges",
      description: "Join weekly and monthly challenges with special themes and prizes",
      gradient: "from-purple-600/10 via-purple-400/5 to-purple-500/0",
      iconGradient: "from-purple-500 to-purple-400",
      borderGradient: "hover:border-purple-500/50",
      shadowColor: "group-hover:shadow-purple-500/25",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold tracking-tight py-2 sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70">Designed for Music Lovers</h2>
          <p className="mt-4 text-base md:text-lg  text-muted-foreground max-w-3xl mx-auto">Our platform offers a comprehensive set of features to challenge and enhance your music knowledge</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className={cn("group relative overflow-hidden h-full", "backdrop-blur-sm border border-white/10", "transition-all duration-300 ease-out", "hover:-translate-y-1", "bg-gradient-to-br", feature.gradient, feature.borderGradient, "hover:shadow-lg hover:shadow-black/50", feature.shadowColor)}>
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/20 to-black/50 z-0" />
                <CardHeader className="relative z-10">
                  <motion.div className={cn("rounded-2xl w-16 h-16 flex items-center justify-center mb-4", "bg-gradient-to-br shadow-lg", feature.iconGradient, "transition-transform duration-300 ease-out", "group-hover:scale-110 group-hover:rotate-[4deg]")} whileHover={{ scale: 1.1, rotate: 4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="text-xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base text-white/70">{feature.description}</CardDescription>
                </CardContent>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background to-background/0 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:3rem_3rem] pointer-events-none" />
    </section>
  );
}
