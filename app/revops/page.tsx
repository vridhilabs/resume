import Link from 'next/link'
import { getBlogPosts } from 'app/blog/utils'

export default function RevOpsPage() {
  let allPosts = getBlogPosts()
  let revopsPosts = allPosts.filter(post => {
    let title = post.metadata.title.toLowerCase()
    let tags = post.metadata.tags || []
    return title.includes('revops') || 
           title.includes('metrics') || 
           title.includes('funnel') ||
           title.includes('dashboard') ||
           tags.includes('revops') ||
           tags.includes('metrics')
  })

  return (
    <section>
      <h1 className="font-semibold text-3xl tracking-tighter mb-4">
        Revenue Operations
      </h1>
      <p className="mb-2 text-lg text-neutral-700 dark:text-neutral-300">
        Funnel design, metrics, dashboards, and routing — so nothing leaks.
      </p>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        Systems and benchmarks for B2B SaaS teams who want revenue clarity and operational excellence.
      </p>

      <div className="mb-8">
        <h2 className="font-semibold text-xl mb-4">Featured Posts</h2>
        {revopsPosts.length > 0 ? (
          <div>
            {revopsPosts.map((post) => (
              <Link
                key={post.slug}
                className="block mb-6 hover:opacity-60 transition-opacity"
                href={`/blog/${post.slug}`}
              >
                <p className="text-neutral-900 dark:text-neutral-100 underline decoration-neutral-300 dark:decoration-neutral-600 underline-offset-2 hover:decoration-neutral-900 dark:hover:decoration-neutral-100 transition-colors">
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
            New posts coming soon. Check back in a few days.
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">Pipeline Design</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            From visitor to expansion ARR — design funnels that don't leak.
          </p>
          <Link href="/blog?tag=revops" className="text-sm underline">
            Read the guide →
          </Link>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">Benchmarks</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            What "good" looks like: 2025 B2B SaaS metrics and ranges.
          </p>
          <Link href="/blog?tag=metrics" className="text-sm underline">
            See benchmarks →
          </Link>
        </div>
      </div>

      <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h3 className="font-semibold text-lg mb-2">Hire Us for RevOps</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          We design and implement RevOps foundations: funnel mapping, lead scoring, dashboards, and routing.
        </p>
        <Link 
          href="/work-with-us"
          className="inline-block px-5 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity"
        >
          Work with Vridhi Labs
        </Link>
      </div>
    </section>
  )
}
