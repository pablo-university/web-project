import ContainerGrid from 'components/layouts/ContainerGrid'
import PrimaryOutlineButton from 'components/buttons/PrimaryOutlineButton'

export default function DonationPoint({
  title,
  place,
  date,
  hour,
  description,
  mapSrc,
  index,
}) {
  const isPair = (number) => {
    return number % 2 == 0
  }
  return (
    <ContainerGrid className="grid-cols-1 md:grid-cols-2 border rounded">
      <div
        className={`p-6 md:p-11 grid gap-2 ${
          isPair(index) ? '' : 'col-start-2 row-start-1'
        }`}
      >
        {isPair(index)}

        <h3>{title}</h3>
        <ul>
          <li>
            <span className="font-bold">Departamento:</span> {place}
          </li>
          <li>
            <span className="font-bold">Fecha: </span>
            {date}
          </li>
          <li>
            <span className="font-bold">Horario:</span> {hour}
          </li>
          <li>
            <span className="font-bold">Detalle:</span> {description}
          </li>
        </ul>
        <PrimaryOutlineButton>Reservar</PrimaryOutlineButton>
      </div>
      <div>
        <iframe
          src={mapSrc}
          className="w-full"
          width="400"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </ContainerGrid>
  )
}
