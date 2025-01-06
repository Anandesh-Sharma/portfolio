'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const roles = ["ENGINEER", "INNOVATOR", "ARTISAN"]

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isMovingDown, setIsMovingDown] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    const animateText = () => {
      const currentWord = roles[wordIndex]

      if (!isMovingDown) {
        if (!isDeleting && displayText === currentWord) {
          // Word is complete, wait before moving down
          timer = setTimeout(() => {
            setIsMovingDown(true)
          }, 1000)
          return
        }

        if (isDeleting) {
          // Deleting text
          setDisplayText(prev => prev.slice(0, -1))
          timer = setTimeout(animateText, 50)
        } else {
          // Typing text
          setDisplayText(currentWord.slice(0, displayText.length + 1))
          timer = setTimeout(animateText, 150)
        }
      } else {
        // After moving down animation completes
        timer = setTimeout(() => {
          setIsMovingDown(false)
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % roles.length)
          setDisplayText("")
        }, 500)
      }
    }

    timer = setTimeout(animateText, 100)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, wordIndex, isMovingDown])

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[#1C1C1C] blur-[100px] z-0"></div>
      <div className="relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-6xl md:text-8xl font-bold leading-none">SOFTWARE</h1>
            <motion.h2 
              animate={{
                y: isMovingDown ? 40 : 0,
                opacity: isMovingDown ? 0 : 1
              }}
              transition={{
                y: { type: "spring", stiffness: 100, damping: 20 },
                opacity: { duration: 0.3 }
              }}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#FF7F50] to-[#CCFF00] bg-clip-text text-transparent h-[1.1em] flex items-center"
              style={{ fontFamily: 'Hack, monospace' }}
            >
              {displayText}
              <span className="animate-blink ml-1">|</span>
            </motion.h2>
          </div>
          <p className="text-gray-400 text-xl max-w-2xl">
            Passionate about creating robust and scalable software solutions. Specialize in transforming ideas
            into elegantly engineered products.
          </p>
          <div className="flex gap-12 flex-wrap">
            {[
              { number: "+7", label: "YEARS OF EXPERIENCE" },
              { number: "+16", label: "PROJECTS COMPLETED" },
              { number: "+20", label: "WORLDWIDE CLIENTS" },
            ].map(({ number, label }) => (
              <div key={label} className="space-y-2">
                <div className="text-4xl font-bold text-[#FF7F50]">{number}</div>
                <div className="text-sm text-gray-400 whitespace-nowrap">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <Link
            href="#enterprise"
            className="group relative overflow-hidden rounded-3xl p-8 bg-[#FF7F50] hover:opacity-95 transition-opacity"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7F50] to-[#FF6B45]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <h3 className="text-3xl font-bold mb-2">ENTERPRISE</h3>
              <h4 className="text-3xl font-bold mb-2">ARCHITECTURE,</h4>
              <h4 className="text-3xl font-bold mb-4">MICRO SERVICES</h4>
              <ArrowRight className="w-8 h-8 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="#tech"
            className="group relative overflow-hidden rounded-3xl p-8 bg-[#CCFF00] text-black hover:opacity-95 transition-opacity"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#CCFF00] to-[#B8E600]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <h3 className="text-2xl font-bold mb-2">PYTHON, DATA, DOCKER,</h3>
              <h4 className="text-2xl font-bold mb-4">REACT, NODE.JS</h4>
              <ArrowRight className="w-8 h-8 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

