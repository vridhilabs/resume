import Link from 'next/link'
import { getBlogPosts } from 'app/blog/utils'

export default function CaseStudiesPage() {
  let allPosts = getBlogPosts()
  let caseStudies = allPosts.filter(post => {
    let tags = post.metadata.tags || []
    return tags.includes('case-study') || tags.includes('results')
  })

  return (
    <section>
      <h1 className="font-semibold text-3xl tracking-tighter mb-4">
        Case Studies & Tear-downs
      </h1>
      <p className="mb-2 text-lg text-neutral-700 dark:text-neutral-300">
        Real results from systematic GTM and RevOps work.
      </p>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        Anonymized case studies and spec work showing how we drive pipeline and revenue for B2B SaaS teams.
      </p>

      <div className="mb-8">
        {caseStudies.length > 0 ? (
          <div>
            {caseStudies.map((post) => (
              <Link
                key={post.slug}
                className="block mb-8 hover:opacity-60 transition-opacity"
                href={`/blog/${post.slug}`}
              >
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 underline decoration-neutral-300 dark:decoration-neutral-600 underline-offset-2 hover:decoration-neutral-900 dark:hover:decoration-neutral-100 transition-colors">
                  {post.metadata.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mt-2 mb-2">
                  {post.metadata.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.metadata.tags && post.metadata.tags.map((tag: string) => (
                    <span key={tag} className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-xs text-neutral-600 dark:text-neutral-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-3 text-sm text-neutral-500">
                  <span>Snapshot:</span>
                  <span>90 days</span>
                  <span>→ 18% reply rate</span>
                  <span>→ $280K pipeline</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-8 text-center">
            <h3 className="font-semibold text-lg mb-2">Case Studies Coming Soon</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              We're preparing detailed case studies showing our GTM and RevOps work for B2B SaaS clients.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              Check back in a few days, or <Link href="/blog" className="underline">browse our blog</Link> for frameworks and tactics.
            </p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">Spec Work</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            See how we'd approach your GTM if we were your fractional Head of Growth.
          </p>
          <Link href="/blog?tag=spec" className="text-sm underline">
            View spec case studies →
          </Link>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">GTM Tear-downs</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            Reverse-engineering how successful B2B SaaS companies grew.
          </p>
          <Link href="/blog?tag=tear-down" className="text-sm underline">
            View tear-downs →
          </Link>
        </div>
      </div>

      <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg text-center">
        <h3 className="font-semibold text-lg mb-2">Want Similar Results?</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          We design and run GTM systems that turn content and outbound into qualified pipeline in 90 days.
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
