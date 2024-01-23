import links from '_shared/links'
import Link from 'next/link'
import { firaCode } from 'pages/_app'

interface WebsiteLinksProps {
  link: string
  description: string
}

export function WebsiteLinks({ link, description }: WebsiteLinksProps) {
  return (
    <div>
      <div className={[firaCode.className, 'flex flex-col'].join(' ')}>
        <Link href={link} className="font-semibold text-zinc-800 text-lg"> target={'_blank'}
          {link.replace(/^https:\/\//, '')}
        </Link>
        <span className="text-zinc-600 font-light">{description}</span>
      </div>
    </div>
  )
}
