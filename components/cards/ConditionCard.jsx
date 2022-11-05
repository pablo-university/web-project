export default function ConditionCard({ title, src, alt, className = '' }) {
  return (
    <div className={`grid gap-2 p-6 md:p-8 border rounded-lg ${className}`}>
      <img src={src} alt={alt} />
      <h3 className="font-normal text-center">{title}</h3>
    </div>
  )
}
