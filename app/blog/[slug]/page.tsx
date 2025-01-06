import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism'
import { getBlogPost } from '@/lib/blog'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white font-sans">
      <article className="max-w-4xl mx-auto px-6 py-24">
        <header className="space-y-8 mb-16">
          <h1 className="text-5xl font-bold">{post.title}</h1>
          <div className="flex gap-4 text-gray-400">
            <time>{post.date}</time>
            <span>{post.readingTime}</span>
          </div>
        </header>
        <div className="prose prose-invert max-w-none">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypePrism],
              },
            }}
          />
        </div>
      </article>
    </div>
  )
}

