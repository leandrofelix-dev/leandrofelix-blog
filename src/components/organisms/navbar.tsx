import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'src/components/atoms/button'
import { SocialLinks } from 'src/components/molecules/social-links'
import links from 'data/links'
import Container from 'src/components/molecules/container'

export default function Navbar() {
  return (
    <div className="fixed z-10 w-full pt-6">
      <Container>
        <div className="flex flex-col-reverse justify-between w-full backdrop-blur-sm rounded-2xl p-4 bg-slate-50 items-center border border-slate-200 gap-4 sm:flex-row sm:gap-0">
          <Link href={links.blog} passHref >
            <Image src={'/leandrofelix.dev.svg'} width={200} height={28} alt="logo" className='w-80 sm:w-52'/>
          </Link>
          <div className="flex gap-3 items-center w-full sm:w-auto justify-between flex-row sm:flex-row">
            <SocialLinks />
            <Button href={links.portfolio} value={'Portfolio'} className={'h-12 w-40 sm:h-auto sm:w-auto'}/>
          </div>
        </div>
      </Container>
    </div>
  )
}
