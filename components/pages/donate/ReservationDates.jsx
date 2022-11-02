import ContainerGrid from 'components/layouts/ContainerGrid'
import PrimaryButton from 'components/buttons/PrimaryButton'
import Input from 'components/form/Input'

export default function ReservationDates() {
  return (
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
      <PrimaryButton>Siguiente</PrimaryButton>
    </div>
  )
}
