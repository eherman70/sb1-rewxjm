import React from 'react';
import { Leaf } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface SidebarProps {
  menuItems: MenuItem[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ menuItems, activeTab, setActiveTab }: SidebarProps) {
  return (
    <div className="w-64 bg-white border-r border-gray-200">
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          <Leaf className="h-8 w-8 text-green-600" />
          <span className="ml-2 text-xl font-bold text-gray-800">AgriTech</span>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center w-full px-6 py-3 text-sm ${
                  activeTab === item.id
                    ? 'text-green-600 bg-green-50 border-r-4 border-green-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="ml-3">{item.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-200">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-green-800">Need Help?</h3>
            <p className="mt-1 text-sm text-green-600">
              Contact our support team for assistance
            </p>
            <button className="mt-3 w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700">
              Get Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}