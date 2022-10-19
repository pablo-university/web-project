import PrimaryButton from 'components/buttons/PrimaryButton'

export default function TestimonialCard({ title, children, urlImage }) {
  return (
    <div className="card w-96 glass">
      <figure>
        <img src={urlImage} alt={title} />
      </figure>
      <div className="card-body [ text-left ]">
        <h2 className="card-title">{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  )
}
