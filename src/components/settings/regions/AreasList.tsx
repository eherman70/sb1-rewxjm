import React from 'react';
import { MapPin, Edit, Trash2 } from 'lucide-react';

const areas = [
  {
    id: 1,
    name: 'Springfield Valley',
    region: 'Northern Region',
    code: 'NR-SV',
    farmersCount: 120,
  },
  {
    id: 2,
    name: 'Riverside Farm District',
    region: 'Southern Region',
    code: 'SR-RF',
    farmersCount: 85,
  },
  {
    id: 3,
    name: 'Highland Fields',
    region: 'Eastern Region',
    code: 'ER-HF',
    farmersCount: 150,
  },
];

export default function AreasList() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Registered Areas</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search areas..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        {areas.map((area) => (
          <div
            key={area.id}
            className="p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {area.name}
                  </h3>
                  <p className="text-sm text-gray-500">Region: {area.region}</p>
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
                <span className="font-medium">Code:</span> {area.code}
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Farmers:</span> {area.farmersCount}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}