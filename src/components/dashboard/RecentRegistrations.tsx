import React from 'react';

export default function RecentRegistrations() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Farmer Registrations
      </h2>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <img
                src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=faces`}
                alt="Farmer"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-800">John Smith</p>
                <p className="text-sm text-gray-500">Registered today</p>
              </div>
            </div>
            <span className="px-3 py-1 text-sm text-green-600 bg-green-50 rounded-full">
              New
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}