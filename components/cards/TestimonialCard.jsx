export default function TestimonialCard({
  title,
  className = '',
  children,
  imageUrl,
}) {
  return (
    <div className={`card w-96 glass ${className}`}>
      <figure>
        <img src={imageUrl} alt={title} />
      </figure>
      <div className="card-body [ text-left ]">
        <h2 className="card-title">{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  )
}
