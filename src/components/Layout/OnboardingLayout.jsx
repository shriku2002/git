import { useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import PlantImage from "../../assets/Plant.png";
import PlantLeafImage from "../../assets/Plantleaf.png";

const OnboardingLayout = ({ children, showBackButton = true }) => {
  const navigate = useNavigate();
  const language = "English"; // Can be turned into a prop or state later

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-white overflow-hidden">
      {/* Left Side */}
      <div className="w-full md:w-[45%] lg:w-2/5 relative flex flex-col p-6 sm:p-8">
        <div className="flex gap-6 items-start justify-start mb-auto">
          {showBackButton && (
            <button
              onClick={() => navigate(-1)}
              className="text-gray-600 hover:text-gray-800"
              aria-label="Go back"
            >
              <IoArrowBackOutline size={24} />
            </button>
          )}
          <div className="relative">
            <button className="flex items-center text-left text-sm text-gray-700 hover:text-gray-900">
              {language}
              <FiChevronDown size={20} className="ml-1" />
            </button>
          </div>
        </div>
        <div className="flex-grow flex items-end justify-end md:justify-end mt-[-2rem] md:mt-0 md:pl-4 lg:pl-8">
          <img
            src={PlantImage}
            alt="Potted Plant"
            className="w-[85%] h-[75%] absolute left-[25%] text-gray-500 rounded-lg "
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[70%] lg:w-3/5 bg-white flex flex-col justify-center items-center p-6 sm:p-10 md:p-12 lg:p-16 relative">
        <div className="absolute top-0 right-0 mt-0 mr-0 hidden sm:block">
          <img
            src={PlantLeafImage}
            alt="Decorative Leaf"
            className="w-72 h-auto "
          />
        </div>
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
};

export default OnboardingLayout;
