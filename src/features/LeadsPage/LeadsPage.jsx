import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiFilter } from "react-icons/fi";
import { IoArrowBackOutline } from "react-icons/io5";
import AddLeadPopup from "../../components/UI/AddLeadPopup";

const LeadsPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddLeadPopup, setShowAddLeadPopup] = useState(false);

  const leads = [
    {
      name: "Alex Thompson",
      phone: "+1 (555) 1234567",
      siteAddress: "New York",
      email: "alex.thompson@example.com",
      city: "New York",
      estimatedBudget: "4567",
      assignedTo: "John Doe",
      lastUpdated: "2025-05-18",
      status: "New"
    },
    {
      name: "Alex Thompson",
      phone: "+1 (555) 1234567",
      siteAddress: "New York",
      email: "alex.thompson@example.com",
      city: "New York",
      estimatedBudget: "4567",
      assignedTo: "John Doe",
      lastUpdated: "2025-05-18",
      status: "On Hold"
    },
    {
      name: "Alex Thompson",
      phone: "+1 (555) 1234567",
      siteAddress: "New York",
      email: "alex.thompson@example.com",
      city: "New York",
      estimatedBudget: "4567",
      assignedTo: "John Doe",
      lastUpdated: "2025-05-18",
      status: "Follow Up"
    },
    {
      name: "Alex Thompson",
      phone: "+1 (555) 1234567",
      siteAddress: "New York",
      email: "alex.thompson@example.com",
      city: "New York",
      estimatedBudget: "4567",
      assignedTo: "John Doe",
      lastUpdated: "2025-05-18",
      status: "Converted"
    },
    {
      name: "Alex Thompson",
      phone: "+1 (555) 1234567",
      siteAddress: "New York",
      email: "alex.thompson@example.com",
      city: "New York",
      estimatedBudget: "4567",
      assignedTo: "John Doe",
      lastUpdated: "2025-05-18",
      status: "Junk"
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'New': 'bg-blue-100 text-blue-800',
      'On Hold': 'bg-gray-100 text-gray-800',
      'Follow Up': 'bg-yellow-100 text-yellow-800',
      'Converted': 'bg-green-100 text-green-800',
      'Junk': 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => navigate(-1)}
                className="mr-4 text-gray-600 hover:text-gray-900"
              >
                <IoArrowBackOutline size={24} />
              </button>
              <h1 className="text-2xl font-semibold text-gray-900">LEAD MANAGEMENT</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  🔔
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">Admin</span>
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center gap-2">
            <FiFilter className="text-gray-500" />
            Filter...
          </button>
          <button 
            onClick={() => setShowAddLeadPopup(true)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
          >
            + Add Lead
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-[#F1F7EC] rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-gray-700">
                  <th className="px-6 py-4">NAME ⇅</th>
                  <th className="px-6 py-4">PHONE ⇅</th>
                  <th className="px-6 py-4">SITE ADDRESS ⇅</th>
                  <th className="px-6 py-4">EMAIL ⇅</th>
                  <th className="px-6 py-4">CITY ⇅</th>
                  <th className="px-6 py-4">ESTIMATED BUDGET ⇅</th>
                  <th className="px-6 py-4">ASSIGNED TO ⇅</th>
                  <th className="px-6 py-4">LAST ⇅</th>
                  <th className="px-6 py-4">STATUS ⇅</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {leads.map((lead, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-6 py-4 whitespace-nowrap">{lead.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{lead.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{lead.siteAddress}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{lead.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{lead.city}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{lead.estimatedBudget}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{lead.assignedTo}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{lead.lastUpdated}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AddLeadPopup 
        isOpen={showAddLeadPopup} 
        onClose={() => setShowAddLeadPopup(false)} 
      />
    </div>
  );
};

export default LeadsPage;