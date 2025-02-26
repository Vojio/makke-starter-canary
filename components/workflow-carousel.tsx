"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const workflowSteps = [
  {
    name: "compose",
    title: "Compose",
    lightImage: "/workflow/light/compose-light.png",
    darkImage: "/workflow/dark/compose-dark.png",
  },
  {
    name: "chat",
    title: "Chat",
    lightImage: "/workflow/light/chat-light.png",
    darkImage: "/workflow/dark/chat-dark.png",
  },
  {
    name: "review",
    title: "Review",
    lightImage: "/workflow/light/review-light.png",
    darkImage: "/workflow/dark/review-dark.png",
  },
]

export function WorkflowCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const { theme } = useTheme()
  
  // Make sure component is mounted before rendering theme-dependent content
  useEffect(() => {
    setIsLoaded(true)
  }, [])
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % workflowSteps.length)
  }
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? workflowSteps.length - 1 : prevIndex - 1
    )
  }

  // Auto advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 10000)
    
    return () => clearInterval(timer)
  }, [])

  if (!isLoaded) return <div className="aspect-video w-full bg-card/50 rounded-lg animate-pulse"></div>

  const currentStep = workflowSteps[currentIndex]
  const imageSrc = theme === "dark" ? currentStep.darkImage : currentStep.lightImage

  return (
    <div className="relative max-w-full mx-auto">
      <div className="overflow-hidden rounded-lg border border-border/50 shadow-md">
        <div className="relative aspect-video w-full">
          <Image 
            src={imageSrc}
            alt={`${currentStep.title} workflow screenshot`}
            fill
            className="object-cover transition-all duration-300"
            priority={currentIndex === 0}
            sizes="(max-width: 768px) 100vw, 768px"
          />
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-4">
            <h4 className="dark:text-primary text-white text-xl font-medium">{currentStep.title}</h4>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button 
          variant="secondary" 
          size="icon" 
          className="h-8 w-8 rounded-full bg-card/50 backdrop-blur-sm"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
        
        <Button 
          variant="secondary" 
          size="icon" 
          className="h-8 w-8 rounded-full bg-card/50 backdrop-blur-sm"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
      
      <div className="mt-4 flex justify-center gap-2">
        {workflowSteps.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-primary w-6" 
                : "bg-primary/30"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}