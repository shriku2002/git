import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdChair, MdArchitecture } from "react-icons/md";

// Corrected asset paths
import ButterflyPlaceholderImage from "../../assets/ButterFlay.png";
import GrassFlowerBorderImage from "../../assets/GrassFlowerBorder.png";

const UserRolePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedRole, setSelectedRole] = useState("");
  const purpose = location.state?.purpose;

  const roles = [
    { id: "interior", label: "INTERIOR", icon: MdChair },
    { id: "architect", label: "ARCHITECT", icon: MdArchitecture },
  ];

  const handleSave = () => {
    if (!selectedRole) {
      alert("Please select a role.");
      return;
    }
    navigate("/user-details", { state: { purpose, role: selectedRole } });
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

      {/* Decorative elements */}
      <img
        src={ButterflyPlaceholderImage}
        alt="Butterfly"
        className="absolute top-[10%] left-[5%] w-12 h-12 sm:w-16 sm:h-16 opacity-80 transform rotate-[-25deg] z-0"
      />
      <img
        src={ButterflyPlaceholderImage}
        alt="Butterfly"
        className="absolute top-[30%] right-[8%] w-14 h-14 sm:w-20 sm:h-20 opacity-70 transform scale-x-[-1] rotate-[15deg] z-0"
      />
      <img
        src={ButterflyPlaceholderImage}
        alt="Butterfly"
        className="absolute bottom-[25%] left-[15%] w-10 h-10 sm:w-12 sm:h-12 opacity-60 transform rotate-[10deg] z-0"
      />
      <img
        src={ButterflyPlaceholderImage}
        alt="Small Butterfly"
        className="absolute bottom-[45%] right-[48%] w-8 h-8 sm:w-10 sm:h-10 opacity-70 z-0"
      />

      <div className="text-center z-10 flex flex-col items-center w-full max-w-2xl mt-16">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 uppercase"
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            letterSpacing: "0.05em",
          }}
        >
          WHO YOU ARE?
        </h1>
        <p className="text-sm sm:text-base text-gray-300 mb-10">
          This helps customize your experience
        </p>

        <div className="space-y-5 w-full max-w-md mb-10">
          {roles.map((role) => {
            const IconComponent = role.icon;
            const isSelected = selectedRole === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`w-full flex items-center justify-between p-4 sm:p-5 bg-transparent border rounded-lg transition-all duration-200 group ${
                  isSelected
                    ? "border-green-400 ring-2 ring-green-400/50"
                    : "border-gray-600 hover:border-green-400/70"
                }`}
              >
                <div className="flex items-center">
                  <IconComponent
                    className={`text-3xl sm:text-4xl mr-4 ${
                      isSelected
                        ? "text-green-300"
                        : "text-gray-400 group-hover:text-green-300/80"
                    }`}
                  />
                  <span
                    className={`text-lg sm:text-xl font-semibold ${
                      isSelected
                        ? "text-white"
                        : "text-gray-300 group-hover:text-gray-100"
                    }`}
                  >
                    {role.label}
                  </span>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    isSelected ? "border-green-400" : "border-gray-500"
                  }`}
                >
                  {isSelected && (
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <button
          onClick={handleSave}
          className="w-full max-w-md py-3 bg-[#96C84C] hover:bg-[#8AB840] text-black font-bold text-lg rounded-lg transition-all"
        >
          Save
        </button>
      </div>

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

export default UserRolePage;
