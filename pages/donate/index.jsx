import { useState, useEffect } from 'react'
import AppContext, { useContext } from 'context/app'
import Layout from 'components/layouts/Layout'
import Container from 'components/layouts/Container'
import Heading from 'components/layouts/Heading'
import reservationImg from 'img/reservation/reservation.svg'
import ContainerGrid from 'components/layouts/ContainerGrid'
import ContainerSeparator from 'components/layouts/ContainerSeparator'
import PrimaryButton from 'components/buttons/PrimaryButton'
import Input from 'components/form/Input'
import ReservationDates from 'components/pages/donate/ReservationDates'
import PersonalDates from 'components/pages/donate/PersonalDates'

export default function Donate() {
  // trabajarlo en contexto si es necesario
  const appContext = useContext(AppContext)
  appContext.donate = {
    steps: [
      {
        component: (props) => <ReservationDates {...{ props }} />,
        validated: false,
      },
      {
        component: (props) => <PersonalDates {...{ props }} />,
        validated: false,
      },
    ],
  }
  // -------------------------------
  const [stepActiveIndex, setStepActiveIndex] = useState(0)
  const [steps, setSteps] = useState(appContext.donate.steps)
  const handleClickNext = () => {
    /**
     * chequea si las secciones están validadas
     * si ok, entonces:
     * chequea no ser el final
     * si no es el final avanza
     * si es el final, cambia de pagina
     */
  }
  const handleClickBack = () => {
    /**
     * chequea no ser la final
     * si no es la final retrocede un paso
     */
  }
  console.log(steps)

  // const RenderJSX = (object) => <>{object}</>
  // console.log(appContext)
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
            <div>
              here
              {/* WORKING */}
              {/* <ReservationDates></ReservationDates> */}
              {/* <PersonalDates></PersonalDates> */}
              {appContext.donate.steps.map(
                ({ component: Component }, index) => (
                  <Component key={index} index={index}></Component>
                )
              )}
              {/* --- */}
              <PrimaryButton onClick={handleClickNext}>Siguiente</PrimaryButton>
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
