import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import OnboardingLayout from "../../components/Layout/OnboardingLayout";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

const CreateOrganizationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [siteName, setSiteName] = useState("Shegruh01");
  const userDetails = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!siteName) {
      alert("Please enter a site name.");
      return;
    }
    const organizationDetails = {
      ...userDetails,
      siteName: `${siteName}.Shegruh.Net`,
    };
    console.log("Organization Details Submitted:", organizationDetails);
    navigate("/create-company", { state: organizationDetails });
  };

  return (
    <OnboardingLayout>
      <h1
        className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center md:text-left"
        style={{
          fontFamily: "'Cinzel Decorative', serif",
          letterSpacing: "0.05em",
        }}
      >
        CREATE YOUR ORGANIZATION
      </h1>
      <p className="text-gray-600 mb-8 sm:mb-10 text-sm text-center md:text-left">
        Sites Are The Shared Space Where People Organize Teams, Work, And
        Projects.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
        <div className="text-left mb-6">
          <label
            htmlFor="siteName"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Your Site
          </label>
          {/* New unified input field style */}
          <div className="flex items-center border border-gray-300 rounded-full p-1 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500">
            <input
              type="text"
              id="siteName"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="flex-grow bg-transparent border-none text-gray-700 p-2 focus:outline-none focus:ring-0"
              required
            />
            <span className="text-gray-500 pr-4">.Shegruh.Net</span>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            This Site Name Is Just A Suggestion. Feel Free To Change To
            Something
          </p>
        </div>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </form>
    </OnboardingLayout>
  );
};

export default CreateOrganizationPage;
