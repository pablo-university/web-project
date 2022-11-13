export default function Toast({ children, className }) {
  return (
    <div className="toast">
      <div className={`alert ${className}`}>
        <div>
          <span>{children}</span>
        </div>
      </div>
    </div>
  )
}
