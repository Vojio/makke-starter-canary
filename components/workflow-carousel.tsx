"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { carouselSteps } from "@/app/content"

export function WorkflowCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselSteps.length)
  }

  const previous = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? carouselSteps.length - 1 : prevIndex - 1)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        previous()
      } else if (e.key === 'ArrowRight') {
        next()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (!mounted) return null

  const currentStep = carouselSteps[currentIndex]
  const imageSrc = theme === 'dark' ? currentStep.darkImage : currentStep.lightImage
  const totalSlides = carouselSteps.length

  return (
    <div 
      className="relative" 
      role="region" 
      aria-roledescription="carousel"
      aria-label="Workflow demonstration"
    >
      <div className="aspect-[16/10] relative overflow-hidden rounded-xl shadow-lg border border-border/50">
        <Image
          src={imageSrc}
          alt={`${currentStep.title} workflow step screenshot`}
          fill
          className="object-cover transition-opacity duration-200 ease-in-out"
          priority={currentIndex === 0}
        />
        <div 
          className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent"
          aria-hidden="true"
        >
          <h4 className="text-white text-xl font-medium">
            {currentStep.title}
          </h4>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-12 flex justify-center gap-2 px-4">
        {carouselSteps.map((step, index) => (
          <button
            key={step.name}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-primary/90 w-6" : "bg-primary/20 hover:bg-primary/30"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 top-1/2 flex items-center justify-between -translate-y-1/2 px-4">
        <Button
          variant="ghost"
          size="icon"
          className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-colors duration-150 ease shadow-lg"
          onClick={previous}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-colors duration-150 ease shadow-lg"
          onClick={next}
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="sr-only" aria-live="polite">
        Showing slide {currentIndex + 1} of {totalSlides}
      </div>
    </div>
  )
}