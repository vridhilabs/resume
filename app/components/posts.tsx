import Link from 'next/link'
import { getBlogPosts, getPostsByTag, getAllTags } from 'app/blog/utils'

export function BlogPosts({ tag }: { tag?: string }) {
  let allBlogs = tag ? getPostsByTag(tag) : getBlogPosts()
  let allTags = getAllTags()

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href="/blog"
          className={`px-3 py-1 rounded-full text-sm ${
            !tag 
              ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900' 
              : 'border border-neutral-300 dark:border-neutral-600 hover:border-neutral-900 dark:hover:border-neutral-100'
          }`}
        >
          all
        </Link>
        {allTags.map(t => (
          <Link
            key={t}
            href={`/blog?tag=${t}`}
            className={`px-3 py-1 rounded-full text-sm ${
              tag === t 
                ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900' 
                : 'border border-neutral-300 dark:border-neutral-600 hover:border-neutral-900 dark:hover:border-neutral-100'
            }`}
          >
            {t}
          </Link>
        ))}
      </div>

      {allBlogs.length > 0 ? (
        <div>
          {allBlogs
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
              ) {
                return -1
              }
              return 1
            })
            .map((post) => (
              <Link
                key={post.slug}
                className="block mb-6 hover:opacity-60 transition-opacity"
                href={`/blog/${post.slug}`}
              >
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight underline decoration-neutral-300 dark:decoration-neutral-600 underline-offset-2 hover:decoration-neutral-900 dark:hover:decoration-neutral-100 transition-colors">
                  {post.metadata.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                  {post.metadata.summary}
                </p>
              </Link>
            ))}
        </div>
      ) : (
        <p className="text-neutral-600 dark:text-neutral-400">
          No posts found with this tag. <Link href="/blog" className="underline">View all posts</Link>.
        </p>
      )}
    </div>
  )
}
