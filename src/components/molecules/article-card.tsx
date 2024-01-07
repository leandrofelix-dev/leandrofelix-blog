import { Article } from 'utils/types'
import slugify from 'slugify'
import getLocalizedDate from 'utils/get-localized-date'
import Image from 'next/image'
import { firaCode, inter } from 'pages/_app'

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  const slug = slugify(article.title).toLowerCase()

  const formattedTime = getLocalizedDate(article.publishedDate)

  return (
    <a href={`/post/${slug}`}>
      <div className="flex flex-col overflow-hidden cursor-pointer group">
        <div className="relative">
          <div className="absolute">
            {article?.categories?.map(category => (
              <div
                key={category}
                className={[firaCode.className, 'relative shadow z-[2] inline-flex items-center px-3 py-1.5 mb-2 mr-2 text-xs font-semibold text-slate-900 border border-slate-200 uppercase bg-slate-100 rounded-lg left-3 top-3'].join(' ')}
              >
                {category}
              </div>
            ))}
          </div>
          <div className=" filter contrast-[0.9]">
            <Image
              className="object-cover w-full transition rounded-lg aspect-video group-hover:opacity-90 bg-gray-50"
              src={article.coverImage}
              alt={'article cover'}
              width={300}
              height={200}
            />
          </div>
        </div>
        <div className={'flex flex-col justify-between flex-1 py-4 bg-white'}>
          <div className="flex-1">
            <p
              className={[inter.className, 'text-xl font-bold text-slate-900'].join(' ')}
            >
              {article.title}
            </p>
            <p
              className={[
                firaCode.className,
                'mt-3 text-base text-gray-500 line-clamp-2'
              ].join(' ')}
            >
              {article.summary}
            </p>
          </div>
          <div className="flex items-center mt-4">
            <div className="flex mb-2 space-x-1 text-sm text-gray-400">
              {article.categories.map(category => (
                <div key={category}>
                  <span className="font-semibold text-gray-600">{category} </span>
                  <span aria-hidden="true">&middot;</span>
                </div>
              ))}
              <time dateTime={formattedTime}>{formattedTime}</time>
            </div>
            {/* <p className="text-sm font-medium text-gray-900">{article?.author?.name}</p> */}
          </div>
        </div>
      </div>
    </a>
  )
}
