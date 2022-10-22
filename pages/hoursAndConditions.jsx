import DbContext from 'context/db'
import { useContext } from 'react'
import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import Heading from 'components/layouts/Heading'

export default function HoursAndConditios() {
  const {
    pages: {
      hoursAndConditios: {
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
      <Container>--content</Container>
    </Layout>
  )
}
