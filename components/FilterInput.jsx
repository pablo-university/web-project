import { useState } from 'react'
import Input from 'components/form/Input'
import PrimaryButton from 'components/buttons/PrimaryButton'
import ContainerGrid from 'components/layouts/ContainerGrid'
export default function FilterInput({ onClick, label, buttonText }) {
  const [event, setEvent] = useState({ target: { value: '' } })
  const handleChange = (event) => {
    setEvent(event)
  }
  return (
    <ContainerGrid className="items-center md:gap-6">
      <Input label={label} value={event.target.value} onChange={handleChange} />
      <PrimaryButton onClick={() => onClick(event)} className="mt-4">
        {buttonText}
      </PrimaryButton>
    </ContainerGrid>
  )
}
