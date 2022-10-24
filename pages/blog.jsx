import DbContext from 'context/db'
import { useContext } from 'react'
import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import ContainerGrid from 'components/layouts/ContainerGrid'
import ContainerSeparator from 'components/layouts/ContainerSeparator'
import Heading from 'components/layouts/Heading'
import ArticleCard from 'components/cards/ArticleCard'

export default function Blog() {
  const {
    pages: {
      blog: {
        title,
        description,
        image: { src },
        articles,
      },
    },
  } = useContext(DbContext)
  console.log(articles)
  return (
    <Layout>
      <ContainerSeparator>
        <Container>
          <Heading title={title} description={description} imageUrl={src}>
            --mas contenido
          </Heading>
        </Container>
        <Container>
          <ContainerGrid className="justify-items-center gap-6">
            {articles.map(({ title, description, date, thumbnail }, index) => (
              <ArticleCard
                key={index}
                title={title}
                date={date}
                imageSrc={thumbnail}
              >
                {description}
              </ArticleCard>
            ))}
          </ContainerGrid>
        </Container>
      </ContainerSeparator>
    </Layout>
  )
}
