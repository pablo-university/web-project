import DbContext from 'context/db'
import { useContext } from 'react'
import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import Heading from 'components/layouts/Heading'
import ArticleCard from 'components/cards/ArticleCard'

export default function Blog() {
  const {
    pages: {
      blog: {
        title,
        description,
        image: { src },
      },
    },
  } = useContext(DbContext)
  return (
    <Layout>
      <Container>
        <Heading title={title} description={description} imageUrl={src}>
          --mas contenido
        </Heading>
      </Container>
      <Container>
        --donation points
        <ArticleCard
          title={'title'}
          date="27 de octubre"
          imageSrc="https://placeimg.com/400/225/arch"
        >
          content
        </ArticleCard>
      </Container>
    </Layout>
  )
}
