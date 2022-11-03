import Link from 'next/link'
import { useEffect } from 'react'
import ContainerGrid from 'components/layouts/ContainerGrid'
import PrimaryButton from 'components/buttons/PrimaryButton'
import Input from 'components/form/Input'
import Wrapper from 'components/pages/donate/Wrapper'
import { useContext, AppContext } from 'context/app'

export default function ReservationDates() {
  const appContext = useContext(AppContext)

  useEffect(() => {
    console.log(appContext)
  }, [appContext])

  // appContext.donate.currentStepActive = 0
  // appContext.donate.currentStepActive = 0
  /* appContext = {
    donate: {
      currentStepActive: 0,
    },
  } */
  return (
    <Wrapper>
      <div>
        <h3>Datos de la reserva</h3>
        <ContainerGrid className="lg:grid-cols-2 lg:gap-6">
          <div>
            <Input label="Localidad" placeholder="Ingresa una localidad" />
            <Input label="Motivo" placeholder="Ingresa motivo de donación" />
          </div>
          <div>
            <Input label="Fecha" type="date" />
          </div>
        </ContainerGrid>
        <Link href="/donate/personalDates">
          <a>
            <PrimaryButton>Siguiente</PrimaryButton>
          </a>
        </Link>
      </div>
    </Wrapper>
  )
}
