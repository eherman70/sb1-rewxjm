import React, { useState, useEffect } from 'react';
import { Save, Calculator } from 'lucide-react';

interface FarmerFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  region: string;
  area: string;
  fieldTechnician: string;
  landSize: string;
  numberOfBarns: string;
  estimatedProduction: string;
}

const BARNS_PER_HECTARE = 4;
const KG_PER_HECTARE = 880;

export default function FarmerRegistrationForm() {
  const [formData, setFormData] = useState<FarmerFormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    region: '',
    area: '',
    fieldTechnician: '',
    landSize: '',
    numberOfBarns: '',
    estimatedProduction: '',
  });

  // Calculate estimated production when land size changes
  useEffect(() => {
    if (formData.landSize) {
      const landSizeNum = parseFloat(formData.landSize);
      const estimatedBarns = Math.round(landSizeNum * BARNS_PER_HECTARE);
      const estimatedKg = Math.round(landSizeNum * KG_PER_HECTARE);
      
      setFormData(prev => ({
        ...prev,
        numberOfBarns: estimatedBarns.toString(),
        estimatedProduction: estimatedKg.toString()
      }));
    }
  }, [formData.landSize]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const regions = [
    'Northern Region',
    'Southern Region',
    'Eastern Region',
    'Western Region',
    'Central Region'
  ];

  const technicians = [
    'John Smith',
    'Maria Rodriguez',
    'David Chen',
    'Sarah Johnson',
    'Michael Brown'
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Register New Farmer</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Personal Information Section */}
        <div className="p-4 bg-gray-50 rounded-lg space-y-4">
          <h3 className="text-md font-medium text-gray-700">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
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
                Last Name
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="p-4 bg-gray-50 rounded-lg space-y-4">
          <h3 className="text-md font-medium text-gray-700">Location Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Region
              </label>
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                required
              >
                <option value="">Select Region</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Area
              </label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="e.g., North Valley"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                required
              />
            </div>
          </div>
        </div>

        {/* Farm Details Section */}
        <div className="p-4 bg-gray-50 rounded-lg space-y-4">
          <h3 className="text-md font-medium text-gray-700">Farm Details</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Field Technician
            </label>
            <select
              name="fieldTechnician"
              value={formData.fieldTechnician}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              required
            >
              <option value="">Select Field Technician</option>
              {technicians.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Land Size (hectares)
              </label>
              <input
                type="number"
                name="landSize"
                value={formData.landSize}
                onChange={handleChange}
                min="0"
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Barns
              </label>
              <input
                type="number"
                name="numberOfBarns"
                value={formData.numberOfBarns}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <Calculator className="w-5 h-5 text-blue-600" />
              <h4 className="text-sm font-medium text-blue-800">Estimated Production</h4>
            </div>
            <p className="mt-2 text-sm text-blue-600">
              Based on {formData.landSize || '0'} hectares:
            </p>
            <p className="mt-1 text-lg font-semibold text-blue-800">
              {formData.estimatedProduction || '0'} kg
            </p>
            <p className="mt-1 text-xs text-blue-600">
              Calculation: {BARNS_PER_HECTARE} barns per hectare, {KG_PER_HECTARE} kg per hectare
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Save className="w-4 h-4 mr-2" />
          Register Farmer
        </button>
      </form>
    </div>
  );
}