import AppContext from 'context/app'
import { useContext, useState } from 'react'
import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import ContainerSeparator from 'components/layouts/ContainerSeparator'
import Heading from 'components/layouts/Heading'
import DonationPoint from 'components/DonationPoint'
import donationPointSvg from 'img/donation-point/donation-point.svg'
import FilterInput from 'components/FilterInput'
import Alert from 'components/Alert'

export default function DonationPoints() {
  const { donationPoints } = useContext(AppContext)
  const [donationPointsFiltered, setDonationPointsFiltered] =
    useState(donationPoints)

  const handleClickFilter = (event) => {
    const donationPointsFiltered = donationPoints.filter(
      (donationPoint) => donationPoint.title.indexOf(event.target.value) !== -1
    )
    setDonationPointsFiltered(donationPointsFiltered)
  }
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
            <FilterInput
              onClick={handleClickFilter}
              label="Filtrar puntos de donación"
              buttonText="Filtrar Lugares"
              placeholder="rivera"
            />
          </Heading>
        </Container>
        {donationPointsFiltered &&
          donationPointsFiltered.map(
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
        {!donationPointsFiltered.length && (
          <Container>
            <Alert>No se encontraron resultados, prueba con otro término</Alert>
          </Container>
        )}
      </ContainerSeparator>
    </Layout>
  )
}
