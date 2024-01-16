import { sourceSans } from 'pages/_app'

interface labelProps {
  value: string
}

export function Label({ value }: labelProps) {
  return (
    <span
      className={[
        sourceSans.className,
        'font-semibold text-xs text-zinc-600 tracking-widest',
      ].join(' ')}
    >
      {value.toUpperCase()}
    </span>
  )
}
