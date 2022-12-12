import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ContainerGrid from 'components/layouts/ContainerGrid'
import PrimaryButton from 'components/buttons/PrimaryButton'
import Input from 'components/form/Input'
import Wrapper from 'components/pages/donate/Wrapper'
import { useContext, AppContext } from 'context/app'
import { useForm } from 'react-hook-form'

export default function ReservationDates() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const router = useRouter()
  const appContext = useContext(AppContext)

  const handleClickNextStep = (data) => {
    /**
     * si es valido asigno nuevo contexto de step
     * redirigir
     */

    // console.log('handleClickNextStep', data)
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
            <Input
              label="Localidad"
              placeholder="Ingresa una localidad"
              register={register}
              registerOptions={{
                required: true,
              }}
              feedback={
                errors.Localidad
                  ? 'Debes colocar una localidad de tu preferencia'
                  : ''
              }
            />
            <Input
              register={register}
              label="Motivo"
              placeholder="Ingresa motivo de donación"
              registerOptions={{
                required: true,
              }}
              feedback={
                errors.Localidad ? 'Debes brindar un motivo de donación' : ''
              }
            />
          </div>
          <div>
            <Input
              register={register}
              registerOptions={{
                required: true,
              }}
              feedback={
                errors.Localidad ? 'Debes colocar una fecha para donar' : ''
              }
              label="Fecha"
              type="datetime-local"
            />
          </div>
        </ContainerGrid>
        <PrimaryButton onClick={handleSubmit(handleClickNextStep)}>
          Siguiente
        </PrimaryButton>
      </div>
    </Wrapper>
  )
}
