import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'growth marketing blog',
  description: 'AI-powered growth marketing insights, GTM strategies, and autonomous agent capabilities.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">growth marketing blog</h1>
      <BlogPosts />
    </section>
  )
}
