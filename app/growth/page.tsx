import Link from 'next/link'
import { getBlogPosts } from 'app/blog/utils'

export default function GrowthPage() {
  let allPosts = getBlogPosts()
  let growthPosts = allPosts.filter(post => {
    let title = post.metadata.title.toLowerCase()
    return title.includes('growth') || 
           title.includes('loop') || 
           title.includes('cold email') ||
           title.includes('outbound') ||
           title.includes('acquisition')
  })

  return (
    <section>
      <h1 className="font-semibold text-3xl tracking-tighter mb-4">
        Growth Systems
      </h1>
      <p className="mb-2 text-lg text-neutral-700 dark:text-neutral-300">
        Growth loops, cold outbound, PLG experiments, and acquisition channels.
      </p>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        Systems and playbooks for B2B SaaS teams who want more revenue per experiment.
      </p>

      <div className="mb-8">
        <h2 className="font-semibold text-xl mb-4">Featured Posts</h2>
        {growthPosts.length > 0 ? (
          <div>
            {growthPosts.map((post) => (
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
          <h3 className="font-semibold text-lg mb-2">Growth Loops</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            Build compounding growth systems instead of linear funnels.
          </p>
          <Link href="/blog/growth-loops" className="text-sm underline">
            Read the guide →
          </Link>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">Cold Outbound</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            From 3% to 20%+ reply rates with the right stack and messaging.
          </p>
          <Link href="/blog/cold-email-stack" className="text-sm underline">
            See the stack →
          </Link>
        </div>
      </div>

      <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h3 className="font-semibold text-lg mb-2">Hire Us for Growth</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          We design and run growth systems that turn content and outbound into qualified pipeline in 90 days.
        </p>
        <Link 
          href="/work-with-us"
          className="inline-block px-5 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:opacity-80 transition-opacity"
        >
          Work with Vridhi Labs
        </Link>
      </div>
    </section>
  )
}
