import {
  FiHome,
  FiTarget,
  FiBriefcase,
  FiFileText,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiBell,
  FiChevronLeft,
} from "react-icons/fi";
import { FaMoneyBill, FaStore, FaRegNewspaper } from "react-icons/fa";

const NavLink = ({ icon, label, isActive }) => (
  <a
    href="#"
    className={`flex items-center px-4 py-3 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "bg-green-700 text-white rounded-lg"
        : "text-gray-300 hover:bg-green-800 hover:text-white rounded-lg"
    }`}
  >
    {icon}
    <span className="ml-3">{label}</span>
  </a>
);

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col  bg-[#0A2A0A]">
        <div className="flex items-center justify-center h-20 border-b border-green-900">
          <h1 className="text-2xl font-bold text-white">S</h1>
        </div>

        {/* FIX: Encapsulated nav links into two groups separated by a flex-grow div */}
        <div className="flex flex-col flex-grow p-4">
          <div className="space-y-2">
            <NavLink icon={<FiHome size={20} />} label="Dashboard" />
            <NavLink icon={<FiTarget size={20} />} label="Leads" isActive />
            <NavLink icon={<FiBriefcase size={20} />} label="Projects" />
            <NavLink icon={<FaMoneyBill size={20} />} label="Account" />
            <NavLink icon={<FiFileText size={20} />} label="Document" />
            <NavLink icon={<FaStore size={18} />} label="Vendors" />
            <NavLink icon={<FiUsers size={20} />} label="Staff" />
          </div>

          <div className="flex-grow" />

          <div className="space-y-2">
            <NavLink icon={<FaRegNewspaper size={18} />} label="Newsletter" />
            <NavLink icon={<FiSettings size={20} />} label="Settings" />
            <NavLink icon={<FiLogOut size={20} />} label="Logout" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="bg-white shadow z-10">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                  <FiChevronLeft size={24} />
                </button>
                <h1 className="ml-3 text-xl font-semibold text-gray-800">
                  LEAD MANAGEMENT
                </h1>
              </div>

              <div className="flex items-center">
                <button className="relative p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
                  <FiBell size={20} />
                </button>
                <div className="flex items-center ml-4">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                    alt="User"
                  />
                  <div className="ml-2 text-sm text-left">
                    <p className="font-semibold text-gray-800">
                      Sylvia Johnston
                    </p>
                    <p className="text-gray-500">Admin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="p-6 bg-white">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
