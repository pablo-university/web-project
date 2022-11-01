export default function Container({ className = '', children }) {
  return (
    <div className={`grid gap-6 md:gap-12 my-10 md:my-24 ${className}`}>
      {children}
    </div>
  )
}
