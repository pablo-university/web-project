import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import Heading from 'components/layouts/Heading'
import reservationImg from 'img/reservation/reservation.svg'
import ContainerGrid from 'components/layouts/ContainerGrid'
import ContainerSeparator from 'components/layouts/ContainerSeparator'
import PrimaryButton from 'components/buttons/PrimaryButton'
import Input from 'components/form/Input'

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
      <ContainerSeparator>
        <Container>
          <ContainerGrid className="md:grid-cols-2 gap-6">
            <div>
              <h3>Datos de la reserva</h3>
              <ContainerGrid className="lg:grid-cols-2 lg:gap-6">
                <div>
                  <Input
                    label="Localidad"
                    placeholder="Ingresa una localidad"
                  />
                  <Input
                    label="Motivo"
                    placeholder="Ingresa motivo de donación"
                  />
                </div>
                <div>
                  <Input label="Fecha" type="date" />
                </div>
              </ContainerGrid>
              <PrimaryButton>Siguiente</PrimaryButton>
            </div>
            <div className="grid gap-6">
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
              <ul className="steps ">
                <li className="step step-primary">Datos de la reserva</li>
                <li className="step">Datos personales</li>
              </ul>
            </div>
          </ContainerGrid>
        </Container>
      </ContainerSeparator>
    </Layout>
  )
}
