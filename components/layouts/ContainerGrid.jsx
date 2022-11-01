export default function ContainerGrid({ className = '', children }) {
  return (
    <div className={`grid grid-flow-row md:grid-flow-row ${className}`}>
      {children}
    </div>
  )
}
