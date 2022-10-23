import DbContext from 'context/db'
import { useContext } from 'react'
import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import ContainerGrid from 'components/layouts/ContainerGrid'
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
      <Container>
        <Heading title={title} description={description} imageUrl={src}>
          --mas contenido
        </Heading>
      </Container>
      <Container>
        --donation points
        <ContainerGrid>
          {articles.map(({ title, description, date, thumbnail }, index) => (
            <ArticleCard
              key={index}
              title={title}
              date={date}
              imageSrc={thumbnail}
            >
              content
            </ArticleCard>
          ))}
        </ContainerGrid>
      </Container>
    </Layout>
  )
}
