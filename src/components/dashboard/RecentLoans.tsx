import React from 'react';

export default function RecentLoans() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Loan Applications
      </h2>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div>
              <p className="font-medium text-gray-800">Farm Equipment Loan</p>
              <p className="text-sm text-gray-500">$25,000</p>
            </div>
            <span className="px-3 py-1 text-sm text-yellow-600 bg-yellow-50 rounded-full">
              Pending
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}