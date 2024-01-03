import Image from 'next/image'
import Link from 'next/link'
import Container from 'components/Container'
import { Button } from 'components/atoms/button'
import { SocialLinks } from 'components/molecules/social-links'
import links from 'data/links'


export default function Navbar() {
  return (
    <div className="fixed z-10 w-full pt-6">
      <Container>
        <div className="flex justify-between w-full backdrop-blur-sm rounded-2xl p-4 bg-slate-100/80 items-center border border-slate-200">
          <Link href={links.blog} passHref>
            <Image src={'/leandrofelix.dev.svg'} width={200} height={28} alt='logo'/>
          </Link>
          <div className='flex gap-3 items-center'>
          <SocialLinks />
          <Button href={links.portfolio} value={'Portfolio'} />
          </div>
        </div>
      </Container>
    </div>
  )
}
