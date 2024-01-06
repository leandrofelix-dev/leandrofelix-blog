import { firaCode, inter } from 'pages/_app'

export default function HeroHeader() {
  return (
    <div className="bg-hero p-40 bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center px-20 rounded-3xl mx-12">
      <div className='w-2/3 flex flex-col gap-4'>
        <h1
          className={[
            firaCode.className,
            'text-slate-200 font-semibold text-5xl leading-snug'
          ].join(' ')}
        >
          Tudo sobre tecnologia,{' '}
          <span className="bg-slate-50 text-slate-900 ">de dev para dev</span>.
        </h1>
        <span className={[inter.className, 'text-slate-300 text-lg font-thin uppercase'].join(' ')}>
          Um espaço voltado ao <b>aprendizado</b> contínuo e <b>compartilhamento de conhecimento</b>.
        </span>
      </div>
    </div>
  )
}
