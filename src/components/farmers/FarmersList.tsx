import React from 'react';
import { MoreVertical, MapPin, Phone, User, Warehouse } from 'lucide-react';

const farmers = [
  {
    id: 1,
    name: 'Mpeligwakisa Lebbi',
    location: 'Tabora - Mabama',
    phone: '+255 717 000 000',
    fieldTechnician: 'Wema Lori',
    landSize: '2.5',
    numberOfBarns: '10',
    estimatedProduction: '2,200',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=faces',
  },
  {
    id: 2,
    name: 'Graciana Tairo',
    location: 'Urambo - Kaliua',
    phone: '+255 717 000 001',
    fieldTechnician: 'Salehe Amani',
    landSize: '1.5',
    numberOfBarns: '6',
    estimatedProduction: '1,320',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=faces',
  },
  {
    id: 3,
    name: 'Nani Edian',
    location: 'Chunya - Lupa',
    phone: '+255 717 000 002',
    fieldTechnician: 'Prince Mafuru',
    landSize: '3.0',
    numberOfBarns: '12',
    estimatedProduction: '2,640',
    status: 'Pending',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=faces',
  },
];

export default function FarmersList() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Registered Farmers</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search farmers..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        {farmers.map((farmer) => (
          <div
            key={farmer.id}
            className="p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={farmer.image}
                  alt={farmer.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {farmer.name}
                  </h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{farmer.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Phone className="w-4 h-4 mr-1" />
                      <span className="text-sm">{farmer.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 text-sm rounded-full ${
                  farmer.status === 'Active'
                    ? 'bg-green-50 text-green-600'
                    : 'bg-yellow-50 text-yellow-600'
                }`}>
                  {farmer.status}
                </span>
                <button className="p-1 hover:bg-gray-100 rounded-full">
                  <MoreVertical className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="text-sm text-gray-500">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span className="font-medium">Field Technician:</span>
                </div>
                <span className="ml-5">{farmer.fieldTechnician}</span>
              </div>
              <div className="text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="font-medium">Land Size:</span>
                </div>
                <span className="ml-5">{farmer.landSize} hectares</span>
              </div>
              <div className="text-sm text-gray-500">
                <div className="flex items-center">
                  <Warehouse className="w-4 h-4 mr-1" />
                  <span className="font-medium">Production:</span>
                </div>
                <span className="ml-5">{farmer.estimatedProduction} kg ({farmer.numberOfBarns} barns)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}