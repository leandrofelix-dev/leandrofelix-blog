import { LinkedinLogo, GithubLogo, InstagramLogo } from '@phosphor-icons/react'
import Link from 'next/link'
import links from '_shared/links'
export function SocialLinks() {
  return (
    <div className="flex gap-4">
      <Link href={links.linkedin} target={'_blank'}>
        <LinkedinLogo
          size={24}
          weight="fill"
          className="text-zinc-900 hover:text-blue-700"
        />
      </Link>
      <Link href={links.github} target={'_blank'}>
        <GithubLogo
          size={24}
          weight="fill"
          className="text-zinc-900 hover:text-zinc-700"
        />
      </Link>
      <Link href={links.instagram} target={'_blank'}>
        <InstagramLogo
          size={24}
          weight="fill"
          className="text-zinc-900  hover:text-pink-700"
        />
      </Link>
    </div>
  )
}
