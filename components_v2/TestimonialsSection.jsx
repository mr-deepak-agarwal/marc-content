'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/data/mock'

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      setTimeout(() => setIsAnimating(false), 500)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" data-testid="testimonials-section" className="py-24 bg-[#F0F8F6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          {/* Large Heading - Insights Style */}
          <h2 
            data-testid="testimonials-heading"
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D342F] mb-6 leading-[1.1] tracking-tight"
          >
            What Our Clients Say
          </h2>
        </div>

        {/* ================= TESTIMONIAL CARD ================= */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-[#C2DDB4]/20">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-12 w-12 h-12 bg-[#4E9141] rounded-2xl flex items-center justify-center shadow-lg shadow-[#4E9141]/30">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* ================= CONTENT ================= */}
            <div
              data-testid="testimonial-content"
              className={`transition-all duration-500 ${
                isAnimating
                  ? 'opacity-0 translate-y-4'
                  : 'opacity-100 translate-y-0'
              }`}
            >
              {/* Testimonial quote */}
              <p className="text-xl lg:text-2xl font-medium text-[#47635D] leading-relaxed mb-8 pt-4 tracking-tight">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#C2DDB4] rounded-full flex items-center justify-center">
                  <span className="text-xl font-semibold text-[#4E9141]">
                    {testimonials[currentIndex].author.charAt(0)}
                  </span>
                </div>

                <div>
                  {/* Author name */}
                  <div className="text-[#212427] text-lg font-semibold tracking-tight">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-[#5D9F94]">
                    {testimonials[currentIndex].position}
                  </div>
                </div>
              </div>
            </div>

            {/* ================= NAVIGATION ================= */}
            <div className="absolute bottom-8 right-8 flex items-center gap-3">
              <button
                data-testid="testimonial-prev-btn"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-2 border-[#C2DDB4] flex items-center justify-center text-[#5D9F94] hover:border-[#4E9141] hover:text-[#4E9141] transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                data-testid="testimonial-next-btn"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-[#4E9141] flex items-center justify-center text-white hover:bg-[#4E9141] transition-all duration-300 hover:scale-110 shadow-lg shadow-[#4E9141]/30"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* ================= DOTS ================= */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  data-testid={`testimonial-dot-${index}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-[#4E9141]'
                      : 'w-2 h-2 bg-[#C2DDB4] hover:bg-[#5D9F94]'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
