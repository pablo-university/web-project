import Link from 'next/link'
import { useState, useEffect } from 'react'
import AppContext, { useContext } from 'context/app'
import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import ContainerGrid from 'components/layouts/ContainerGrid'
import ContainerSeparator from 'components/layouts/ContainerSeparator'
import Heading from 'components/layouts/Heading'
import ArticleCard from 'components/cards/ArticleCard'
import articlesSvg from 'img/articles/articles.svg'
import FilterInput from 'components/FilterInput'
import Alert from 'components/Alert'
import { getArticles } from 'connectors/getArticles'

export default function Articles({ articles }) {
  const [articlesFiltered, setArticlesFiltered] = useState(articles)

  const handleClickFilter = (event) => {
    const articlesFiltered = articles.filter(
      (article) => article.title.indexOf(event.target.value) !== -1
    )
    setArticlesFiltered(articlesFiltered)
  }
  return (
    <Layout>
      <ContainerSeparator>
        <Container>
          <Heading
            title={'Artículos'}
            description={
              'En esta sección puedes buscar contenido relevante y conocer las últimas novedades. Mantente al tanto sobre las últimas actualizaciones del Hemocentro!'
            }
            imageUrl={articlesSvg.src}
          >
            <FilterInput
              onClick={handleClickFilter}
              label="Filtrar por artículos"
              buttonText="Filtrar Artículo"
              placeholder="hemobus"
            />
          </Heading>
        </Container>
        <Container>
          <ContainerGrid className="grid-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4">
            {articlesFiltered &&
              articlesFiltered.map(
                ({ id, title, description, date, cover: { url } }, index) => (
                  <Link key={index} href={`/articles/${id}`}>
                    <a className="grid">
                      <ArticleCard title={title} date={date} imageSrc={url}>
                        {description}
                      </ArticleCard>
                    </a>
                  </Link>
                )
              )}
          </ContainerGrid>
          {articlesFiltered && !articlesFiltered.length && (
            <Container>
              <Alert>
                No se encontraron artículos coincidentes con tu búsqueda
              </Alert>
            </Container>
          )}
        </Container>
      </ContainerSeparator>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const articles = await getArticles()
  return {
    props: { articles },
  }
}
