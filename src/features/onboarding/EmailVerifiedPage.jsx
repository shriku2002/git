import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Corrected asset paths
import ButterflyPlaceholderImage from "../../assets/ButterFlay.png";
import GrassFlowerBorderImage from "../../assets/GrassFlowerBorder.png";

const EmailVerifiedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the next step after 4 seconds
    const timer = setTimeout(() => {
      navigate("/user-purpose");
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigate]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full bg-[#0A2A0A] text-white overflow-hidden">
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

      <div
        className="text-center z-10 p-4"
        style={{
          fontFamily: "'Cinzel Decorative', ",
        }}
      >
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            letterSpacing: "0.05em",
          }}
        >
          GREAT JOB{" "}
          <span role="img" aria-label="Party popper">
            🎉
          </span>
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-gray-200">
          YOUR EMAIL IS VERIFIED
        </p>
        <p className="text-base sm:text-lg text-gray-300">
          Welcome to our family. Now you are one of us.
        </p>
      </div>

      {/* Decorative Border */}
      <div className="absolute -bottom-7 left-0 w-full h-[12%] sm:h-[15%] bg-repeat-x z-0 flex items-end justify-center pb-0 sm:pb-0">
        <img src={GrassFlowerBorderImage} alt="Grass and flower border" />
      </div>
    </div>
  );
};

export default EmailVerifiedPage;
