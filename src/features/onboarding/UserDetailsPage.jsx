import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import OnboardingLayout from "../../components/Layout/OnboardingLayout";
import Button from "../../components/UI/Button";

// A reusable component for the styled input, defined locally
const StyledInput = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) => (
  <div className="text-left">
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1.5"
    >
      {label}
    </label>
    {/* Using rounded-full for consistency with other pages */}
    <div className="flex items-center border border-gray-300 rounded-xl p-1 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent border-none text-gray-700 p-2 focus:outline-none focus:ring-0"
        required={required}
      />
    </div>
  </div>
);

const UserDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firmName, setFirmName] = useState("");
  const [city, setCity] = useState("");
  const { purpose, role } = location.state || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = { name, phoneNumber, firmName, city, purpose, role };

    // --- FIX: The navigation was incorrect. It should go to /create-organization next. ---
    navigate("/create-organization", { state: userDetails });
  };

  return (
    <OnboardingLayout>
      <h1
        className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 text-center"
        style={{
          fontFamily: "'Cinzel Decorative', serif",
          letterSpacing: "0.05em",
        }}
      >
        LET'S GET STARTED
      </h1>
      <p className="text-gray-600 mb-8 sm:mb-10 text-center">
        We'd like to learn a bit more about you so we can personalize your
        experience.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <StyledInput
          id="name"
          label="Name"
          placeholder="Enter first and last name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <StyledInput
          id="phoneNumber"
          label="Phone number"
          type="tel" // Using 'tel' is more appropriate for phone numbers
          placeholder="(123) 456-7890"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <StyledInput
          id="firmName"
          label="Firm Name"
          placeholder="Enter your firm's name"
          value={firmName}
          onChange={(e) => setFirmName(e.target.value)}
        />
        <StyledInput
          id="city"
          label="City"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <div className="pt-4">
          <Button type="submit">Continue</Button>
        </div>
      </form>
    </OnboardingLayout>
  );
};

export default UserDetailsPage;
