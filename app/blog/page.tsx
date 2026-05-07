import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Vridhi Labs Blog',
  description: 'AI-powered growth marketing insights, GTM strategies, and autonomous agent capabilities.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Vridhi Labs Blog</h1>
      <BlogPosts />
    </section>
  )
}
