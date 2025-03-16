"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Music, Trophy, UserCircle } from "lucide-react"; // Import the missing icons

import { useEffect, useRef } from "react";

function AudioVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = 400;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    const barCount = 60;
    const barWidth = canvas.width / barCount;
    const barHeights: number[] = [];

    for (let i = 0; i < barCount; i++) {
      barHeights[i] = Math.random() * 50 + 10;
    }

    let animationId: number;
    let hue = 240;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < barCount; i++) {
        const targetHeight = Math.random() * 80 + 20;
        barHeights[i] = barHeights[i] * 0.9 + targetHeight * 0.1;

        const x = i * barWidth;
        const height = barHeights[i];
        const y = canvas.height / 2 - height / 2;

        const gradient = ctx.createLinearGradient(x, y, x, y + height);
        gradient.addColorStop(0, `hsla(${(hue + i * 2) % 360}, 100%, 65%, 0.8)`);
        gradient.addColorStop(1, `hsla(${(hue + i * 2 + 40) % 360}, 100%, 50%, 0.4)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth - 2, height, 4);
        ctx.fill();
      }

      hue = (hue + 0.2) % 360;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none" style={{ filter: "blur(2px)" }} />;
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text">Audiq</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-500/20">
          Sign In
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center relative overflow-hidden">
        <AudioVisualizer />

        <h1 className="text-4xl md:text-6xl font-bold text-center max-w-4xl leading-tight z-10">
          Guess the Track. Beat the Scores.
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text"> Feel the Vibes.</span>
        </h1>

        <p className="mt-6 text-gray-400 text-center max-w-2xl text-lg z-10">Test your music knowledge with our interactive quizzes inspired by .fmbot's Quicz</p>

        <Button className="mt-10 px-8 py-6 text-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 border-0 z-10">Get Started</Button>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 md:py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Core Features</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
              <Music className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Track Quiz</h3>
            <p className="text-gray-400">Test your knowledge with our extensive library of music tracks across all genres and eras</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
              <Trophy className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Leaderboard</h3>
            <p className="text-gray-400">Compete with friends and music enthusiasts worldwide to climb the global rankings</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-green-500/50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
              <UserCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Profile Integration</h3>
            <p className="text-gray-400">Connect with your music streaming services to personalize quizzes based on your listening habits</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/20 flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to test your music knowledge?</h2>
          <Button className="px-8 py-6 text-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 border-0">Start Quizzing Now</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-800 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text">Audiq</span>
              <p className="text-gray-500 text-sm mt-2">Â© {new Date().getFullYear()} Audiq. All rights reserved.</p>
            </div>

            <div className="flex gap-8">
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-semibold mb-1">Links</h4>
                <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
                <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-semibold mb-1">Social</h4>
                <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Twitter
                </Link>
                <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Instagram
                </Link>
                <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Discord
                </Link>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-semibold mb-1">Legal</h4>
                <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
