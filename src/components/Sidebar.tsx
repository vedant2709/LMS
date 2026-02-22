import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  Award, 
  MessageSquare, 
  Settings, 
  LogOut,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

export function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: BookOpen, label: 'My Courses', path: '/my-courses' },
    { icon: Calendar, label: 'Schedule', path: '/schedule' },
    { icon: Award, label: 'Certificates', path: '/certificates' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' },
  ];

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-100 flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-[#1a365d] p-1.5 rounded-lg">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-[#1a365d]">EduFlow</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
              location.pathname === item.path 
                ? "bg-white text-[#1a365d] shadow-sm border border-gray-100" 
                : "text-gray-500 hover:text-[#1a365d] hover:bg-white/50"
            )}
          >
            <item.icon size={20} />
            {item.label}
          </Link>
        ))}

        <div className="pt-8 pb-4 px-4">
          <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Your Stats</h4>
          <div className="space-y-6">
            <div>
              <p className="text-2xl font-bold text-gray-900">12</p>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Courses Completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">145</p>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Hours Learned</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">8</p>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Certificates Earned</p>
            </div>
          </div>
        </div>
      </nav>

      <div className="p-4 border-t border-gray-100 space-y-1">
        <Link to="/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-500 hover:text-[#1a365d] hover:bg-white/50">
          <Settings size={20} />
          Settings
        </Link>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors">
          <LogOut size={20} />
          Log Out
        </button>
      </div>
    </aside>
  );
}
