import React, { useState } from 'react';
import { Save, Shield } from 'lucide-react';

interface UserFormData {
  firstName: string;
  middleName: string;
  lastName: string;
  username: string;
  password: string;
  region: string;
  area: string;
  role: string;
}

const roles = [
  { code: 'ADMIN', name: 'Administrator' },
  { code: 'REG_MGR', name: 'Regional Manager' },
  { code: 'FIELD_TECH', name: 'Field Technician' },
  { code: 'WARE_MGR', name: 'Warehouse Manager' },
  { code: 'ANALYST', name: 'Reports Analyst' },
];

const regions = [
  'Northern Region',
  'Southern Region',
  'Eastern Region',
  'Western Region',
  'Central Region',
];

const areasByRegion = {
  'Northern Region': ['Springfield Valley', 'Highland Fields'],
  'Southern Region': ['Riverside Farm', 'Coastal Plains'],
  'Eastern Region': ['Mountain View', 'Eastern Plains'],
  'Western Region': ['Western Valley', 'Sunset Fields'],
  'Central Region': ['Central Plains', 'Midland Valley'],
};

function UserForm({ onSubmit }) {
  const [formData, setFormData] = useState<UserFormData>({
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    password: '',
    region: '',
    area: '',
    role: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Reset area when region changes
      ...(name === 'region' && { area: '' }),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.username || !formData.password || !formData.role) {
      alert('Please fill in all required fields.');
      return;
    }

    onSubmit(formData);
    setFormData({
      firstName: '',
      middleName: '',
      lastName: '',
      username: '',
      password: '',
      region: '',
      area: '',
      role: '',
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Register New User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Personal Information */}
        <div className="p-4 bg-gray-50 rounded-lg space-y-4">
          <h3 className="text-md font-medium text-gray-700">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Middle Name (optional)
            </label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Account Information */}
        <div className="p-4 bg-gray-50 rounded-lg space-y-4">
          <h3 className="text-md font-medium text-gray-700">Account Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username *
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role Assignment *
            </label>
            <div className="relative">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 appearance-none"
                required
              >
                <option value="">Select Role</option>
                {roles.map((role) => (
                  <option key={role.code} value={role.code}>
                    {role.name}
                  </option>
                ))}
              </select>
              <Shield className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Location Assignment */}
        <div className="p-4 bg-gray-50 rounded-lg space-y-4">
          <h3 className="text-md font-medium text-gray-700">Location Assignment</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Region *
              </label>
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                required
              >
                <option value="">Select Region</option>
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Area *
              </label>
              <select
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                required
                disabled={!formData.region}
              >
                <option value="">Select Area</option>
                {formData.region &&
                  areasByRegion[formData.region].map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Save className="w-4 h-4 mr-2" />
          Register User
        </button>
      </form>
    </div>
  );
}

export default UserForm;