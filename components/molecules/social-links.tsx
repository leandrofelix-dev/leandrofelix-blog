import { LinkedinLogo, GithubLogo, InstagramLogo } from '@phosphor-icons/react'
import Link from 'next/link'
import links from 'data/links'
export function SocialLinks() {
  return (
    <div className="flex gap-4">
      <Link href={links.linkedin}>
        <LinkedinLogo size={24} weight="fill" />
      </Link>
      <Link href={links.github}>
      <GithubLogo size={24} weight="fill" />
        </Link>
      <Link href={links.instagram}>
        <InstagramLogo size={24} weight="fill" />
      </Link>
    </div>
  )
}
