export default function Container({ className = '', children }) {
  return <div className={`container m-auto ${className}`}>{children}</div>
}
