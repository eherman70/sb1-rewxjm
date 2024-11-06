import React from 'react';
import { Warehouse, MapPin, User } from 'lucide-react';

const barnSummary = {
  totalBarns: 2847,
  totalVolume: '12,450,000',
  regions: [
    {
      name: 'Northern Region',
      code: 'NR',
      totalBarns: 985,
      totalVolume: '4,320,000',
      areas: [
        {
          name: 'Springfield Valley',
          code: 'NR-SV',
          totalBarns: 485,
          totalVolume: '2,180,000',
          farmers: [
            {
              name: 'John Smith',
              barns: 12,
              volume: '52,800',
            },
            {
              name: 'Sarah Johnson',
              barns: 8,
              volume: '35,200',
            },
          ],
        },
        {
          name: 'Highland Fields',
          code: 'NR-HF',
          totalBarns: 500,
          totalVolume: '2,140,000',
          farmers: [
            {
              name: 'Michael Chen',
              barns: 15,
              volume: '66,000',
            },
          ],
        },
      ],
    },
  ],
};

export default function BarnSummary() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <Warehouse className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-800">Total Barns</h3>
            </div>
            <p className="mt-2 text-2xl font-bold text-blue-900">{barnSummary.totalBarns}</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold text-green-800">Total Volume</h3>
            </div>
            <p className="mt-2 text-2xl font-bold text-green-900">{barnSummary.totalVolume} kg</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-purple-800">Avg per Farmer</h3>
            </div>
            <p className="mt-2 text-2xl font-bold text-purple-900">4.2 barns</p>
          </div>
        </div>
      </div>

      {barnSummary.regions.map((region) => (
        <div key={region.code} className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-800">
                  {region.name} ({region.code})
                </h2>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Total Barns: {region.totalBarns}</p>
                <p className="text-sm font-medium text-gray-700">Volume: {region.totalVolume} kg</p>
              </div>
            </div>
          </div>

          {region.areas.map((area) => (
            <div key={area.code} className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {area.name} ({area.code})
                  </h3>
                  <p className="text-sm text-gray-500">
                    {area.totalBarns} barns | {area.totalVolume} kg
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {area.farmers.map((farmer, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-gray-500" />
                      <span className="font-medium text-gray-700">{farmer.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">{farmer.barns} barns</p>
                      <p className="text-sm font-medium text-gray-700">{farmer.volume} kg</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}