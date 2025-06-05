import { useNavigate } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiUser, FiCalendar } from "react-icons/fi";
import DashboardLayout from "../../components/Layout/DashboardLayout";

const LeadDetailsPage = () => {
  const navigate = useNavigate();

  const clientInfo = {
    name: "Joshua Jest DVM",
    phone: "900-224-5269 x057",
    email: "Henry_Shanahan43@yahoo.com",
    location: "East Cooper, Alabama",
    assignedTo: "Robert Johnson",
  };

  const leadDetails = {
    status: "Follow-Up",
    qualification: "High School",
    interest: "Web Development",
    source: "Social Media",
    budget: "$5,000 - $10,000",
    leadScore: "85/100",
  };

  const timeline = [
    {
      type: "follow-up",
      title: "Follow-up Scheduled",
      description: "Crinis ascerbitas cunctatio adsidue eos speciosus.",
      date: "May 18, 2025, 9:14 PM",
    },
    {
      type: "call",
      title: "Call Logged",
      description: "Call duration: 8 mins 40 secs",
      date: "May 18, 2025, 2:37 PM",
    },
    {
      type: "follow-up",
      title: "Follow-up Scheduled",
      description: "Vesica cattus valde.",
      date: "May 15, 2025, 7:53 PM",
    },
    {
      type: "call",
      title: "Call Logged",
      description: "Degusto aut abundans textilis.",
      date: "May 14, 2025, 8:14 AM",
    },
    {
      type: "call",
      title: "Call Logged",
      description: "Via coruscus vicinus adfectus adipiscor tardus delicate clibanus vilitas.",
      date: "May 8, 2025, 5:24 PM",
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold text-gray-800">Lead Details</h2>
        </div>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            📄 Document
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            ↗ Convert to project
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Client Information Card */}
        <div className="bg-[#F1F7EC] rounded-lg p-6">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Client Information</h3>
            <button className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">Edit</span>
              ✏️
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <FiUser className="mt-1 mr-3 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{clientInfo.name}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FiPhone className="mt-1 mr-3 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Primary Phone</p>
                <p className="font-medium">{clientInfo.phone}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FiMail className="mt-1 mr-3 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Primary Email</p>
                <p className="font-medium">{clientInfo.email}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FiMapPin className="mt-1 mr-3 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{clientInfo.location}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FiUser className="mt-1 mr-3 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Assigned To</p>
                <p className="font-medium">{clientInfo.assignedTo}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Details Card */}
        <div className="bg-[#F1F7EC] rounded-lg p-6">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Lead Details</h3>
            <button className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">Edit</span>
              ✏️
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p className="font-medium">{leadDetails.status}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Qualification</p>
              <p className="font-medium">{leadDetails.qualification}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Interest Field</p>
              <p className="font-medium">{leadDetails.interest}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Source</p>
              <p className="font-medium">{leadDetails.source}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Budget</p>
              <p className="font-medium">{leadDetails.budget}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Lead Score</p>
              <p className="font-medium">{leadDetails.leadScore}</p>
            </div>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Activity Timeline</h3>
          
          <div className="flex space-x-4 mb-6">
            <button className="text-green-600 border-b-2 border-green-600 pb-2">
              All Activity
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              Follow-Ups
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              Call Logs
            </button>
          </div>

          <div className="space-y-6">
            {timeline.map((activity, index) => (
              <div key={index} className="flex">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.type === 'follow-up' ? 'bg-yellow-100' : 'bg-green-100'
                  }`}>
                    {activity.type === 'follow-up' ? '📅' : '📞'}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 my-2"></div>
                  )}
                </div>
                <div className="ml-4">
                  <div className="flex justify-between">
                    <h4 className="text-sm font-medium text-gray-900">
                      {activity.title}
                    </h4>
                    <span className="text-sm text-gray-500">{activity.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LeadDetailsPage;