import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiFilter, FiChevronDown } from "react-icons/fi";
import AddLeadPopup from "../../components/UI/AddLeadPopup";
import DashboardLayout from "../../components/Layout/DashboardLayout";

const initialLeads = [
  {
    name: "Alex Thompson",
    phone: "+1 (555) 1234567",
    siteAddress: "New York",
    email: "alex.thompson@example.com",
    city: "New York",
    estimatedBudget: "4567",
    assignedTo: "John Doe",
    lastUpdated: "2025-05-18",
    status: "New",
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
    status: "On Hold",
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
    status: "Follow Up",
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
    status: "Converted",
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
    status: "Junk",
  },
];

const statusOptions = ["New", "On Hold", "Follow Up", "Converted", "Junk"];

const LeadsPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddLeadPopup, setShowAddLeadPopup] = useState(false);
  const [leads, setLeads] = useState(initialLeads);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleStatusChange = (newStatus, index) => {
    const updatedLeads = [...leads];
    updatedLeads[index].status = newStatus;
    setLeads(updatedLeads);
    setEditingIndex(null);
  };

  const getStatusColor = (status) => {
    const colors = {
      New: "bg-blue-100 text-blue-800",
      "On Hold": "bg-gray-200 text-gray-800",
      "Follow Up": "bg-yellow-100 text-yellow-800",
      Converted: "bg-green-100 text-green-800",
      Junk: "bg-red-100 text-red-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const selectClasses = (status) =>
    `w-full p-1 rounded-md text-xs border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500 ${getStatusColor(
      status
    )}`;

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg">
        {/* Search and Filter Bar */}
        <div className="flex items-center justify-between gap-4 mb-6">
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

        {/* Table */}
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
                    <td className="px-6 py-4 whitespace-nowrap">
                      {lead.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {lead.siteAddress}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {lead.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{lead.city}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {lead.estimatedBudget}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {lead.assignedTo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {lead.lastUpdated}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingIndex === index ? (
                        <select
                          value={lead.status}
                          onChange={(e) =>
                            handleStatusChange(e.target.value, index)
                          }
                          onBlur={() => setEditingIndex(null)}
                          autoFocus
                          className={selectClasses(lead.status)}
                        >
                          {statusOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <span
                          onClick={() => setEditingIndex(index)}
                          className={`cursor-pointer px-3 py-1 rounded-full text-xs font-medium inline-flex items-center ${getStatusColor(
                            lead.status
                          )}`}
                        >
                          {lead.status}
                          <FiChevronDown className="ml-1" />
                        </span>
                      )}
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
    </DashboardLayout>
  );
};

export default LeadsPage;
