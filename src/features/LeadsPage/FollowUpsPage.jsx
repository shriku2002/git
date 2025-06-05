import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/Layout/DashboardLayout";

const FollowUpsPage = () => {
  const navigate = useNavigate();

  const followUps = [
    {
      id: 1,
      title: "Follow-up Scheduled",
      description: "Crinis ascerbitas cunctatio adsidue eos speciosus.",
      date: "May 18, 2025, 9:14 PM",
      status: "Pending"
    },
    {
      id: 2,
      title: "Follow-up Scheduled",
      description: "Vesica cattus valde.",
      date: "May 15, 2025, 7:53 PM",
      status: "Completed"
    },
    {
      id: 3,
      title: "Follow-up Scheduled",
      description: "Vesica cattus valde.",
      date: "May 15, 2025, 7:53 PM",
      status: "Pending"
    }
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold text-gray-800">Follow-Ups</h2>
        </div>
        <button 
          onClick={() => {}} 
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
        >
          Schedule Follow-up
        </button>
      </div>

      <div className="bg-white rounded-lg p-6">
        <div className="flex space-x-4 mb-6 border-b">
          <button className="text-green-600 border-b-2 border-green-600 pb-2">
            All Activity
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            Follow-Ups
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            Sales
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            Notes
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            Call Logs
          </button>
        </div>

        <div className="space-y-6">
          {followUps.map((followUp) => (
            <div key={followUp.id} className="flex">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                  📅
                </div>
                {followUp.id < followUps.length && (
                  <div className="w-0.5 h-full bg-gray-200 my-2"></div>
                )}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      {followUp.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {followUp.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      followUp.status === 'Pending' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {followUp.status}
                    </span>
                    <span className="text-sm text-gray-500">{followUp.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FollowUpsPage;