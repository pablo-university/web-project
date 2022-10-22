import ContainerGrid from 'components/layouts/ContainerGrid'

export default function DonationPoint({
  title,
  place,
  date,
  hour,
  description,
  mapSrc,
}) {
  return (
    <ContainerGrid className="grid-cols-1 md:grid-cols-2 border rounded">
      <div className="p-6">
        <h3>{title}</h3>
        <ul>
          <li>Departamento: {place}</li>
          <li>Fecha: {date}</li>
          <li>Horario: {hour}</li>
          <li>Detalle: {description}</li>
        </ul>
      </div>
      <div>
        <iframe
          src={mapSrc}
          className="w-full"
          width="400"
          height="300"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </ContainerGrid>
  )
}
