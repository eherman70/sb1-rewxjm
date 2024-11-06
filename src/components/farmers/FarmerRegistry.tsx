import React, { useState } from 'react';
import FarmerRegistrationForm from './FarmerRegistrationForm';
import FarmersList from './FarmersList';
import BarnSummary from './BarnSummary';

export default function FarmerRegistry() {
  const [activeView, setActiveView] = useState('list');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Farmer Registry</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveView('list')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeView === 'list'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Farmers List
          </button>
          <button
            onClick={() => setActiveView('barns')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeView === 'barns'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Barn Summary
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            + New Registration
          </button>
        </div>
      </div>
      
      {activeView === 'list' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <FarmersList />
          </div>
          <div>
            <FarmerRegistrationForm />
          </div>
        </div>
      ) : (
        <BarnSummary />
      )}
    </div>
  );
}