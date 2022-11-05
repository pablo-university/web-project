import AppContext from 'context/app'
import { useContext } from 'react'
import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import ContainerSeparator from 'components/layouts/ContainerSeparator'
import Heading from 'components/layouts/Heading'
import DonationPoint from 'components/DonationPoint'
import donationPointSvg from 'img/donation-point/donation-point.svg'
import FilterInput from 'components/FilterInput'

export default function DonationPoints() {
  const { donationPoints } = useContext(AppContext)
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
            <FilterInput />
          </Heading>
        </Container>
        {donationPoints.map(
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
