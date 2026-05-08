import Link from 'next/link'

export default function PortfolioPage() {
  return (
    <section>
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-semibold text-3xl tracking-tighter mb-2">
          Selected work
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
          Proof of work across GTM strategy, RevOps infrastructure, outbound systems, product marketing, and demand generation. Each case study shows the business problem, what I built or owned, and what changed as a result.
        </p>
<div className="flex flex-wrap gap-2 mb-6">
  <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-xs font-medium rounded-full">GTM</span>
  <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-xs font-medium rounded-full">RevOps</span>
  <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-xs font-medium rounded-full">Outbound</span>
  <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-xs font-medium rounded-full">PMM</span>
  <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-xs font-medium rounded-full">Demand Gen</span>
</div>
      </div>

{/* Featured Projects */}
      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
          Featured case studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="/hyperelectric" className="block border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
            <h3 className="font-semibold text-lg mb-2">HyperElectric — EV fleet GTM</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Owned GTM from zero: defined ICP and messaging for 3 buyer types (riders, vendors, franchisees), designed onboarding flows, enabled vendor partnerships, built franchise pipeline, and managed investor communications. Full GTM motion operational across all segments.
            </p>
<div className="flex flex-wrap gap-2 mb-4">
  <span className="px-2 py-0.5 bg-neutral-200 dark:bg-neutral-700 text-xs font-medium rounded">GTM</span>
  <span className="px-2 py-0.5 bg-neutral-200 dark:bg-neutral-700 text-xs font-medium rounded">RevOps</span>
  <span className="px-2 py-0.5 bg-neutral-200 dark:bg-neutral-700 text-xs font-medium rounded">PMM</span>
</div>
            <p className="text-sm text-neutral-500">View full case study →</p>
          </a>
          <a href="/blog/cold-email-stack" className="block border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
            <h3 className="font-semibold text-lg mb-2">Outbound systems engine</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Built Clay-powered outbound processing 50K accounts/month with enrichment logic that improved targeting precision and reply rates. Scalable with minimal manual overhead.
            </p>
<div className="flex flex-wrap gap-2 mb-4">
  <span className="px-2 py-0.5 bg-neutral-200 dark:bg-neutral-700 text-xs font-medium rounded">GTM</span>
  <span className="px-2 py-0.5 bg-neutral-200 dark:bg-neutral-700 text-xs font-medium rounded">Outbound</span>
  <span className="px-2 py-0.5 bg-neutral-200 dark:bg-neutral-700 text-xs font-medium rounded">RevOps</span>
</div>
            <p className="text-sm text-neutral-500">View case study →</p>
          </a>
          <a href="/blog/first-100-customers" className="block border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
            <h3 className="font-semibold text-lg mb-2">First 100 customers playbook</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Designed and executed a zero-budget GTM strategy combining personalized outreach, community building, and partnership channels to acquire first customers without paid acquisition.
            </p>
<div className="flex flex-wrap gap-2 mb-4">
  <span className="px-2 py-0.5 bg-neutral-200 dark:bg-neutral-700 text-xs font-medium rounded">GTM</span>
  <span className="px-2 py-0.5 bg-neutral-200 dark:bg-neutral-700 text-xs font-medium rounded">Demand Gen</span>
</div>
            <p className="text-sm text-neutral-500">View playbook →</p>
          </a>
          <a href="/blog/growth-loops" className="block border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
            <h3 className="font-semibold text-lg mb-2">Compounding growth systems</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Built self-reinforcing growth loops that compound over time instead of relying on linear funnel optimization, focusing on retention, referral, and expansion revenue.
            </p>
<div className="flex flex-wrap gap-2 mb-4">
  <span className="px-2 py-0.5 bg-neutral-200 dark:bg-neutral-700 text-xs font-medium rounded">Demand Gen</span>
  <span className="px-2 py-0.5 bg-neutral-200 dark:bg-neutral-700 text-xs font-medium rounded">Growth</span>
</div>
            <p className="text-sm text-neutral-500">View framework →</p>
          </a>
          <a href="/blog/hyperelectric-pmm" className="block border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
            <h3 className="font-semibold text-lg mb-2">PMM: HyperElectric Go-to-Market Narrative</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              How I built the Go-to-Market narrative for HyperElectric — a PMM breakdown covering ICP definition, messaging frameworks, competitive positioning, and enablement assets for three distinct buyer types.
            </p>
<div className="flex flex-wrap gap-2 mb-4">
  <span className="px-2 py-0.5 bg-neutral-200 dark:bg-neutral-700 text-xs font-medium rounded">PMM</span>
  <span className="px-2 py-0.5 bg-neutral-200 dark:bg-neutral-700 text-xs font-medium rounded">GTM</span>
  <span className="px-2 py-0.5 bg-neutral-200 dark:bg-neutral-700 text-xs font-medium rounded">Product Marketing</span>
</div>
            <p className="text-sm text-neutral-500">Read case study →</p>
           </a>
         </div>
       </div>

      {/* Experience Timeline */}
      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
          Operator timeline
        </h2>
        <div className="space-y-8">
          <div className="border-l-2 border-neutral-300 dark:border-neutral-600 pl-4">
            <div className="mb-6">
              <h3 className="font-semibold text-xl mb-2">GTM Engineer — Independent</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">2023 – Present • Hyderabad</p>
              <p className="text-neutral-700 dark:text-neutral-300">
                Building GTM systems, outbound workflows, research infrastructure, and execution playbooks for clients. Currently supporting HyperElectric across rider onboarding, vendor partnerships, franchise pipeline, and investor communications.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold text-xl mb-2">Marketing Associate — MediaMint</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">2021 – 2023 • Hyderabad</p>
              <p className="text-neutral-700 dark:text-neutral-300">
                Managed LinkedIn campaigns generating 500 MQLs monthly through Marketo/HubSpot nurture systems. Built lead routing logic connecting ad performance to sales handoff to improve follow-up velocity.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold text-xl mb-2">Digital Marketing Manager — Techtonic</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">2014 – 2020 • Hyderabad</p>
              <p className="text-neutral-700 dark:text-neutral-300">
                Grew inbound leads 3x through content syndication and paid social while establishing baseline conversion measurement and analytics frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg">
        <h2 className="font-semibold text-xl mb-2">See the full picture</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          Explore my complete operator profile, detailed case studies, and field notes from actual execution work.
        </p>
        <div className="flex gap-4 mt-4">
          <Link href="/resume" className="text-sm underline hover:text-neutral-800 dark:hover:text-neutral-200">
            View resume →
          </Link>
          <Link href="/blog" className="text-sm underline hover:text-neutral-800 dark:hover:text-neutral-200">
            Browse field notes →
          </Link>
        </div>
      </div>
    </section>
  )
}
