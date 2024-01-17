import { convertToArticleList, getAllArticles } from 'utils/notion'
import { Layout } from 'src/components/templates/layout'
import { useState } from 'react'
import { filterArticles } from 'utils/filter-articles'
import Category from 'src/components/atoms/category'
import ArticleList from 'src/components/organisms/article-list'
import Container from 'src/components/molecules/container'
import HeroHeader from 'src/components/organisms/hero-header'

export default function Index({ articles, categories }) {
  const [selectedTag, setSelectedTag] = useState<string>(null)
  const filteredArticles = filterArticles(articles, selectedTag)

  return (
    <Layout>
      <HeroHeader />
      <div className="flex flex-wrap justify-center gap-4 -mt-16">
        {categories.map(tag => (
          <Category
            tag={tag}
            key={tag}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
        ))}
      </div>
      <Container>
        <div className="py-8">
          <div className="my-8 text-3xl font-bold text-zinc-900">
            {!selectedTag ? 'Últimas postagens' : `Postagens sobre ${selectedTag}`}
          </div>
          <ArticleList articles={filteredArticles} />
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const data = await getAllArticles(process.env.BLOG_DATABASE_ID)

  const { articles, categories } = convertToArticleList(data)

  return {
    props: {
      articles,
      categories,
    },
    revalidate: 30,
  }
}
