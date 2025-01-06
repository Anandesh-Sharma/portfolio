import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  readingTime: string
  content: string
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.mdx`)
    const fileContent = await fs.readFile(filePath, 'utf8')
    const { data, content } = matter(fileContent)

    return {
      slug,
      title: data.title,
      date: data.date,
      readingTime: data.readingTime,
      content,
    }
  } catch (error) {
    return null
  }
}

export async function getAllBlogPosts(): Promise<Omit<BlogPost, 'content'>[]> {
  const files = await fs.readdir(POSTS_DIR)
  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = path.basename(file, '.mdx')
      const filePath = path.join(POSTS_DIR, file)
      const fileContent = await fs.readFile(filePath, 'utf8')
      const { data } = matter(fileContent)

      return {
        slug,
        title: data.title,
        date: data.date,
        readingTime: data.readingTime,
      }
    })
  )

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

