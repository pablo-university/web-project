import Link from 'next/link'
import { useRouter } from 'next/router'
import ContainerGrid from 'components/layouts/ContainerGrid'
import PrimaryOutlineButton from 'components/buttons/PrimaryOutlineButton'
import PrimaryButton from 'components/buttons/PrimaryButton'
import Input from 'components/form/Input'
import Wrapper from 'components/pages/donate/Wrapper'
import Select from 'components/form/Select'
import { useContext, AppContext } from 'context/app'

export default function ReservationDates() {
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

  const handleClickNext = () => {
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
            <Input label="Nombre" placeholder="Juanito" />
            {/**  
          TODO
          si hay tiempo resolver la parte de los input type radio
          */}
            {/* <div>
            <ContainerGrid className="grid-cols-2">
              <input
                type="radio"
                name="sexo"
                className="radio radio-primary"
                checked
              />
              <label className="label">
                <span className="label-text">
                  Pick the best fantasy franchise
                </span>
              </label>
            </ContainerGrid>
           
          </div> 
          <input type="radio" name="sexo" className="radio radio-primary" />
           */}
            <Input label="Cédula" type="number" placeholder="456464984" />
            <Input label="Teléfono" type="number" placeholder="0988259998++" />
          </div>
          <div>
            <Input label="Correo" type="mail" placeholder="pablo@correo.com" />
            <Input label="Dirección" type="text" placeholder="Rabmbla 2716" />
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
              value="Artigas"
              onChange={() => {}}
            >
              Selecionar una ciudad
            </Select>
          </div>
        </ContainerGrid>
      </div>
      <div className="grid grid-cols-2">
        <Link href="/donate/">
          <a>
            <PrimaryOutlineButton onClick={handleClickBack}>
              Atrás
            </PrimaryOutlineButton>
          </a>
        </Link>
        <PrimaryButton onClick={handleClickNext}>Siguiente</PrimaryButton>
      </div>
    </Wrapper>
  )
}
