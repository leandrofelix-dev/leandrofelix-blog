import { LinkedinLogo, GithubLogo, InstagramLogo } from '@phosphor-icons/react'
import Link from 'next/link'
import links from '_shared/links'
export function SocialLinks() {
  return (
    <div className="flex gap-4">
      <Link href={links.linkedin}>
        <LinkedinLogo
          size={24}
          weight="fill"
          className="text-black hover:text-blue-700"
        />
      </Link>
      <Link href={links.github}>
        <GithubLogo
          size={24}
          weight="fill"
          className="text-black hover:text-slate-700"
        />
      </Link>
      <Link href={links.instagram}>
        <InstagramLogo
          size={24}
          weight="fill"
          className="text-black  hover:text-pink-700"
        />
      </Link>
    </div>
  )
}
