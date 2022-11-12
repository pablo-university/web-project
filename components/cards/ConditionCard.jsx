export default function ConditionCard({ title, src, alt, className = '' }) {
  return (
    <div
      className={`grid gap-5 p-6 md:p-8 border rounded-lg transition duration-300 hover:border-primary ${className}`}
    >
      <img src={src} alt={alt} />
      <h3 className="font-light text-center">{title}</h3>
    </div>
  )
}
