"use client"

import {useEffect, useRef} from "react"

export function DynamicBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Particle[] = []
        const particleCount = 100
        const colors = ["#4a5568", "#718096", "#a0aec0"]

        class Particle {
            x: number
            y: number
            radius: number
            color: string
            speedX: number
            speedY: number

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.radius = Math.random() * 2 + 1
                this.color = colors[Math.floor(Math.random() * colors.length)]
                this.speedX = Math.random() * 3 - 1.5
                this.speedY = Math.random() * 3 - 1.5
            }

            draw() {
                if (!ctx) return
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
                ctx.fillStyle = this.color
                ctx.fill()
            }

            update() {
                if (!canvas) return
                this.x += this.speedX
                this.y += this.speedY

                if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                    this.speedX = -this.speedX
                }

                if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                    this.speedY = -this.speedY
                }

                this.draw()
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle())
        }

        function animate() {
            if (!ctx || !canvas) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach((particle) => particle.update())
            requestAnimationFrame(animate)
        }

        animate()

        const handleResize = () => {
            if (!canvas) return
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10"/>
}

