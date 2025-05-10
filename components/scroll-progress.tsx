"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const progressBar = progressRef.current

    if (progressBar) {
      gsap.to(progressBar, {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      })
    }
  }, [])

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-[55] origin-left"
      style={{ width: "0%" }}
    />
  )
}

