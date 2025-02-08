"use client"

import { useEffect, useRef } from "react"

export default function FloatingHearts() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const hearts: { x: number; y: number; size: number; speed: number; opacity: number }[] = []

    function createHeart() {
      return {
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 100,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.5,
      }
    }

    // Initialize hearts
    for (let i = 0; i < 20; i++) {
      hearts.push(createHeart())
    }

    function drawHeart(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number) {
      ctx.beginPath()
      ctx.moveTo(x, y + size / 4)
      ctx.quadraticCurveTo(x, y, x + size / 4, y)
      ctx.quadraticCurveTo(x + size / 2, y, x + size / 2, y + size / 4)
      ctx.quadraticCurveTo(x + size / 2, y, x + (size * 3) / 4, y)
      ctx.quadraticCurveTo(x + size, y, x + size, y + size / 4)
      ctx.quadraticCurveTo(x + size, y + size / 2, x + (size * 3) / 4, y + (size * 3) / 4)
      ctx.lineTo(x + size / 2, y + size)
      ctx.lineTo(x + size / 4, y + (size * 3) / 4)
      ctx.quadraticCurveTo(x, y + size / 2, x, y + size / 4)
      ctx.fillStyle = `rgba(255, 182, 193, ${opacity})`
      ctx.fill()
    }

    function animate() {
      const context = ctx as CanvasRenderingContext2D;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)

      hearts.forEach((heart, index) => {
        heart.y -= heart.speed
        drawHeart(context, heart.x, heart.y, heart.size, heart.opacity)

        if (heart.y + heart.size < 0) {
          hearts[index] = createHeart()
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      // Cleanup
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}

