import React from 'react';
import { MapPin, Edit, Trash2 } from 'lucide-react';

const regions = [
  {
    id: 1,
    name: 'Northern Region',
    code: 'NR',
    areasCount: 12,
    farmersCount: 450,
  },
  {
    id: 2,
    name: 'Southern Region',
    code: 'SR',
    areasCount: 8,
    farmersCount: 320,
  },
  {
    id: 3,
    name: 'Eastern Region',
    code: 'ER',
    areasCount: 15,
    farmersCount: 580,
  },
];

export default function RegionsList() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Registered Regions</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search regions..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        {regions.map((region) => (
          <div
            key={region.id}
            className="p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-green-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {region.name}
                  </h3>
                  <p className="text-sm text-gray-500">Code: {region.code}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="text-sm text-gray-500">
                <span className="font-medium">Areas:</span> {region.areasCount}
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Farmers:</span> {region.farmersCount}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}