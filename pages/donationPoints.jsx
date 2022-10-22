import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import Heading from 'components/layouts/Heading'
import DbContext from 'context/db'
import { useContext } from 'react'

export default function DonationPoints() {
  const {
    pages: {
      donationPoint: {
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
          mas contenido
        </Heading>
      </Container>
    </Layout>
  )
}
