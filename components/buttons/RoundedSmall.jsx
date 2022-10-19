export default function RoundedSmall({ className = '', children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-circle btn-sm [ border-none ] ${className}`}
    >
      {children}
    </button>
  )
}
