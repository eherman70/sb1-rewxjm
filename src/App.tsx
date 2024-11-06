import { useState } from 'react'
import { LayoutDashboard, Users, Sprout, Warehouse, Calculator, DollarSign, MapPin, UserCog, MoreHorizontal } from 'lucide-react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import FarmerRegistry from './components/farmers/FarmerRegistry'
import RegionAreaManagement from './components/settings/RegionAreaManagement'
import UserManagement from './components/settings/UserManagement'
import LoanManagement from './components/settings/loan/LoanManagement'
import NavMenu from './components/NavMenu'

const menuItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Farmer Registry', href: '/farmers', icon: Users },
  { label: 'Loan Management', href: '/loans', icon: DollarSign },
  { label: 'Crop Estimates', href: '/crops', icon: Calculator },
  { label: 'Warehouse', href: '/warehouse', icon: Warehouse },
  { label: 'Production', href: '/production', icon: Sprout },
  { label: 'Regions & Areas', href: '/regions', icon: MapPin },
  { label: 'User Management', href: '/users', icon: UserCog },
  {
    label: 'Miscellaneous',
    href: '/miscellaneous',
    icon: MoreHorizontal,
    subItems: [
      { label: 'Countries', href: '/countries' },
      { label: 'Companies', href: '/companies' },
      { label: 'Seasons', href: '/seasons' },
      { label: 'Buyers', href: '/buyers' },
      { label: 'Locations', href: '/locations' },
      { label: 'Market Centers', href: '/market-centers' },
      { label: 'Sectors', href: '/sectors' },
      { label: 'Clubs', href: '/clubs' },
      { label: 'Societies', href: '/societies' },
      { label: 'Growers', href: '/growers' },
      { label: 'Crop Grades', href: '/crop-grades' },
    ],
  },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard')
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label]
    )
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'farmers':
        return <FarmerRegistry />
      case 'loans':
        return <LoanManagement />
      case 'regions':
        return <RegionAreaManagement />
      case 'users':
        return <UserManagement />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <NavMenu
        items={menuItems}
        activeItem={activeTab}
        expandedItems={expandedItems}
        onItemClick={(item) => {
          if (item.subItems) {
            toggleExpanded(item.label)
          } else {
            setActiveTab(item.label.toLowerCase().replace(' ', '-'))
          }
        }}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-800 p-4">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}