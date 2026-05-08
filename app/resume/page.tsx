import Link from 'next/link'

export default function ResumePage() {
  return (
    <section>
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-semibold text-3xl tracking-tighter mb-2">Sai Rahul Talluri</h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
          GTM Engineer • RevOps Manager • Product Marketing Manager • Growth Marketing Lead
        </p>
        <div className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
          <p>Email: <a href="mailto:sairahul.talluri@gmail.com" className="underline">sairahul.talluri@gmail.com</a></p>
          <p>Primary LinkedIn: <a href="https://linkedin.com/in/rahultalluri" target="_blank" rel="noopener" className="underline">linkedin.com/in/rahultalluri</a></p>
          <p>GTM Profile: <a href="https://linkedin.com/in/sairahulxgtm" target="_blank" rel="noopener" className="underline">linkedin.com/in/sairahulxgtm</a></p>
          <p>Location: Hyderabad, Telangana, India</p>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">Summary</h2>
        <div className="text-neutral-700 dark:text-neutral-300 space-y-3">
          <p>
            GTM engineer and growth operator with experience across outbound automation, growth marketing, demand generation, lifecycle thinking, funnel operations, and revenue systems. Built Clay-powered outbound workflows processing 50K prospect records per month, supported LinkedIn and nurture programs generating 500 MQLs monthly, and contributed to 3x inbound lead growth through content syndication and paid social.
          </p>
          <p>
            Currently focused on AI-enabled GTM systems, outbound infrastructure, research workflows, lifecycle execution, and revenue operations across SaaS, commerce, and emerging operating environments.
          </p>
        </div>
      </div>

      {/* Selected Proof */}
      <div className="mb-12 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">Selected proof</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium">50K prospect records</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">processed monthly through Clay-powered outbound workflow</p>
          </div>
          <div>
            <p className="font-medium">500 MQLs per month</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">generated through LinkedIn and nurture systems</p>
          </div>
          <div>
            <p className="font-medium">3x inbound lead growth</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">through content syndication and paid social</p>
          </div>
          <div>
            <p className="font-medium">HyperElectric work</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Rider onboarding, vendor partnerships, franchise pipeline</p>
          </div>
        </div>
      </div>

      {/* Core Strengths */}
      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">Core strengths</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium mb-2">GTM strategy & execution</h3>
            <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
              <li>GTM systems</li>
              <li>Product growth</li>
              <li>Growth marketing</li>
              <li>Demand generation</li>
              <li>Funnel operations</li>
              <li>Lifecycle design</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Outbound & pipeline</h3>
            <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
              <li>Outbound automation</li>
              <li>Prospect enrichment</li>
              <li>Lead routing</li>
              <li>Nurture logic</li>
              <li>Campaign automation</li>
              <li>Conversion measurement</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Tools & workflows</h3>
            <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
              <li>Clay</li>
              <li>Apollo</li>
              <li>HubSpot</li>
              <li>Marketo</li>
              <li>LinkedIn Ads</li>
              <li>AI-native GTM workflows</li>
              <li>CRM logic</li>
              <li>Enrichment pipelines</li>
              <li>Reporting systems</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">Experience</h2>
        
        <div className="mb-8">
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="font-semibold">GTM Engineer — Independent / Freelance</h3>
            <span className="text-sm text-neutral-500">2023 – Present</span>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 mb-3">Hyderabad, Telangana</p>
          <p className="text-neutral-700 dark:text-neutral-300 mb-3">
            Building GTM systems, outbound workflows, research infrastructure, and execution playbooks for clients. The work spans prospecting systems, enrichment, targeting, segmentation, campaign operations, and AI-enabled workflow design.
          </p>
          <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
            <li>• Engineered a Clay-powered outbound system processing 50K prospect records monthly across Apollo, LinkedIn Sales Navigator, and email workflows.</li>
            <li>• Built prospecting and enrichment systems to improve segmentation, targeting, and personalization.</li>
            <li>• Developed GTM operating workflows connecting research, outreach, enrichment, and campaign execution.</li>
            <li>• Built AI-enabled GTM systems, outbound automation, and execution playbooks for client environments.</li>
            <li>• Supported HyperElectric across rider onboarding, vendor partnerships, franchise pipeline, and investor communications.</li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="font-semibold">Marketing Associate — MediaMint</h3>
            <span className="text-sm text-neutral-500">2021 – 2023</span>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 mb-3">
            Worked across campaign execution, demand generation, nurture systems, reporting, and the handoff between marketing activity and sales follow-up.
          </p>
          <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
            <li>• Managed LinkedIn campaigns that generated 500 MQLs per month through Marketo and HubSpot nurture systems.</li>
            <li>• Built lead routing logic connecting ad performance to sales handoff and improving follow-up velocity.</li>
            <li>• Supported campaign planning, audience management, reporting, and conversion-focused optimization.</li>
          </ul>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="font-semibold">Digital Marketing Manager — Techtonic</h3>
            <span className="text-sm text-neutral-500">2014 – 2020</span>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 mb-3">
            Built the earlier growth foundation through digital marketing execution, acquisition support, and measurement discipline across inbound channels.
          </p>
          <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
            <li>• Helped grow inbound leads 3x through content syndication and paid social.</li>
            <li>• Supported digital marketing execution across acquisition programs and channel performance tracking.</li>
            <li>• Established baseline conversion measurement and reporting habits that later fed into GTM and RevOps work.</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">MBA, Business Intelligence & Marketing</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Liverpool University • 2021 – 2023</p>
          </div>
          <div>
            <h3 className="font-medium">MCA, Information Technology</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Alagappa University • 2015 – 2017</p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">Certifications</h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm">Google Project Management (2021)</span>
          <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm">Google UX Design (2021)</span>
          <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm">Google Digital Marketing (2021)</span>
        </div>
      </div>

      {/* Target Roles */}
      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">Target roles</h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 border border-neutral-200 dark:border-neutral-700 rounded-full text-sm">GTM Engineer</span>
          <span className="px-3 py-1 border border-neutral-200 dark:border-neutral-700 rounded-full text-sm">Growth Operations Manager</span>
          <span className="px-3 py-1 border border-neutral-200 dark:border-neutral-700 rounded-full text-sm">Revenue Operations / GTM Ops</span>
          <span className="px-3 py-1 border border-neutral-200 dark:border-neutral-700 rounded-full text-sm">Growth Marketing Manager</span>
          <span className="px-3 py-1 border border-neutral-200 dark:border-neutral-700 rounded-full text-sm">Product Marketing Manager</span>
          <span className="px-3 py-1 border border-neutral-200 dark:border-neutral-700 rounded-full text-sm">Founding Growth / GTM Hire</span>
        </div>
      </div>

      {/* CTA */}
      <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg">
        <h2 className="font-semibold text-xl mb-2">Open to GTM, RevOps, and growth roles.</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          For roles across SaaS, commerce, AI-native teams, and high-context execution environments.
        </p>
        <div className="flex gap-4">
          <Link href="/" className="text-sm underline hover:text-neutral-800 dark:hover:text-neutral-200">Back to home →</Link>
          <Link href="/portfolio" className="text-sm underline hover:text-neutral-800 dark:hover:text-neutral-200">View portfolio →</Link>
        </div>
      </div>
    </section>
  )
}
