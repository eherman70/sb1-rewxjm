import { LucideIcon } from 'lucide-react'; // Or whatever icon library you use

interface NavMenuItem {
  label: string;
  href: string;
  icon: LucideIcon; // Ensure this matches the imported icon type
  subItems?: { label: string; href: string }[];
}


interface NavMenuProps {
  items: NavMenuItem[];
  activeItem: string;
  expandedItems: string[];
  onItemClick: (item: NavMenuItem) => void;
}

export default function NavMenu({ items, activeItem, expandedItems, onItemClick }: NavMenuProps) {
  const handleItemClick = (item: NavMenuItem) => {
    onItemClick(item);
  };

  return (
    <nav className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <ul className="space-y-2 p-4">
        {items.map((item) => (
          <li key={item.label}>
            <button
              onClick={() => handleItemClick(item)}
              className={`w-full flex items-center p-2 rounded-lg ${
                item.label === activeItem ? 'bg-gray-200 dark:bg-gray-900' : ''
              } text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              {item.icon && <item.icon className="w-5 h-5 mr-2" />}
              <span>{item.label}</span>
            </button>
            {item.subItems && expandedItems.includes(item.label) && (
              <ul className="ml-6 space-y-2 mt-2">
                {item.subItems.map((subItem) => (
                  <li key={subItem.label}>
                    <button
                      onClick={() => onItemClick(subItem)}
                      className={`w-full text-left p-2 rounded-lg ${
                        subItem.label === activeItem ? 'bg-gray-200 dark:bg-gray-900' : ''
                      } text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
                    >
                      {subItem.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}