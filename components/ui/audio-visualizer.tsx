"use client"

import { useEffect, useRef, useState } from "react"

export function AudioVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) {
      setError("Canvas element not found")
      return
    }

    const ctx = canvas.getContext("2d")
    if (!ctx) {
      setError("Could not get canvas context")
      return
    }

    const setCanvasDimensions = () => {
      try {
        const rect = container.getBoundingClientRect()
        const dpr = window.devicePixelRatio || 1
        
        // Use actual screen coordinates for dimensions
        const screenWidth = window.innerWidth
        const screenHeight = window.innerHeight
        
        // Set canvas dimensions to match screen size
        canvas.width = screenWidth * dpr
        canvas.height = screenHeight * dpr
        
        // Scale canvas style to match container size
        canvas.style.width = `${rect.width}px`
        canvas.style.height = `${rect.height}px`
        
        // Reset transform and apply new scale
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.scale(dpr * (screenWidth / rect.width), dpr * (screenHeight / rect.height))
      } catch (err) {
        setError("Failed to set canvas dimensions")
      }
    }

    const updateDimensions = () => {
      setCanvasDimensions()
      initBars()
    }

    const resizeObserver = new ResizeObserver(updateDimensions)
    resizeObserver.observe(container)

    // Calculate bar dimensions based on screen width
    const getBarCount = () => Math.max(20, Math.floor(window.innerWidth / 24))
    const getBarWidth = (count: number) => window.innerWidth / count

    let barHeights: number[] = []
    let barCount: number
    let barWidth: number

    const initBars = () => {
      barCount = getBarCount()
      barWidth = getBarWidth(barCount)
      barHeights = Array(barCount).fill(0).map(() => Math.random() * 50 + 10)
    }

    initBars()
    let animationId: number
    let hue = 250 // Start with a purple hue

    const animate = () => {
      try {
        // Get actual screen dimensions for clearing
        const width = window.innerWidth
        const height = window.innerHeight
        ctx.clearRect(0, 0, width, height)

        for (let i = 0; i < barCount; i++) {
          // Create a more natural movement
          const targetHeight = Math.random() * 80 + 20
          barHeights[i] = barHeights[i] * 0.9 + targetHeight * 0.1

          const x = i * barWidth
          const height = barHeights[i]
          const y = height / 2 - height / 2

          // Create a gradient with more sophisticated colors
          const gradient = ctx.createLinearGradient(x, y, x, y + height)
          gradient.addColorStop(0, `hsla(${(hue + i * 1.5) % 360}, 80%, 65%, 0.6)`)
          gradient.addColorStop(1, `hsla(${(hue + i * 1.5 + 30) % 360}, 80%, 50%, 0.2)`)

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.roundRect(x, y, Math.max(2, barWidth - 2), height, 4)
          ctx.fill()
        }

        hue = (hue + 0.1) % 360 // Slowly change the hue

        animationId = requestAnimationFrame(animate)
      } catch (err) {
        setError("Animation error occurred")
        cancelAnimationFrame(animationId)
      }
    }

    animate()

    // Add zoom level listener
    const handleZoom = () => {
      updateDimensions()
    }
    window.addEventListener('resize', handleZoom)

    return () => {
      resizeObserver.disconnect()
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleZoom)
    }
  }, [])

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
        <p>Failed to load audio visualizer</p>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="w-full h-full absolute inset-0 overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="opacity-30 pointer-events-none absolute inset-0 w-full h-full" 
        style={{ filter: "blur(3px)" }}
        aria-hidden="true"
      />
    </div>
  )
}
