import Link from 'next/link'
import { firaCode } from 'pages/_app'

interface ButtonProps {
  href: string
  value: string
}

export function Button({href, value}: ButtonProps) {
  return (
    <Link href={href}>
      <button
        className={[
          firaCode.className,
          'font-semibold pointer border-zinc-300 border py-1 px-6 rounded-full transition-all hover:bg-slate-50/50 hover:shadow-sm'
        ].join(' ')}
      >
        {value}
      </button>
    </Link>
  )
}
