import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import Heading from 'components/layouts/Heading'
import reservationImg from 'img/reservation/reservation.svg'
import ContainerGrid from 'components/layouts/ContainerGrid'

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
      <Container>
        <ContainerGrid className="md:grid-cols-2">
          <div>datos de la reserva</div>
          <div>
            <h3>Tener en cuenta</h3>
            <ul>
              <li>Seleccione la localidad de donación</li>
              <li>El motivo </li>
              <li>Seleccione Fecha habilitada</li>
              <li>Horario disponible</li>
              <li>Complete el formulario con los datos solicitados. </li>
              <li>Oprima enviar.</li>
              <li>
                Recibirá automáticamente en su correo electrónico la
                confirmación. (Si no lo encuentra en su bandeja de entrada
                chequear la bandeja de SPAM)
              </li>
            </ul>
            <ul className="steps">
              <li className="step step-primary">Datos de la reserva</li>
              <li className="step">Datos personales</li>
            </ul>
          </div>
        </ContainerGrid>
      </Container>
    </Layout>
  )
}
