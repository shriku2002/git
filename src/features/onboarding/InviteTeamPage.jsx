import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "../../components/Layout/OnboardingLayout";
import Button from "../../components/UI/Button";

// Local component for the new input style
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
    <div className="flex items-center border border-gray-300 rounded-full p-1 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500">
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

const InviteTeamPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter an email to invite.");
      return;
    }
    console.log(`Inviting team member with email: ${email}`);
    navigate("/leads-welcome", { state: { showWelcomePopupOnLoad: true } });
  };

  return (
    <OnboardingLayout>
      <div className="text-center">
        <h1
          className="text-2xl sm:text-3xl font-bold text-gray-800 mb-12 whitespace-nowrap"
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            letterSpacing: "0.05em",
          }}
        >
          INVITE TEAM MEMBERS
        </h1>
        <form onSubmit={handleSave} className="space-y-6">
          <StyledInput
            id="email"
            label="Email"
            type="email"
            placeholder="Enter email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Save</Button>
          <Button
            type="button"
            onClick={() => navigate("/leads-welcome", { state: { showWelcomePopupOnLoad: true } })}
            variant="skip"
          >
            Skip for now
          </Button>
        </form>
      </div>
    </OnboardingLayout>
  );
};

export default InviteTeamPage;