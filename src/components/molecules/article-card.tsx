import { Article } from 'utils/types'
import slugify from 'slugify'
import getLocalizedDate from 'utils/get-localized-date'
import Image from 'next/image'
import { firaCode, sourceSans } from 'pages/_app'

type Props = {
  article: Article
}

export default function ArticleCard({ article }: Props) {
  const slug = slugify(article.title).toLowerCase()

  const formattedTime = getLocalizedDate(article.publishedDate)

  return (
    <a href={`/post/${slug}`} className='p-4 rounded-3xl bg-white border border-zinc-200'>
      <div className="flex flex-col overflow-hidden cursor-pointer group">
        <div className="relative">
          <div className="absolute">
            {article?.categories?.map(category => (
              <div
                key={category}
                className={[
                  firaCode.className,
                  'relative shadow z-[2] inline-flex items-center px-3 py-1.5 mb-2 mr-2 text-xs font-semibold text-black border border-zinc-200 uppercase bg-zinc-100 rounded-lg left-3 top-3',
                ].join(' ')}
              >
                {category}
              </div>
            ))}
          </div>
          <div className=" filter contrast-[0.9]">
            <Image
              className="object-cover w-full transition rounded-lg aspect-video group-hover:opacity-90 bg-zinc-50"
              src={article.coverImage}
              alt={'article cover'}
              width={300}
              height={200}
            />
          </div>
        </div>
        <div className={'flex flex-col justify-between flex-1 py-4'}>
          <div className="flex-1">
            <p
              className={[sourceSans.className, 'text-xl font-bold text-black'].join(' ')}
            >
              {article.title}
            </p>
            <p
              className={[
                firaCode.className,
                'mt-3 text-base text-zinc-500 line-clamp-2',
              ].join(' ')}
            >
              {article.summary}
            </p>
          </div>
          <div className="flex items-center mt-4">
            <div className="flex mb-2 space-x-1 text-sm text-zinc-400">
              {article.categories.map(category => (
                <div key={category}>
                  <span className={[firaCode.className, 'font-semibold text-zinc-600'].join(' ')}>{category} </span>
                  <span aria-hidden="true">&middot;</span>
                </div>
              ))}
              <time className='text-zinc-400' dateTime={formattedTime}>{formattedTime}</time>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
