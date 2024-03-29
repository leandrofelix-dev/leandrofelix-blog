import Link from 'next/link'
import { firaCode } from 'pages/_app'

interface ButtonProps {
  href: string
  value: string
  className?: string
}

export function Button({ href, value, className }: ButtonProps) {
  return (
    <Link href={href} target={'_blank'}>
      <button
        className={[
          firaCode.className,
          `font-semibold pointer border-zinc-300 border py-1 px-6 rounded-full transition-all hover:bg-zinc-50/50 hover:shadow-sm ${className}`,
        ].join(' ')}
      >
        {value}
      </button>
    </Link>
  )
}
