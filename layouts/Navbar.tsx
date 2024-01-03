import Image from 'next/image'
import Container from 'components/Container'
import Link from 'next/link'
import { firaCode } from 'pages/_app'
import { LinkedinLogo, GithubLogo, InstagramLogo } from '@phosphor-icons/react'

export default function Navbar() {
  return (
    <div className="fixed z-10 w-full pt-6 font-[Fira Code]">
      <Container>
        <div className="flex justify-between w-full backdrop-blur-sm rounded-2xl p-4 bg-zinc-200/80 items-center">
          <Link href="/" passHref>
            <Image src={'/leandrofelix.dev.svg'} width={200} height={28} alt='logo'/>
          </Link>
          <div className='flex gap-3 items-center'>
          <div className='flex gap-4'>
            <LinkedinLogo size={24} weight="fill"/>
            <GithubLogo size={24} weight="fill"/>
            <InstagramLogo size={24} weight="fill"/>
          </div>

          <Link href={'/'}>
            <button className={[firaCode.className, 'font-semibold pointer border-zinc-300 border py-1 px-6 rounded-full hover:bg-zinc-50/50'].join(' ')}>
              Portfolio
            </button>
          </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
