import Link from 'next/link'
import AppContext, { useContext } from 'context/app'
import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import ContainerGrid from 'components/layouts/ContainerGrid'
import ContainerSeparator from 'components/layouts/ContainerSeparator'
import Heading from 'components/layouts/Heading'
import ArticleCard from 'components/cards/ArticleCard'
import articlesSvg from 'img/articles/articles.svg'
import FilterInput from 'components/FilterInput'

export default function Articles() {
  const { articles } = useContext(AppContext)

  const handleClickFilter = (event) => {
    /**
     * TODO filtrar lugares
     */
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
            {articles &&
              articles.map(
                ({ title, description, date, cover: { src } }, index) => (
                  <Link key={index} href={`/articles/${index}`}>
                    <a className="grid">
                      <ArticleCard title={title} date={date} imageSrc={src}>
                        {description}
                      </ArticleCard>
                    </a>
                  </Link>
                )
              )}
          </ContainerGrid>
        </Container>
      </ContainerSeparator>
    </Layout>
  )
}
