'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const posts = [
  {
    title: 'The Evolution of Python: Embracing Type Safety with mypy',
    slug: 'python-type-safety-mypy',
    date: 'Apr 8, 2024',
    readingTime: '6min read',
  },
  {
    title: 'Building Scalable Applications with Next.js',
    slug: 'scalable-nextjs-applications',
    date: 'Apr 1, 2024',
    readingTime: '8min read',
  },
]

export default function BlogSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <div className="mb-12">
        <h2 className="section-heading section-heading-primary">TECH</h2>
        <h2 className="section-heading section-heading-secondary">THOUGHTS</h2>
      </div>

      <div className="space-y-8">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <motion.article 
                className="group relative space-y-4 p-6 rounded-lg hover:bg-white/5 transition-colors"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-4xl font-bold group-hover:text-[#FF7F50] transition-colors">
                    {post.title}
                  </h3>
                  <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-[#FF7F50] transition-colors" />
                </div>
                <div className="flex gap-4 text-gray-400">
                  <time>{post.date}</time>
                  <span>{post.readingTime}</span>
                </div>
              </motion.article>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

