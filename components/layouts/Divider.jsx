export default function Divider({ left, right, className }) {
  return (
    <div className={`grid ${className}`}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  )
}
