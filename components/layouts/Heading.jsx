import ContainerGrid from 'components/layouts/ContainerGrid'

export default function Heading({
  className = '',
  title,
  description,
  imageUrl,
  imageAlt,
  children,
}) {
  return (
    <ContainerGrid className={`md:grid-cols-2 ${className}`}>
      <div className="grid align">
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
      </div>
      <div className="grid justify-center">
        <img src={imageUrl} alt={imageAlt} />
      </div>
    </ContainerGrid>
  )
}
