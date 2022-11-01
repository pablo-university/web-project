export default function TextInput({
  label = '',
  feedback = '',
  className = '',
  onChange,
  value,
}) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className={`input input-bordered w-full max-w-xs ${className}`}
        value={value}
        onChange={onChange}
      />
      <label className="label justify-end">
        <span className="label-text-alt">{feedback}</span>
      </label>
    </div>
  )
}
