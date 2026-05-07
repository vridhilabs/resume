import Link from 'next/link'
import { getBlogPosts } from 'app/blog/utils'

export default function GTMPage() {
  let allPosts = getBlogPosts()
  let gtmPosts = allPosts.filter(post => {
    let title = post.metadata.title.toLowerCase()
    return title.includes('gtm') || 
           title.includes('product') || 
           title.includes('launch') ||
           title.includes('messaging') ||
           title.includes('first 100') ||
           title.includes('positioning') ||
           title.includes('pricing')
  })

  return (
    <section>
      <h1 className="font-semibold text-3xl tracking-tighter mb-4">
        Go-to-Market & Product
      </h1>
      <p className="mb-2 text-lg text-neutral-700 dark:text-neutral-300">
        ICP, positioning, launch playbooks, pricing and packaging.
      </p>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        Frameworks and playbooks for B2B SaaS teams who want systematic GTM execution.
      </p>

      <div className="mb-8">
        <h2 className="font-semibold text-xl mb-4">Featured Posts</h2>
        {gtmPosts.length > 0 ? (
          <div>
            {gtmPosts.map((post) => (
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
          <h3 className="font-semibold text-lg mb-2">90-Day GTM Sprint</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            Our flagship offer: week-by-week milestones, deliverables, and sample outputs.
          </p>
          <Link href="/blog/first-100-customers" className="text-sm underline">
            See the framework →
          </Link>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">Launch Playbooks</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            What to do 90, 30, 7 and 1 day before launch.
          </p>
          <Link href="/blog/launch-messaging" className="text-sm underline">
            Read the guide →
          </Link>
        </div>
      </div>

      <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h3 className="font-semibold text-lg mb-2">Work with Vridhi Labs</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          We design and run GTM systems that turn content and outbound into qualified pipeline in 90 days.
        </p>
        <Link 
          href="/work-with-us"
          className="inline-block px-5 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:opacity-80 transition-opacity"
        >
          Hire Us for GTM & Product
        </Link>
      </div>
    </section>
  )
}
