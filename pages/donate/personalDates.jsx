import Link from 'next/link'
import { useRouter } from 'next/router'
import ContainerGrid from 'components/layouts/ContainerGrid'
import PrimaryOutlineButton from 'components/buttons/PrimaryOutlineButton'
import PrimaryButton from 'components/buttons/PrimaryButton'
import Input from 'components/form/Input'
import Wrapper from 'components/pages/donate/Wrapper'
import Select from 'components/form/Select'
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

  const handleClickBack = () => {
    appContext.setContextState({
      ...appContext,
      donate: {
        stepActive: 0,
      },
    })
    router.push('/donate/')
  }

  const handleClickNext = (formData) => {
    console.log('handleClickNext', formData)

    /**
     * si es valido asigno nuevo contexto de step
     * redirigir
     */
    router.push('/donate/successfull')
  }
  return (
    <Wrapper>
      <div>
        <h3>Datos Personales</h3>
        <ContainerGrid className="lg:grid-cols-2 lg:gap-6">
          <div>
            <Input
              label="Nombre"
              placeholder="Juanito"
              register={register}
              registerOptions={{
                required: true,
              }}
              feedback={errors.Nombre ? 'Debes colocar un nombre' : ''}
            />
            <Input
              label="Cédula"
              type="number"
              placeholder="456464984"
              register={register}
              registerOptions={{
                required: true,
              }}
              feedback={errors.Cédula ? 'Debes colocar tu CI' : ''}
            />
            <Input
              label="Teléfono"
              type="number"
              placeholder="0988259998++"
              register={register}
              registerOptions={{
                required: true,
                pattern: /\d{7,10}/,
              }}
              feedback={errors.Teléfono ? 'Necesitamos un teléfono válido' : ''}
            />
          </div>
          <div>
            <Input
              label="Correo"
              type="mail"
              placeholder="pablo@correo.com"
              register={register}
              registerOptions={{
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              }}
              feedback={errors.Correo ? 'Este email parece inválido' : ''}
            />
            <Input
              label="Dirección"
              type="text"
              placeholder="Rabmbla 2716"
              register={register}
              registerOptions={{
                required: true,
              }}
              feedback={errors.Dirección ? 'Necesitamos una Dirección' : ''}
            />
            <Select
              label="Ciudad"
              options={[
                'Artigas',
                'Canelones',
                'Cerro',
                'LargoColonia',
                'Durazno',
                'Flores',
                'Florida',
              ]}
            >
              Selecionar una ciudad
            </Select>
          </div>
        </ContainerGrid>
      </div>
      <div>
        {/*  <Link href="/donate/">
          <a>
            <PrimaryOutlineButton onClick={handleClickBack}>
              Atrás
            </PrimaryOutlineButton>
          </a>
        </Link> */}
        <PrimaryButton onClick={handleSubmit(handleClickNext)}>
          Siguiente
        </PrimaryButton>
      </div>
    </Wrapper>
  )
}
