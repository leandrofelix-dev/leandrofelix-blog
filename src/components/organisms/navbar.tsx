import Image from 'next/image'
import Link from 'next/link'
import links from '_shared/links'
import { Button } from '../atoms/button'
import Container from '../molecules/container'
import { SocialLinks } from '../molecules/social-links'

export default function Navbar() {
  return (
    <div className="fixed z-10 w-full pt-6">
      <Container>
        <div className="mx-6 md:mx-20 flex flex-col justify-between lg:max-w-5xl backdrop-blur-sm rounded-2xl p-4 bg-slate-50 items-center border border-slate-200 gap-4 sm:flex-row md:gap-0">
          <Link href={links.blog} passHref>
            <Image src={'/leandrofelix.dev.svg'} width={200} height={28} alt="logo" />
          </Link>
          <div className="flex gap-3 items-center">
            <SocialLinks />
            <Button href={links.portfolio} value={'Portfolio'} />
          </div>
        </div>
      </Container>
    </div>
  )
}