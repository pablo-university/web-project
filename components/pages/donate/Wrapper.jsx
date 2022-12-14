import { useEffect, useState } from 'react'
import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import Heading from 'components/layouts/Heading'
import reservationImg from 'img/reservation/reservation.svg'
import ContainerGrid from 'components/layouts/ContainerGrid'
import ContainerSeparator from 'components/layouts/ContainerSeparator'
import { useContext, AppContext } from 'context/app'

export default function Donate({ children }) {
  const [stepActive, setStepActive] = useState(null)

  const appContext = useContext(AppContext)
  useEffect(() => {
    setStepActive(appContext?.donate?.stepActive)
  }, [appContext])
  return (
    <Layout>
      <ContainerSeparator>
        <Container>
          <Heading
            title={'Reserva de turno'}
            description={
              'Los horarios habilitados son aquellos que se ven en negro. Si el día o horario que quiere reservar no está activo, significa que están completos.'
            }
            imageUrl={reservationImg.src}
          ></Heading>
        </Container>
        <Container>
          <ContainerGrid className="md:grid-cols-2 gap-6">
            <div>{children}</div>
            <div className="hidden md:grid gap-6">
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
                <li className={`step ${stepActive ? 'step-primary' : ''}`}>
                  Datos personales
                </li>
              </ul>
            </div>
          </ContainerGrid>
        </Container>
      </ContainerSeparator>
    </Layout>
  )
}
