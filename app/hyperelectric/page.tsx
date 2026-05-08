import Link from 'next/link'

export default function HyperElectricPage() {
  return (
    <section>
      {/* Hero */}
      <div className="mb-12">
        <p className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">Case Study</p>
        <h1 className="font-semibold text-3xl tracking-tighter mb-4">
          HyperElectric: building GTM systems for EV fleet growth
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300">
          Worked across rider onboarding, vendor partnerships, franchise pipeline, investor communications, and GTM operations for an EV mobility business. The work sat between growth execution, operational clarity, and business narrative.
        </p>
      </div>

      {/* Overview */}
      <div className="mb-12 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h2 className="font-semibold text-xl mb-3">More than a marketing project.</h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          HyperElectric was not a single-channel growth assignment. It required GTM support across rider acquisition, partner-facing communication, franchise expansion, and investor narrative. The real work was in building structure around motion — making enquiries easier to route, materials easier to use, partnerships easier to explain, and business traction easier to communicate.
        </p>
      </div>

      {/* Scope */}
      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
          Areas of work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-5">
            <p className="text-neutral-900 dark:text-neutral-100 font-medium">01</p>
            <p className="text-lg">Rider onboarding and activation flow</p>
          </div>
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-5">
            <p className="text-neutral-900 dark:text-neutral-100 font-medium">02</p>
            <p className="text-lg">Vendor and platform partnerships</p>
          </div>
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-5">
            <p className="text-neutral-900 dark:text-neutral-100 font-medium">03</p>
            <p className="text-lg">Franchise enquiry pipeline and documentation</p>
          </div>
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-5">
            <p className="text-neutral-900 dark:text-neutral-100 font-medium">04</p>
            <p className="text-lg">Investor-facing communication and business narrative</p>
          </div>
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-5">
            <p className="text-neutral-900 dark:text-neutral-100 font-medium">05</p>
            <p className="text-lg">GTM operations and execution structure</p>
          </div>
        </div>
      </div>

      {/* Sub-section 1: Rider Onboarding */}
      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
          01 — Rider onboarding
        </h2>
        <h3 className="font-semibold text-2xl mb-4">Rider growth: from enquiry to activation</h3>
        <div className="text-neutral-700 dark:text-neutral-300 space-y-4">
          <p>
            One part of the HyperElectric work focused on making rider acquisition more operationally usable. Instead of treating leads as raw volume, the emphasis was on how enquiries moved through stages, where handoff friction appeared, and what needed to be clearer for activation to happen.
          </p>
          <p>
            This meant thinking beyond lead generation into onboarding flow design, qualification clarity, and process continuity between growth activity and the people responsible for activation on the ground.
          </p>
        </div>
        <div className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <p>• Enquiry-to-activation flow thinking</p>
          <p>• Funnel-stage clarity</p>
          <p>• Handoff structure between growth and operations</p>
          <p>• Qualification logic for rider readiness</p>
          <p>• Process simplification around onboarding</p>
        </div>
      </div>

      {/* Sub-section 2: Vendor Partnerships */}
      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
          02 — Vendor partnerships
        </h2>
        <h3 className="font-semibold text-2xl mb-4">Making the business legible to partners</h3>
        <div className="text-neutral-700 dark:text-neutral-300 space-y-4">
          <p>
            Another layer of the work focused on vendor and platform partnerships, especially in conversations relevant to delivery and quick-commerce ecosystems. This included partner-facing GTM support for opportunities involving platforms such as Zepto, Swiggy, and BigBasket.
          </p>
          <p>
            The role here was not just outreach. It was about translating the business into a format partners could understand quickly — clearer materials, tighter positioning, and more structured support around partnership conversations.
          </p>
        </div>
        <div className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <p>• Vendor pitch support</p>
          <p>• Partner-facing positioning</p>
          <p>• Outreach and communication structure</p>
          <p>• Qualification thinking around partnership relevance</p>
          <p>• Materials for quick-commerce ecosystem conversations</p>
        </div>
      </div>

      {/* Sub-section 3: Franchise Pipeline */}
      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
          03 — Franchise pipeline
        </h2>
        <h3 className="font-semibold text-2xl mb-4">Turning interest into a usable flow</h3>
        <div className="text-neutral-700 dark:text-neutral-300 space-y-4">
          <p>
            Franchise growth required more than collecting inbound interest. The work involved creating more structure around how franchise enquiries were captured, understood, documented, and moved through follow-up.
          </p>
          <p>
            That meant building toward a repeatable enquiry system — something closer to a pipeline than a form inbox. Documentation, routing, and response structure all mattered because they shaped whether demand could actually become a workable expansion process.
          </p>
        </div>
        <div className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <p>• Franchise enquiry system design</p>
          <p>• Documentation and information structure</p>
          <p>• Lead routing logic</p>
          <p>• Follow-up workflow thinking</p>
          <p>• Process support for expansion conversations</p>
        </div>
      </div>

      {/* Sub-section 4: Investor Communications */}
      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
          04 — Investor communications
        </h2>
        <h3 className="font-semibold text-2xl mb-4">Shaping the growth story</h3>
        <div className="text-neutral-700 dark:text-neutral-300 space-y-4">
          <p>
            Part of the HyperElectric engagement involved investor-facing communication — helping translate business activity into a clearer external narrative. This sat at the intersection of traction framing, market context, and GTM storytelling.
          </p>
          <p>
            The value here was not cosmetic. It was about helping the company explain itself with greater coherence: what the business was building, where momentum was coming from, and how operating progress could be presented with more clarity.
          </p>
        </div>
        <div className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <p>• Investor-facing materials</p>
          <p>• Business narrative support</p>
          <p>• Traction framing</p>
          <p>• Market and growth story communication</p>
          <p>• Website and external communication support</p>
        </div>
      </div>

      {/* Sub-section 5: GTM Ops */}
      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
          05 — The operating layer
        </h2>
        <h3 className="font-semibold text-2xl mb-4">The connective structure behind the work</h3>
        <div className="text-neutral-700 dark:text-neutral-300 space-y-4">
          <p>
            The most valuable part of the HyperElectric engagement was not any single deliverable. It was the connective layer across all of them. Rider growth, partner communication, franchise pipeline, and investor materials all became stronger when they were treated as parts of one GTM system instead of isolated tasks.
          </p>
          <p>
            That is the kind of work I'm most useful for — situations where a business has motion, but needs better structure across execution, communication, and follow-through.
          </p>
        </div>
        <div className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <p>• GTM structure across multiple motions</p>
          <p>• Clearer handoffs between functions</p>
          <p>• Better operating visibility</p>
          <p>• Process design around execution</p>
          <p>• Narrative support tied to business action</p>
        </div>
      </div>

      {/* What This Signals */}
      <div className="mb-12 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h2 className="font-semibold text-xl mb-4">What this case demonstrates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-start gap-2">
            <span>•</span>
            <span className="text-neutral-700 dark:text-neutral-300">GTM systems thinking across multiple business surfaces</span>
          </div>
          <div className="flex items-start gap-2">
            <span>•</span>
            <span className="text-neutral-700 dark:text-neutral-300">Cross-functional execution (ops, sales, partners, investors)</span>
          </div>
          <div className="flex items-start gap-2">
            <span>•</span>
            <span className="text-neutral-700 dark:text-neutral-300">Operational clarity and process design</span>
          </div>
          <div className="flex items-start gap-2">
            <span>•</span>
            <span className="text-neutral-700 dark:text-neutral-300">Market-facing communication and narrative</span>
          </div>
          <div className="flex items-start gap-2">
            <span>•</span>
            <span className="text-neutral-700 dark:text-neutral-300">Growth support beyond campaign work</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg">
        <h2 className="font-semibold text-xl mb-2">Looking for someone who can build the structure behind growth?</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          I work best in roles and projects that need more than surface-level marketing support — GTM systems, growth operations, lifecycle execution, partner enablement, and operator-led problem solving.
        </p>
        <div className="flex gap-4">
          <Link href="/resume" className="text-sm underline hover:text-neutral-800 dark:hover:text-neutral-200">
            View resume →
          </Link>
          <Link href="/portfolio" className="text-sm underline hover:text-neutral-800 dark:hover:text-neutral-200">
            See more work →
          </Link>
        </div>
      </div>
    </section>
  )
}
