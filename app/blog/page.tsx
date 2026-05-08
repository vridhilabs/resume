import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Growth Marketing',
  description: 'Growth marketing, GTM strategies, and autonomous agent Notes.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Vridhi Labs Blog</h1>
      <BlogPosts />
    </section>
  )
}
