
export default function Button({className='', children, onClick=()=>{}}) {
  return (
    <button onClick={onClick} className={`btn btn-primary px-10 ${className}`}>{children}</button>
  )
}
