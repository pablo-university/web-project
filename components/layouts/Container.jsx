export default function Container({ className = '', children }) {
  return <div className={`container p-4 m-auto ${className}`}>{children}</div>
}
