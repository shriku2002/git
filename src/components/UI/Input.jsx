const Input = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  className = "",
}) => {
  const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";
  const defaultInputClass =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-shadow shadow-sm";

  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className={`${defaultInputClass} ${className}`}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
