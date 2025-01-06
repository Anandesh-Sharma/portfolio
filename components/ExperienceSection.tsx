'use client'

import { motion } from "framer-motion"
import { ArrowUpRight, Building2 } from 'lucide-react'
import Link from "next/link"

const experiences = [
  {
    role: "Compliance Innovation | Lead Engineer",
    company: "complianceinnovation.ai",
    companyUrl: "https://complianceinnovation.ai/",
    period: "Mar 2023 - Present",
    description: "Led the architecture and development of API Builders, achieving a 30% reduction in integration time for external partners and saving $30K every per year gravitee subscription"
  },
  {
    role: "PST.AG | Software Engineer in Data",
    company: "pst.ag",
    companyUrl: "https://pst.ag",
    period: "Sep 2022 - Mar 2023",
    description: "Orchestrated data extraction from diverse sources (websites, XML, PDFs, Excel Sheets), boosting accuracy by 30% and reducing extraction time by 20%."
  },
  {
    role: "Treez | Software Engineer",
    company: "treez.io",
    companyUrl: "https://treez.io",
    period: "Dec 2021 - May 2022",
    description: "Implemented frameworks (Data Quality, Governance, Trending, Validation, Profiling) using Bigdata, Spark, and Python, enhancing data accuracy by 25%."
  }
]

export default function ExperienceSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <div className="space-y-0">
        <h2 className="section-heading section-heading-primary">7 YEARS OF</h2>
        <h2 className="section-heading section-heading-secondary">EXPERIENCE</h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[31px] top-[40px] bottom-0 w-[2px] bg-neutral-800" />

        <div className="space-y-16">
          {experiences.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.2,
                duration: 0.5,
                ease: "easeOut"
              }}
              className="relative pl-20"
            >
              {/* Timeline icon */}
              <motion.div 
                className="absolute left-0 top-0"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2 + 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }}
              >
                <div className="bg-[#FF7F50] rounded-full p-4">
                  <Building2 className="w-6 h-6 text-background" />
                </div>
              </motion.div>

              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold">{job.role}</h3>
                    <Link 
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="group inline-flex items-center gap-1 text-[#FF7F50] hover:text-[#FF6B45] transition-colors"
                    >
                      {job.company}
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </div>
                  <time className="text-gray-400 shrink-0">{job.period}</time>
                </div>
                <motion.p 
                  className="text-gray-400 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  {job.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

