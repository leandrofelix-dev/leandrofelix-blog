import { inter } from 'pages/_app'

interface labelProps {
  value: string;
}

export function Label({ value }: labelProps) {
  return (
    <span className={[inter.className, 'font-semibold text-xs text-slate-600 tracking-widest'].join(' ')}>
      {value.toUpperCase()}
    </span>
  )
}
