'use client'

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2A2A2A] py-8 mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400">© 2024 Anandesh S. All rights reserved.</p>
          <div className="flex gap-6">
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
                className="text-gray-400 hover:text-[#FF7F50] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

