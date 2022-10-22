export default function Container({ className = '', children }) {
  return (
    <div className={`grid gap-10 md:gap-24 my-10 md:my-24 ${className}`}>
      {children}
    </div>
  )
}
