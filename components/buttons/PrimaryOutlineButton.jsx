export default function PrimaryOutlineButton({
  className = '',
  children,
  onClick = () => {},
}) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-outline btn-primary [ px-10 font-bold text-base ] ${className}`}
    >
      {children}
    </button>
  )
}
