import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mb-12">
      <p className="text-neutral-600 dark:text-neutral-300 text-sm">
        © {new Date().getFullYear()} Sai Rahul Talluri — GTM Engineer • RevOps Manager • Product Marketing • Growth
      </p>
    </footer>
  )
}
