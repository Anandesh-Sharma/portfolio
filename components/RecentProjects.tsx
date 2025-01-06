'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const projects = [
  {
    title: "Singularity",
    description: "A robust backend framework featuring services, events, background tasks, caching, logging, and more.",
    image: "https://framerusercontent.com/images/J8KnTDdKPmuTXgeQWP413V9gVys.png?scale-down-to=512",
    color: "bg-[#FF7F50]"
  },
  {
    title: "Env Parser",
    description: "A lightweight Python utility for parsing and validating environment variables, ensuring clean and efficient configuration for your Python projects.",
    image: "https://framerusercontent.com/images/X5Tk7cYbfqonYl3QQ5RwfMavRrQ.jpeg?scale-down-to=512",
    color: "bg-[#CCFF00]"
  },
  {
    title: "Emojifier",
    description: "A real-time AI system for identifying facial expressions, delivering accurate emotion recognition in images or video using advanced machine learning algorithms.",
    image: "https://framerusercontent.com/images/Hm3hh9yPcsPW146U3kqwhdin0.png?scale-down-to=512",
    color: "bg-[#FF7F50]"
  }
]

export default function RecentProjects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <div className="mb-12">
        <h2 className="section-heading section-heading-primary">RECENT</h2>
        <h2 className="section-heading section-heading-secondary">PROJECTS</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: index * 0.2,
              duration: 0.5,
              ease: "easeOut"
            }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="h-full"
            >
              <Card className="overflow-hidden bg-[#2A2A2A] border-none h-full flex flex-col group cursor-pointer">
                <motion.div 
                  className="relative aspect-video overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`absolute inset-0 ${project.color} opacity-10 
                    group-hover:opacity-20 transition-opacity duration-300`} 
                  />
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button variant="outline" className="text-white border-white hover:bg-white/20">
                        View Details
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div 
                  className="p-6 space-y-4 flex-grow"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.h3 
                    className="text-2xl font-bold"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-400 flex-grow">{project.description}</p>
                  <motion.div
                    initial={{ opacity: 0.8 }}
                    whileHover={{ 
                      opacity: 1,
                      x: 10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Button 
                      variant="outline" 
                      className="group/button relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        View Project
                        <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#FF7F50] to-[#CCFF00]"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Button>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

