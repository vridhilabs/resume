import Link from 'next/link'
import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      {/* Hero */}
      <div className="mb-12">
        <p className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">
          GTM Engineer • RevOps Manager • Product Marketing • Growth
        </p>
        <h1 className="font-semibold text-3xl tracking-tighter mb-4">
          Sai Rahul Talluri
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-2">
          Building GTM systems, outbound infrastructure, and revenue operations for SaaS, commerce, and EV businesses. Focused on execution-first growth with proven systems in outbound automation, lifecycle design, and partner enablement.
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          Open to full-time GTM, RevOps, PMM, and Growth Marketing roles at B2B SaaS companies
        </p>
        <div className="flex gap-4 mt-6">
          <a href="/resume" className="text-sm underline hover:text-neutral-600 dark:hover:text-neutral-200">
            View full resume →
          </a>
          <a href="/portfolio" className="text-sm underline hover:text-neutral-600 dark:hover:text-neutral-200">
            See case studies →
          </a>
        </div>
      </div>

      {/* Proof Strip */}
      <div className="mb-12 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
          Operating leverage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-neutral-900 dark:text-neutral-100 font-medium">50K</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">prospect accounts targeted monthly via Clay enrichment + outbound, contributing to pipeline growth</p>
          </div>
          <div>
            <p className="text-neutral-900 dark:text-neutral-100 font-medium">500</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">MQLs/month generated through LinkedIn + HubSpot/Marketo</p>
          </div>
          <div>
            <p className="text-neutral-900 dark:text-neutral-100 font-medium">3x</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">inbound lead growth over 6 years via content syndication + paid social</p>
          </div>
          <div>
            <p className="text-neutral-900 dark:text-neutral-100 font-medium">HyperElectric</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">rider onboarding → vendor partnerships (Zepto/Swiggy/BigBasket) → franchise pipeline → investor comms</p>
          </div>
        </div>
      </div>

      {/* Where I've Worked Strip */}
      <div className="mb-12 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
          Where I've worked
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          GTM Engineer (Independent) 2023–Present  |  MediaMint 2021–2023  |  Techtonic 2014–2020
        </p>
      </div>

      {/* About */}
      <div className="mb-12">
        <h2 className="font-semibold text-2xl tracking-tight mb-3">How I work</h2>
        <div className="text-neutral-700 dark:text-neutral-300 space-y-3">
          <p>
            I'm a GTM operator who builds the connective layer behind growth: sourcing logic, enrichment workflows, lead routing, campaign operations, and execution infrastructure. My approach is systems-first — I design repeatable processes that turn chaotic growth into measurable outcomes.
          </p>
          <p>
            My work sits in the execution layer where strategy meets operations: outbound systems that scale, lifecycle thinking that retains, RevOps foundations that align, and market intelligence that informs. I work across SaaS, commerce, EV mobility, and AI-native environments.
          </p>
          <p className="mt-4">
            What I bring to a team:
            <br className="hidden sm:inline" />
            → GTM strategy + execution (not just one)
            <br className="hidden sm:inline" />
            → Outbound infrastructure built to scale
            <br className="hidden sm:inline" />
            → RevOps foundations: CRM logic, routing, attribution
            <br className="hidden sm:inline" />
            → Product marketing: positioning, messaging, enablement
            <br className="hidden sm:inline" />
            → AI-native workflows that multiply output without adding headcount
          </p>
        </div>
      </div>

      {/* Selected Work */}
      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
          Selected work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="/hyperelectric" className="block border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
            <h3 className="font-semibold text-lg mb-2">HyperElectric — EV fleet GTM</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Built GTM systems across rider onboarding, vendor partnerships (Zepto/Swiggy/BigBasket), franchise pipeline, and investor communications for an EV leasing business.
            </p>
            <p className="text-sm text-neutral-500">View case study →</p>
          </a>
          <a href="/blog/cold-email-stack" className="block border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
            <h3 className="font-semibold text-lg mb-2">Outbound systems engine</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Designed Clay-powered outbound workflows processing 50K prospect records monthly with Apollo, LinkedIn Sales Navigator, and email sequencing.
            </p>
            <p className="text-sm text-neutral-500">View case study →</p>
          </a>
        </div>
      </div>

      {/* HyperElectric Teaser */}
      <div className="mb-12 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h2 className="font-semibold text-xl mb-2">HyperElectric — see the full breakdown</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          Explore the complete case study covering rider onboarding, vendor partnerships, franchise pipeline, investor communications, and GTM operations structure.
        </p>
        <a href="/hyperelectric" className="text-sm underline hover:text-neutral-800 dark:hover:text-neutral-200">
          View full case study →
        </a>
      </div>

      {/* Field Notes */}
      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
          Field notes
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-4">
          Essays, teardowns, systems thinking, GTM notes, and case breakdowns from actual execution.
        </p>
        <a href="/blog" className="text-sm underline hover:text-neutral-800 dark:hover:text-neutral-200">
          Browse field notes →
        </a>
      </div>
    </section>
  )
}
