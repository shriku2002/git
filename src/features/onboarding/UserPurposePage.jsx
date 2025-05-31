import { useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GoHome } from "react-icons/go";

// Corrected asset paths
import ButterflyPlaceholderImage from "../../assets/ButterFlay.png";
import GrassFlowerBorderImage from "../../assets/GrassFlowerBorder.png";

const UserPurposePage = () => {
  const navigate = useNavigate();

  const handlePurposeSelection = (purpose) => {
    navigate("/select-role", { state: { purpose: purpose } });
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full bg-[#0A2A0A] text-white overflow-hidden p-4">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20"
        aria-label="Go back"
      >
        <IoArrowBackOutline size={30} />
      </button>

      {/* Decorative Butterflies */}

      <img
        src={ButterflyPlaceholderImage}
        alt="Butterfly"
        className="absolute top-[15%] left-[10%] w-16 h-16 sm:w-20 sm:h-20 opacity-80 transform rotate-[-15deg]"
      />
      <img
        src={ButterflyPlaceholderImage}
        alt="Butterfly"
        className="absolute top-[20%] right-[12%] w-12 h-12 sm:w-16 sm:h-16 opacity-70 transform scale-x-[-1] rotate-[20deg]"
      />
      <img
        src={ButterflyPlaceholderImage}
        alt="Butterfly"
        className="absolute bottom-[30%] left-[25%] w-10 h-10 sm:w-12 sm:h-12 opacity-60 transform rotate-[5deg]"
      />
      <img
        src={ButterflyPlaceholderImage}
        alt="Butterfly"
        className="absolute bottom-[40%] right-[20%] w-14 h-14 sm:w-18 sm:h-18 opacity-75 transform scale-x-[-1] rotate-[-5deg]"
      />

      <div className="text-center z-10 flex flex-col items-center ">
        <h1
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 uppercase mb-10"
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            letterSpacing: "0.05em",
          }}
        >
          HOW DO YOU WANT TO USE SHEGRUH?
        </h1>
        <p className="text-sm sm:text-base text-gray-300 mb-10">
          This helps customize your experience
        </p>

        <div className="space-y-6 w-full max-w-md">
          <button
            onClick={() => handlePurposeSelection("work")}
            className="w-full flex items-center p-4 sm:p-5 bg-white/5 hover:bg-white/10 border border-green-400/30 rounded-lg transition-all duration-200 group"
          >
            <HiOutlineBuildingOffice2 className="text-3xl sm:text-4xl text-green-300 mr-4 group-hover:text-green-200" />
            <div className="text-left">
              <h2 className="text-lg sm:text-xl font-semibold">FOR WORK</h2>
              <p className="text-xs sm:text-sm text-gray-300">
                For project tracking, task management etc
              </p>
            </div>
          </button>
          <button
            onClick={() => handlePurposeSelection("personal")}
            className="w-full flex items-center p-4 sm:p-5 bg-white/5 hover:bg-white/10 border border-green-400/30 rounded-lg transition-all duration-200 group"
          >
            <GoHome className="text-3xl sm:text-4xl text-green-300 mr-4 group-hover:text-green-200" />
            <div className="text-left">
              <h2 className="text-lg sm:text-xl font-semibold">FOR PERSONAL</h2>
              <p className="text-xs sm:text-sm text-gray-300">
                For project tracking, learning management etc
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Decorative Border */}
      <div className="absolute -bottom-4 left-0 w-full h-[12%] sm:h-[15%] bg-repeat-x z-0">
        <img
          src={GrassFlowerBorderImage}
          alt="Grass and flower border"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default UserPurposePage;
