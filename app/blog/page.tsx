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

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-24"
        >
          <div>
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-8xl font-bold mb-4"
            >
              TECH
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-8xl font-bold text-gray-600"
            >
              THOUGHTS
            </motion.h1>
          </div>

          <div className="space-y-12">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <motion.article 
                    className="group relative space-y-4 p-6 rounded-lg hover:bg-white/5 transition-colors"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start justify-between">
                      <h2 className="text-4xl font-bold group-hover:text-[#FF7F50] transition-colors">
                        {post.title}
                      </h2>
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
        </motion.div>
      </div>
    </div>
  )
}

