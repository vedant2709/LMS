import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { getButtonClassName } from './ui/Button';

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-bottom border-gray-100 max-w-7xl mx-auto w-full">
      <Link to="/" className="flex items-center gap-2">
        <div className="bg-[#1a365d] p-1.5 rounded-lg">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold text-[#1a365d]">EduFlow</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-8">
        <Link to="/courses" className="text-sm font-medium text-gray-600 hover:text-[#1a365d]">Courses</Link>
        <Link to="/pricing" className="text-sm font-medium text-gray-600 hover:text-[#1a365d]">Pricing</Link>
        <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-[#1a365d]">About</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/login" className={getButtonClassName({ variant: 'ghost', size: 'sm' })}>
          Log In
        </Link>
        <Link to="/signup" className={getButtonClassName({ size: 'sm' })}>
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
