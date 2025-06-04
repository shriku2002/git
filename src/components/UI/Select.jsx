import { FiChevronDown } from "react-icons/fi";

const Select = ({ id, label, value, onChange, required = false, children }) => {
  const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";
  const selectClass =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-shadow shadow-sm appearance-none";

  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className={selectClass}
          required={required}
        >
          {children}
        </select>
        <FiChevronDown
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          size={20}
        />
      </div>
    </div>
  );
};

export default Select;
