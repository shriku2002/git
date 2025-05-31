import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import OnboardingLayout from "../../components/Layout/OnboardingLayout";
import Button from "../../components/UI/Button";
import { FiChevronDown } from "react-icons/fi"; // Import for select arrow

const CreateCompanyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [companyName, setCompanyName] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [designation, setDesignation] = useState("");
  const organizationDetails = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalSetupDetails = {
      ...organizationDetails,
      companyName,
      companySize,
      designation,
    };
    console.log("Final Setup Details Submitted:", finalSetupDetails);
    navigate("/verification");
  };

  // Local component for styled text input
  const StyledInput = ({
    id,
    label,
    value,
    onChange,
    placeholder,
    required = false,
  }) => (
    <div className="text-left">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1.5"
      >
        {label}
      </label>
      <div className="flex items-center border border-gray-300 rounded-full p-1 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500">
        <input
          id={id}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent border-none text-gray-700 p-2 focus:outline-none focus:ring-0"
          required={required}
        />
      </div>
    </div>
  );

  // Local component for styled select input
  const StyledSelect = ({
    id,
    label,
    value,
    onChange,
    children,
    required = false,
  }) => (
    <div className="text-left">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1.5"
      >
        {label}
      </label>
      <div className="relative flex items-center border border-gray-300 rounded-full p-1 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="w-full appearance-none bg-transparent border-none text-gray-700 p-2.5 focus:outline-none focus:ring-0" // Adjusted padding for select
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

  return (
    <OnboardingLayout>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center md:text-left">
        CREATE YOUR COMPANY
      </h1>
      <p className="text-gray-600 mb-8 sm:mb-10 text-sm text-center md:text-left">
        Tell us a little more about your company.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <StyledInput
          id="companyName"
          label="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter Company Name"
          required
        />
        <StyledSelect
          id="companySize"
          label="Company Size"
          value={companySize}
          onChange={(e) => setCompanySize(e.target.value)}
          required
        >
          <option value="" disabled>
            Select company size
          </option>
          <option value="1-4">1 to 4 employees</option>
          <option value="5-14">5 to 14 employees</option>
          <option value="15-29">15 to 29 employees</option>
          <option value="30+">30 or more employees</option>
        </StyledSelect>
        <StyledSelect
          id="designation"
          label="Your Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          required
        >
          <option value="" disabled>
            Select your designation
          </option>
          <option value="Owner">Owner</option>
          <option value="ExecutiveLeadership">
            Executive & Leadership Level
          </option>
          <option value="MidLevel">Mid-Level Positions</option>
          <option value="EntryLevel">Entry-Level Positions</option>
        </StyledSelect>
        <div className="pt-4">
          <Button type="submit">Continue</Button>
        </div>
      </form>
    </OnboardingLayout>
  );
};

export default CreateCompanyPage;
