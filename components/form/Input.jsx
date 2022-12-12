export default function TextInput({
  label = '',
  feedback = '',
  className = '',
  onChange = () => {},
  placeholder = 'type here',
  type = 'text',
  value,
  register = () => {},
  registerOptions = {},
}) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered w-full max-w-xs ${className}`}
        value={value}
        onChange={(event) => onChange(event)}
        {...register(label, registerOptions)}
      />
      <label className="label justify-end">
        <span className="label-text-alt">{feedback}</span>
      </label>
    </div>
  )
}
