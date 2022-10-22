import DbContext from 'context/db'
import { useContext } from 'react'
import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import ContainerSeparator from 'components/layouts/ContainerSeparator'
import Heading from 'components/layouts/Heading'
import DonationPoint from 'components/DonationPoint'

export default function DonationPoints() {
  const {
    pages: {
      donationPoints: {
        title,
        description,
        image: { src },
        points,
      },
    },
  } = useContext(DbContext)
  return (
    <Layout>
      <Container>
        <Heading
          title={title}
          description={description}
          imageUrl={src}
        ></Heading>
      </Container>
      <ContainerSeparator>
        {points.map(
          ({ title, place, date, hour, description, mapSrc }, index) => (
            <Container key={index}>
              <DonationPoint
                title={title}
                place={place}
                date={date}
                hour={hour}
                description={description}
                mapSrc={mapSrc}
              />
            </Container>
          )
        )}
      </ContainerSeparator>
    </Layout>
  )
}
