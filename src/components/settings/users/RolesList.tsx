import React from 'react';
import { Shield, Users, Settings, BarChart, Warehouse, MapPin } from 'lucide-react';

const roles = [
  {
    id: 1,
    name: 'Administrator',
    code: 'ADMIN',
    description: 'Full system access and management capabilities',
    permissions: ['User Management', 'System Settings', 'All Operations'],
    icon: Settings,
    color: 'red',
  },
  {
    id: 2,
    name: 'Regional Manager',
    code: 'REG_MGR',
    description: 'Manages regional operations and field technicians',
    permissions: ['Regional Reports', 'Field Staff Management', 'Barn Management'],
    icon: MapPin,
    color: 'blue',
  },
  {
    id: 3,
    name: 'Field Technician',
    code: 'FIELD_TECH',
    description: 'Handles farmer registration and barn inspections',
    permissions: ['Farmer Registration', 'Barn Inspection', 'Basic Reports'],
    icon: Users,
    color: 'green',
  },
  {
    id: 4,
    name: 'Warehouse Manager',
    code: 'WARE_MGR',
    description: 'Manages warehouse operations and inventory',
    permissions: ['Inventory Management', 'Storage Reports', 'Barn Records'],
    icon: Warehouse,
    color: 'purple',
  },
  {
    id: 5,
    name: 'Reports Analyst',
    code: 'ANALYST',
    description: 'Analyzes and generates system reports',
    permissions: ['Report Generation', 'Data Analysis', 'Statistics'],
    icon: BarChart,
    color: 'yellow',
  },
];

export default function RolesList() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">System Roles</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search roles..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        {roles.map((role) => {
          const Icon = role.icon;
          return (
            <div
              key={role.id}
              className="p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 bg-${role.color}-50 rounded-lg`}>
                    <Icon className={`w-6 h-6 text-${role.color}-600`} />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-medium text-gray-800">
                        {role.name}
                      </h3>
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">
                        {role.code}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{role.description}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Permissions:</h4>
                <div className="flex flex-wrap gap-2">
                  {role.permissions.map((permission, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-gray-50 text-gray-600 rounded-full"
                    >
                      {permission}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}