'use client'

import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="mb-12">
        <h2 className="section-heading section-heading-primary">GET IN</h2>
        <h2 className="section-heading section-heading-secondary">TOUCH</h2>
      </div>
      <p className="text-gray-400 text-xl max-w-2xl">
        Interested in working together? Let's discuss your project and see how I can help.
      </p>
      <div className="flex gap-4">
        <Button className="bg-[#FF7F50] hover:bg-[#FF6B45] text-black text-lg py-6 px-8">
          Contact Me
          <ArrowRight className="ml-2 w-6 h-6" />
        </Button>
        <Button variant="outline" className="text-lg py-6 px-8">
          Download CV
        </Button>
      </div>
    </motion.section>
  )
}

