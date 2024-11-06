import React, { useState } from 'react';
import RegionsList from './regions/RegionsList';
import RegionForm from './regions/RegionForm';
import AreasList from './regions/AreasList';
import AreaForm from './regions/AreaForm';

export default function RegionAreaManagement() {
  const [activeView, setActiveView] = useState<'regions' | 'areas'>('regions');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Region & Area Management</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveView('regions')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeView === 'regions'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Regions
          </button>
          <button
            onClick={() => setActiveView('areas')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeView === 'areas'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Areas
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {activeView === 'regions' ? <RegionsList /> : <AreasList />}
        </div>
        <div>
          {activeView === 'regions' ? <RegionForm /> : <AreaForm />}
        </div>
      </div>
    </div>
  );
}