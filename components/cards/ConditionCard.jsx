export default function ConditionCard({ title, src, alt }) {
  return (
    <div className="grid gap-2 p-6 border rounded-lg">
      <img src={src} alt={alt} />
      <h3 className="font-normal">{title}</h3>
    </div>
  )
}
