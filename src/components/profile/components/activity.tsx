import React from 'react';

interface RecentActivityItem {
  type: string;
  title: string;
  timestamp: string;
}

const ActivityFeed: React.FC = () => {
  const recentActivity: RecentActivityItem[] = [
    {
      type: 'Stud',
      title: 'CSE',
      timestamp: '2023-12-30T14:30:23Z'
    },
  ];

  return (
    <div className="w-full rounded-md flex flex-col md:flex-row justify-center gap-4 m-auto border-[0px] p-0">
      <div className="mx-auto my-2">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Recent Activity Feed
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="rounded-lg shadow-md p-4 bg-slate-900">
              <p className="text-gray-600 mb-2">
                {activity.type === 'Stud' && (
                  <span className="text-blue-500 font-bold">Stud:</span>
                )}
                <span className="ml-2 text-white">{activity.title}</span>
              </p>
              <p className="text-gray-500 text-sm">
                {new Date(activity.timestamp).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
