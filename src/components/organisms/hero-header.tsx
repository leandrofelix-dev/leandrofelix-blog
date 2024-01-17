import { firaCode, sourceSans } from 'pages/_app'
import Container from '../molecules/container'

export default function HeroHeader() {
  return (
    <Container>
      <div className="mt-16 bg-hero p-40 bg-cover bg-no-repeat bg-center items-center justify-center px-20 rounded-3xl w-98 flex flex-col gap-4 bg-black lg:items-center">
        <h1
          className={[
            firaCode.className,
            'text-zinc-200 font-semibold text-4xl md:text-5xl md:leading-snug',
          ].join(' ')}
        >
          Tudo sobre tecnologia, de{' '}
          <span className="bg-zinc-50 text-black "> dev para dev</span>.
        </h1>
        <span
          className={[sourceSans.className, 'text-zinc-300/80 text-medium uppercase tracking-wide'].join(
            ' ',
          )}
        >
          {'< Um espaço voltado ao '}
          <b className='text-zinc-300'>{'aprendizado '}</b>
          {'contínuo e '}
          <b className='text-zinc-300'>{'compartilhamento de conhecimento '}</b>
          {'/>'}.
        </span>
      </div>
    </Container>
  )
}
