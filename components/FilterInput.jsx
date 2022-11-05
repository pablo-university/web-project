import Input from 'components/form/Input'
import PrimaryButton from 'components/buttons/PrimaryButton'
import ContainerGrid from 'components/layouts/ContainerGrid'
export default function FilterInput() {
  return (
    <ContainerGrid className="items-center md:gap-6">
      <Input label="Filtrar puntos de donación" />
      <PrimaryButton className="mt-4">Filtrar lugares</PrimaryButton>
    </ContainerGrid>
  )
}
