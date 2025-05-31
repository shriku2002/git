import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import {
  HiOutlineLightBulb,
  HiOutlineDocumentText,
  HiOutlinePresentationChartLine,
  HiOutlineClipboardList,
  HiOutlineUserGroup,
  HiOutlineHome,
} from "react-icons/hi";
import WelcomePopup from "../../components/UI/WelcomePopup";

const ProjectWelcomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("All");

  // The popup's visibility is controlled by this state
  const [showWelcomePopup, setShowWelcomePopup] = useState(
    location.state?.showWelcomePopupOnLoad || false
  );

  // Clear navigation state after checking for popup visibility
  useEffect(() => {
    if (location.state?.showWelcomePopupOnLoad) {
      navigate(".", {
        state: { ...location.state, showWelcomePopupOnLoad: false },
        replace: true,
      });
    }
  }, [location, navigate]);

  const tabs = [
    { name: "All", icon: <HiOutlineHome className="mr-2" /> },
    { name: "Basic Details", icon: <HiOutlineUserGroup className="mr-2" /> },
    { name: "Quotation", icon: <HiOutlineClipboardList className="mr-2" /> },
    { name: "Documentation", icon: <HiOutlineDocumentText className="mr-2" /> },
    {
      name: "Overview",
      icon: <HiOutlinePresentationChartLine className="mr-2" />,
    },
    { name: "Inspiration", icon: <HiOutlineLightBulb className="mr-2" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="mb-6 flex items-center">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-600 hover:text-gray-800 mr-4 p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Go back"
        >
          <IoArrowBackOutline size={24} />
        </button>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">PROJECTS</h1>
      </div>

      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-1 sm:space-x-2 border-b border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center whitespace-nowrap py-3 px-3 sm:px-4 text-sm sm:text-base font-medium transition-colors
                ${
                  activeTab === tab.name
                    ? "border-b-2 border-[#7DBE63] text-[#5E9C42]"
                    : "text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-400"
                }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center pt-10">
        <h2 className="text-xl text-gray-700">Project Management Dashboard</h2>
        <p className="text-gray-500 mt-2">
          Select a tab to view details or manage your projects.
        </p>
      </div>

      <WelcomePopup
        isOpen={showWelcomePopup}
        onClose={() => setShowWelcomePopup(false)}
      />
    </div>
  );
};

export default ProjectWelcomePage;