export default function Select({
  label = '',
  feedback = '',
  className = '',
  onChange,
  children = 'Pick one',
  value,
  options = [],
}) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <select
        value={value}
        onChange={onChange}
        className={`select select-bordered ${className}`}
      >
        <option disabled selected>
          {children}
        </option>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      <label className="label justify-end">
        <span className="label-text-alt">{feedback}</span>
      </label>
    </div>
  )
}
