import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import Heading from 'components/layouts/Heading'
import reservationImg from 'img/reservation/reservation.svg'

export default function Donate() {
  return (
    <Layout>
      <Container>
        <Heading
          title={'donate'}
          description={
            'Recurda que siempre que necesites más información o haya algo que no puedas encontrar, puedes ponerte inmediatamente en contacto con nosotos!'
          }
          imageUrl={reservationImg.src}
        >
          --mas contenido
        </Heading>
      </Container>
      <Container>--content</Container>
    </Layout>
  )
}
