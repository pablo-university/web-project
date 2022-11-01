import Link from 'next/link'
import DbContext, { useContext } from 'context/db'
import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import ContainerGrid from 'components/layouts/ContainerGrid'
import ContainerSeparator from 'components/layouts/ContainerSeparator'
import Heading from 'components/layouts/Heading'
import ArticleCard from 'components/cards/ArticleCard'
import articlesSvg from 'img/articles/articles.svg'

export default function Articles() {
  const { articles } = useContext(DbContext)
  return (
    <Layout>
      <ContainerSeparator>
        <Container>
          <Heading
            title={'articles'}
            description={
              'Recurda que siempre que necesites más información o haya algo que no puedas encontrar, puedes ponerte inmediatamente en contacto con nosotos!'
            }
            imageUrl={articlesSvg.src}
          >
            --mas contenido
          </Heading>
        </Container>
        <Container>
          <ContainerGrid className="grid-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4">
            {articles.map(
              ({ title, description, date, cover: { src } }, index) => (
                <Link key={index} href={`/articles/${index}`}>
                  <a>
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