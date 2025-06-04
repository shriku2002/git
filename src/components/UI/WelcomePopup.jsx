import React from "react";
import { IoMdClose } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import Button from "./Button";

// Placeholder for the top-left leaf pattern
const LeadManagementPattern = () => (
  <div className="absolute top-0 left-0 w-48 h-48 opacity-80 pointer-events-none">
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current text-green-100"
    >
      <path
        d="M152.8,73.2c-2.1-7.8-11.6-11.8-19.1-13.3c-12.5-2.5-24.3-0.6-36.7,0.2c-7.6,0.5-15.2,1.9-22.8,3.2c-10.1,1.7-20.2,3.7-29.6,7.2c-5.2,1.9-9.9,4.7-13.8,8.3c-6.9,6.4-11.2,14.7-12.8,23.9c-1.3,7.6-0.5,15.3,0.9,22.9c1.3,7.1,3.3,14.1,6.2,20.6c2.3,5.2,5.5,9.9,9.4,13.9c8.9,9,20.7,14.6,33.1,16.5c7.1,1.1,14.3,1.1,21.4,0.7c10.7-0.6,21.2-2.4,31.3-5.7c6.9-2.2,13.6-5.2,19.6-9.2c6.7-4.5,12.1-10.4,15.8-17.2c4.2-7.6,6.2-16.1,6.5-24.8C161.1,102.7,159.1,86.9,152.8,73.2z"
        transform="rotate(15) scale(1.2) translate(-10, 5)"
      />
      <path
        d="M120.3,25.8C115.9,20,107.2,18,100,20.5C85.7,25.4,73.3,38.8,65.9,52.1C60.7,61.2,57.5,71.6,56.2,82.3C54.7,94.2,55.6,106.3,59.3,117.5C62.9,128.2,69.7,137,79.4,142.3C87.7,146.8,97.7,147.3,107.1,144.2C116.8,141,125.1,133.8,130.7,124.9C137.2,114.6,140.1,102.2,138.6,90.1C137.2,78.7,131.6,68.1,120.3,25.8z"
        transform="rotate(-25) scale(0.8) translate(70, -5)"
        className="fill-current text-green-200"
      />
    </svg>
  </div>
);

const ProjectManagementPattern = () => (
  <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20 pointer-events-none overflow-hidden">
    <svg
      className="absolute bottom-0 left-5 w-20 h-20 text-green-900"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50,5A20,20,0,0,0,30,25C30,45,50,95,50,95S70,45,70,25A20,20,0,0,0,50,5Z"
        fill="currentColor"
      />
    </svg>
    <svg
      className="absolute bottom-[-10px] left-1/4 w-24 h-24 text-green-800"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50,5A20,20,0,0,0,30,25C30,45,50,95,50,95S70,45,70,25A20,20,0,0,0,50,5Z"
        fill="currentColor"
        transform="rotate(30 50 50) scale(0.8)"
      />
    </svg>
    <svg
      className="absolute bottom-0 right-5 w-28 h-28 text-green-900"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50,5A20,20,0,0,0,30,25C30,45,50,95,50,95S70,45,70,25A20,20,0,0,0,50,5Z"
        fill="currentColor"
        transform="rotate(-20 50 50) scale(1.1)"
      />
    </svg>
  </div>
);

const WelcomePopup = ({ isOpen, onClose, onAddFirstLead }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-transparent w-full max-w-4xl rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-gray-500 hover:text-gray-700 bg-white/50 hover:bg-white/80 rounded-full p-1.5 transition-colors"
          aria-label="Close popup"
        >
          <IoMdClose size={20} />
        </button>
        <div className="relative w-full md:w-1/2 bg-white p-10 flex flex-col justify-center items-center text-center">
          <LeadManagementPattern />
          <div className="relative z-10">
            <h2
              className="text-3xl font-bold text-gray-800 mb-3 uppercase"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                letterSpacing: "0.05em",
              }}
            >
              WELCOME TO LEAD MANAGEMENT
            </h2>
            <p className="text-base text-gray-600 mb-8 max-w-xs mx-auto">
              Start by adding your first lead. Track potential clients, schedule
              follow-ups, and convert leads to projects.
            </p>
            <Button
              onClick={onAddFirstLead}
              variant="primary"
              fullWidth={false}
            >
              <FiPlus className="mr-2" /> Add your first Lead
            </Button>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 bg-gradient-to-br from-[#5C9441] to-[#4A7A35] text-white p-10 flex flex-col justify-center items-center text-center">
          <ProjectManagementPattern />
          <div className="relative z-10">
            <h2
              className="text-3xl font-bold mb-3 uppercase"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                letterSpacing: "0.05em",
              }}
            >
              WELCOME TO PROJECT MANAGEMENT
            </h2>
            <p className="text-base opacity-90 mb-8 max-w-xs mx-auto">
              Start by adding your first Project. Track potential clients,
              schedule follow-ups, and convert leads to projects.
            </p>
            <Button
              onClick={() => {
                console.log("Add first Project clicked");
                onClose();
              }}
              variant="primary"
              fullWidth={false}
            >
              <FiPlus className="mr-2" /> Add your first Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;