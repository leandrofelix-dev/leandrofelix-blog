import { Fragment } from 'react'
import Link from 'next/link'
import { getAllArticles, getArticlePage, getArticlePageData } from 'utils/notion'
import { Layout } from 'src/components/templates/layout'
import { RenderBlocks } from 'src/components/_notion/render-blocks'
import getLocalizedDate from 'utils/get-localized-date'
import slugify from 'slugify'
import ArticleList from 'src/components/organisms/article-list'
import Container from 'src/components/molecules/container'
import { firaCode, sourceSans } from 'pages/_app'

const ArticlePage = ({
  content,
  title,
  coverImage,
  publishedDate,
  summary,
  moreArticles,
}) => {
  const publishedOn = getLocalizedDate(publishedDate)

  const slug = slugify(title).toLowerCase()

  const ogImage = `https://www.phung.io/api/og-image?title=${encodeURIComponent(
    title,
  )}&date=${encodeURIComponent(publishedOn)}`

  return (
    <>
      <Layout
        title={title}
        description={summary}
        imageUrl={ogImage}
        date={new Date(publishedDate).toISOString()}
        ogUrl={`/blog/${slug}`}
      >
        <div>
          <div className={'pt-40 px-6 py-16 pb-48 mx-auto -mb-48 text-center md:pb-96 md:-mb-96 bg-cover'} >
            <div className="max-w-3xl mx-auto">
              
              <div className={[sourceSans.className,'font-bold text-zinc-700 text-6xl sm:text-4xl tracking-wide'].join(' ')}>
                {title}
              </div>
              <div className="mt-4 flex items-center justify-center mb-2 space-x-2 text-sm text-gray-400">
                <div className={firaCode.className}>{`Postado em ${publishedOn}`}</div>
              </div>
              {/* <div className={[sourceSans.className, 'max-w-3xl mx-auto mt-3 text-xl leading-8 text-gray-500 sm:mt-4'].join(' ')}>
                {summary}
              </div> */}
            </div>
          </div>

          <div className="max-w-5xl px-6 mx-auto my-16 md:px-8">
          </div>
          <div className="max-w-4xl px-6 mx-auto mb-24 space-y-8 md:px-8">
            {content.map(block => (
              <Fragment key={block.id}>{RenderBlocks(block)}</Fragment>
            ))}
          </div>
          <div className="py-12 border-t">
            <Container>
              <div className="flex items-center justify-between my-8">
                <div className="text-3xl font-bold text-gray-900">Últimas postagens</div>
                <Link href="/">
                  <span className="font-semibold text-gray-900 cursor-pointer">
                    Ver mais ➜
                  </span>
                </Link>
              </div>
              <ArticleList articles={moreArticles} />
            </Container>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = []
  const data: any = await getAllArticles(process.env.BLOG_DATABASE_ID)

  data.forEach(result => {
    if (result.object === 'page') {
      paths.push({
        params: {
          slug: slugify(result.properties.title.title[0].plain_text).toLowerCase(),
        },
      })
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const data = await getAllArticles(process.env.BLOG_DATABASE_ID)

  const page = getArticlePage(data, slug)
  const result = await getArticlePageData(page, slug, process.env.BLOG_DATABASE_ID)

  return {
    props: result,
    revalidate: 30,
  }
}

export default ArticlePage
