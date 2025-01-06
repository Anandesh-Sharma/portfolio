'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#2A2A2A] rounded-3xl p-8 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7F50] rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
      <div className="relative">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
          <Image
            src="https://avatars.githubusercontent.com/u/30695364?v=4"
            alt="Anandesh S."
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">Anandesh S.</h1>
        <p className="text-gray-400 mb-6">
          A software engineer specializing in building exceptional digital experiences.
        </p>
        <div className="flex gap-4">
          {[
            { icon: Github, href: "https://github.com/Anandesh-Sharma" },
            { icon: Linkedin, href: "https://linkedin.com/in/Anandesh-Sharma" },
            { icon: Instagram, href: "https://instagram.com/anandesh.dev" },
            { icon: Mail, href: "mailto:anandeshsharma@gmail.com" },
          ].map(({ icon: Icon, href }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF7F50] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

