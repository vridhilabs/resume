import Link from 'next/link'
import { BlogPosts } from 'app/components/posts'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-6 text-3xl font-semibold tracking-tighter">
        Vridhi Labs
      </h1>
      <p className="mb-8 text-lg text-neutral-700 dark:text-neutral-300 max-w-md">
        GTM engineering for B2B SaaS. Systems, playbooks, and case studies — no fluff.
      </p>

      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 dark:text-neutral-300 md:flex-row md:space-x-4 md:space-y-0">
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            href="/work-with-us"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">hire us</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            href="/case-studies"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">case studies</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            href="/newsletter"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">newsletter</p>
          </Link>
        </li>
      </ul>

      <div className="my-12">
        <BlogPosts />
      </div>
    </section>
  )
}
