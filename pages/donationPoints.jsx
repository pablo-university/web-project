import DbContext from 'context/db'
import { useContext } from 'react'
import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import ContainerSeparator from 'components/layouts/ContainerSeparator'
import Heading from 'components/layouts/Heading'
import DonationPoint from 'components/DonationPoint'
import TextInput from 'components/form/TextInput'
import PrimaryButton from 'components/buttons/PrimaryButton'
import ContainerGrid from 'components/layouts/ContainerGrid'
import donationPointSvg from 'img/donation-point/donation-point.svg'

export default function DonationPoints() {
  const {
    pages: {
      donationPoints: { points },
    },
  } = useContext(DbContext)
  return (
    <Layout>
      <ContainerSeparator>
        <Container>
          <Heading
            title={'Puntos de donación'}
            description={
              'Recurda que siempre que necesites más información o haya algo que no puedas encontrar, puedes ponerte inmediatamente en contacto con nosotos!'
            }
            imageUrl={donationPointSvg.src}
          >
            <ContainerGrid className="items-center md:gap-6">
              <TextInput label="Filtrar puntos de donación" />
              <PrimaryButton className="mt-4">Filtrar lugares</PrimaryButton>
            </ContainerGrid>
          </Heading>
        </Container>
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
