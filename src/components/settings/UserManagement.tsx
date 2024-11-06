import React, { useState } from 'react';
import UsersList from './users/UsersList';
import UserForm from './users/UserForm';
import RolesList from './users/RolesList';
import RoleForm from './users/RoleForm';

export default function UserManagement() {
  const [activeView, setActiveView] = useState('users');

  const handleUserSubmit = (userData) => {
    console.log('New User Data:', userData);
    // Add logic to save user data to a database or state
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">User Management</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveView('users')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeView === 'users'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Users
          </button>
          <button
            onClick={() => setActiveView('roles')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeView === 'roles'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Roles
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {activeView === 'users' ? <UsersList /> : <RolesList />}
        </div>
        <div>
          {activeView === 'users' ? <UserForm onSubmit={handleUserSubmit} /> : <RoleForm />}
        </div>
      </div>
    </div>
  );
}
