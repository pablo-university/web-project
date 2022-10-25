import { useState, useEffect } from 'react'
import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import ContainerSeparator from 'components/layouts/ContainerSeparator'
import ContainerGrid from 'components/layouts/ContainerGrid'
import ArticleCard from 'components/cards/ArticleCard'
import { useRouter } from 'next/router'
import DbContext, { useContext } from 'context/db'
import Heading from 'components/layouts/Heading'

export default function Article() {
  const {
    query: { article: articleSlug },
  } = useRouter()

  // revisar problema al usar el slug tempranamente
  const {
    pages: {
      blog: { articles },
    },
  } = useContext(DbContext)

  const [article, setArticle] = useState(null)

  useEffect(() => {
    setArticle(articles[articleSlug])
  }, [])

  console.log(articleSlug, articles)

  return (
    <Layout>
      <ContainerSeparator>
        <Container>
          <Heading title={''} description={''} imageUrl={''}>
            --mas contenido
          </Heading>
        </Container>

        <Container>
          <section className="grid gap-6 md:gap-12">
            <h2>Artículos recientes</h2>
            <ContainerGrid className="grid-cols-1 md:grid-cols-3 justify-items-center gap-6">
              {articles.map(
                ({ title, description, date, thumbnail: { src } }, index) =>
                  index < 3 && (
                    <ArticleCard
                      key={index}
                      title={title}
                      date={date}
                      imageSrc={src}
                    >
                      {description}
                    </ArticleCard>
                  )
              )}
            </ContainerGrid>
          </section>
        </Container>
      </ContainerSeparator>
    </Layout>
  )
}
