import ContainerGrid from 'components/layouts/ContainerGrid'
import PrimaryButton from 'components/buttons/PrimaryButton'
import Input from 'components/form/Input'
import Select from 'components/form/Select'

export default function ReservationDates(props) {
  return (
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
          >
            Selecionar una ciudad
          </Select>
        </div>
      </ContainerGrid>
    </div>
  )
}
