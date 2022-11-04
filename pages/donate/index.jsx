import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ContainerGrid from 'components/layouts/ContainerGrid'
import PrimaryButton from 'components/buttons/PrimaryButton'
import Input from 'components/form/Input'
import Wrapper from 'components/pages/donate/Wrapper'
import { useContext, AppContext } from 'context/app'

export default function ReservationDates() {
  const router = useRouter()
  const appContext = useContext(AppContext)

  useEffect(() => {
    appContext.setContextState({
      ...appContext,
      donate: {
        stepActive: 0,
      },
    })
  }, [])

  const handleClickNextStep = () => {
    /**
     * si es valido asigno nuevo contexto de step
     * redirigir
     */
    appContext.setContextState({
      ...appContext,
      donate: {
        stepActive: 1,
      },
    })
    router.push('/donate/personalDates')
  }
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
        {/*  <Link href="/donate/personalDates">
          <a> */}
        <PrimaryButton onClick={handleClickNextStep}>Siguiente</PrimaryButton>
        {/*  </a>
        </Link> */}
      </div>
    </Wrapper>
  )
}
