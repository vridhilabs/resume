import Link from 'next/link'

export default function ProfilesPage() {
  return (
    <section>
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-semibold text-3xl tracking-tighter mb-2">
          Marketing Profiles
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
          Narratives and frameworks for different marketing operator archetypes — GTM Engineer, RevOps Manager, Product Marketing Manager, and Growth Marketing Lead.
        </p>
      </div>

      {/* Profiles Grid */}
      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
          Operator Archetypes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* GTM Engineer Profile */}
          <a href="/resume#gtm-engineer" className="block border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
            <h3 className="font-semibold text-lg mb-2">GTM Engineer</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              The builder who connects strategy to execution — designing systems that turn chaotic growth into predictable revenue through outbound automation, lifecycle design, and partner enablement.
            </p>
            <p className="text-sm text-neutral-500">Read profile →</p>
          </a>
          
          {/* RevOps Manager Profile */}
          <a href="/resume#revops-manager" className="block border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
            <h3 className="font-semibold text-lg mb-2">RevOps Manager</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              The architect of revenue predictability — building CRM logic, lead routing, attribution models, and pipeline reporting that align sales, marketing, and customer success.
            </p>
            <p className="text-sm text-neutral-500">Read profile →</p>
          </a>
          
          {/* Product Marketing Manager Profile */}
          <a href="/resume#product-marketing-manager" className="block border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
            <h3 className="font-semibold text-lg mb-2">Product Marketing Manager</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              The voice of the customer and market — defining positioning, crafting messaging, building enablement, and launching products that resonate with buyers and drive adoption.
            </p>
            <p className="text-sm text-neutral-500">Read profile →</p>
          </a>
          
          {/* Growth Marketing Lead Profile */}
          <a href="/resume#growth-marketing-lead" className="block border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
            <h3 className="font-semibold text-lg mb-2">Growth Marketing Lead</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              The experimenter and scaler — building demand gen machines, optimizing conversion funnels, and designing self-reinforcing growth loops that compound over time.
            </p>
            <p className="text-sm text-neutral-500">Read profile →</p>
          </a>
          
          {/* Outbound Systems Specialist Profile */}
          <a href="/blog/cold-email-stack" className="block border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
            <h3 className="font-semibold text-lg mb-2">Outbound Systems Specialist</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              The engineer who builds scalable prospecting — designing enrichment workflows, sequencing logic, and personalization systems that turn cold outreach into predictable pipeline.
            </p>
            <p className="text-sm text-neutral-500">Read case study →</p>
          </a>
          
          {/* Demand Gen Architect Profile */}
          <a href="/blog/growth-loops" className="block border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
            <h3 className="font-semibold text-lg mb-2">Demand Gen Architect</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              The builder who creates self-sustaining growth — designing content syndication, paid social, and referral systems that compound over time instead of relying on linear optimization.
            </p>
            <p className="text-sm text-neutral-500">Read framework →</p>
          </a>
        </div>
      </div>

      {/* How to Use These Profiles */}
      <div className="mb-12 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h2 className="font-semibold text-xl mb-3">How hiring managers use these profiles</h2>
        <div className="text-neutral-700 dark:text-neutral-300 space-y-4">
          <p>
            These aren't just job titles — they're operating models. When you're hiring for GTM, RevOps, or Marketing roles, look for these patterns:
          </p>
          <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            <p>• <strong>GTM Engineer:</strong> Ask about systems they've built, not just campaigns they've run</p>
            <p>• <strong>RevOps Manager:</strong> Probe for CRM logic they've designed, not just reports they've pulled</p>
            <p>• <strong>Product Marketing Manager:</strong> Request positioning frameworks they've created, not just launch copy they've written</p>
            <p>• <strong>Growth Marketing Lead:</strong> Request experiments they've designed, not just metrics they've moved</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg">
        <h2 className="font-semibold text-xl mb-2">See how these profiles come together in practice</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          The HyperElectric case study shows all four profiles working in concert — GTM strategy, RevOps infrastructure, PMM narrative, and growth engine.
        </p>
        <div className="flex gap-4">
          <Link href="/hyperelectric" className="text-sm underline hover:text-neutral-800 dark:hover:text-neutral-200">
            View HyperElectric case study →
          </Link>
          <Link href="/resume" className="text-sm underline hover:text-neutral-800 dark:hover:text-neutral-200">
            View full operator profile →
          </Link>
        </div>
      </div>
    </section>
  )
}