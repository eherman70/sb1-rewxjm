import React from 'react';
import { Users, DollarSign, Warehouse, TrendingUp } from 'lucide-react';
import StatCard from './dashboard/StatCard';
import RecentRegistrations from './dashboard/RecentRegistrations';
import RecentLoans from './dashboard/RecentLoans';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Farmers',
      value: '2,847',
      change: '+12.5%',
      increasing: true,
      icon: Users,
      color: 'blue',
    },
    {
      title: 'Active Loans',
      value: '$847,392',
      change: '+8.2%',
      increasing: true,
      icon: DollarSign,
      color: 'green',
    },
    {
      title: 'Warehouse Capacity',
      value: '76%',
      change: '-2.4%',
      increasing: false,
      icon: Warehouse,
      color: 'purple',
    },
    {
      title: 'Crop Yield Estimate',
      value: '1.2M tons',
      change: '+15.3%',
      increasing: true,
      icon: TrendingUp,
      color: 'yellow',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentRegistrations />
        <RecentLoans />
      </div>
    </div>
  );
}