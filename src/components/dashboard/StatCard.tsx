import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  increasing: boolean;
  icon: LucideIcon;
  color: string;
}

export default function StatCard({ title, value, change, increasing, icon: Icon, color }: StatCardProps) {
  const bgColorClass = `bg-${color}-50`;
  const textColorClass = `text-${color}-600`;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className={`p-2 rounded-lg ${bgColorClass} ${textColorClass}`}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex items-center space-x-1">
          <span className={`text-sm ${increasing ? 'text-green-600' : 'text-red-600'}`}>
            {change}
          </span>
          {increasing ? (
            <ArrowUpRight className="h-4 w-4 text-green-600" />
          ) : (
            <ArrowDownRight className="h-4 w-4 text-red-600" />
          )}
        </div>
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-gray-800">{value}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
  );
}