const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  fullWidth = true,
  disabled = false,
}) => {
  const baseClasses =
    "py-3.5 px-4 font-semibold rounded-lg transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center"; // Added flex for icon alignment

  const variants = {
    primary: `text-white ${
      fullWidth ? "w-full" : ""
    } focus:ring-green-600 disabled:opacity-50`,
    skip: `text-gray-500 hover:text-gray-800 ${fullWidth ? "w-full" : ""}`,
  };

  const style =
    variant === "primary"
      ? { background: "linear-gradient(to right, #97C94C, #5C9441)" }
      : {};

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]}`}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
