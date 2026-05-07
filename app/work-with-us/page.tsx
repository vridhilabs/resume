import Link from 'next/link'

export default function WorkWithUsPage() {
  return (
    <section>
      <h1 className="font-semibold text-3xl tracking-tighter mb-4">
        Work with Vridhi Labs
      </h1>
      <p className="mb-2 text-lg text-neutral-700 dark:text-neutral-300">
        GTM engineering for B2B SaaS.
      </p>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400 max-w-md">
        We design and run growth systems that turn content and outbound into qualified pipeline in 90 days. Pick the engagement that fits your stage.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
          <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">START HERE</div>
          <h2 className="font-semibold text-xl mb-2">GTM & RevOps Audit</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            2-3 day diagnostic of your funnel, ICP, messaging, and RevOps foundations.
          </p>
          <ul className="text-sm text-neutral-700 dark:text-neutral-300 space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Funnel audit (visitor → expansion ARR)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>ICP & messaging review</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>CRM hygiene & routing check</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Metrics & dashboards review</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>10-page audit report + recommendations</span>
            </li>
          </ul>
          <div className="text-2xl font-bold mb-4">$1,500</div>
          <Link
            href="/contact?package=audit"
            className="block text-center px-5 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:opacity-80 transition-opacity"
          >
            Get Audit
          </Link>
        </div>

        <div className="border-2 border-neutral-900 dark:border-neutral-100 rounded-lg p-6 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs px-3 py-1 rounded-full font-medium">
            MOST POPULAR
          </div>
          <h2 className="font-semibold text-xl mb-2">90-Day GTM Sprint</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            Week-by-week milestones, deliverables, and sample outputs. Our flagship offer.
          </p>
          <ul className="text-sm text-neutral-700 dark:text-neutral-300 space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Week 1-2: ICP, offer, messaging</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Week 3-4: Outbound engine + content calendar</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Week 5-8: RevOps setup (CRM, dashboards)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Week 9-12: Optimization + experiments</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Weekly check-ins + CEO dashboard</span>
            </li>
          </ul>
          <div className="text-2xl font-bold mb-4">$4,500</div>
          <Link
            href="/contact?package=sprint"
            className="block text-center px-5 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:opacity-80 transition-opacity"
          >
            Start Sprint
          </Link>
        </div>

        <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
          <h2 className="font-semibold text-xl mb-2">Ongoing GTM & RevOps</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            We run your growth engine month-after-month. For teams ready to scale.
          </p>
          <ul className="text-sm text-neutral-700 dark:text-neutral-300 space-y-2 mb-6">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Everything in 90-Day Sprint</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Continuous content engine (2 posts/week)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Outbound sequences (500 leads/month)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Monthly experiments (3-5 tests)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Bi-weekly strategy calls + reports</span>
            </li>
          </ul>
          <div className="text-2xl font-bold mb-4">$3,500/mo</div>
          <Link
            href="/contact?package=ongoing"
            className="block text-center px-5 py-2.5 border border-neutral-300 dark:border-neutral-600 rounded-lg font-medium hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors"
          >
            Discuss Ongoing
          </Link>
        </div>
      </div>

      <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h3 className="font-semibold text-lg mb-2">Not sure which one?</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          Most clients start with the Audit to see where leaks are, then move to the 90-Day Sprint. 
          Ongoing engagement starts after sprint completion.
        </p>
        <Link
          href="/contact"
          className="inline-block px-5 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity"
        >
          Talk to Us First
        </Link>
      </div>
    </section>
  )
}
