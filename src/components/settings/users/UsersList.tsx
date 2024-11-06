import React from 'react';
import { User, MapPin, Shield } from 'lucide-react';

const users = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Smith',
    username: 'jsmith',
    region: 'Northern Region',
    area: 'Springfield Valley',
    role: 'Field Technician',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=faces',
  },
  {
    id: 2,
    firstName: 'Sarah',
    lastName: 'Johnson',
    username: 'sjohnson',
    region: 'Eastern Region',
    area: 'Highland Fields',
    role: 'Regional Manager',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=faces',
  },
  {
    id: 3,
    firstName: 'Michael',
    lastName: 'Chen',
    username: 'mchen',
    region: 'Southern Region',
    area: 'Riverside Farm',
    role: 'Administrator',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=faces',
  },
];

export default function UsersList() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">System Users</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {user.firstName} {user.lastName}
                  </h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      <span className="text-sm">{user.username}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Shield className="w-4 h-4 mr-1" />
                      <span className="text-sm">{user.role}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-right">
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{user.region} - {user.area}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}