import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-[#1a365d] p-1.5 rounded-lg">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-[#1a365d]">EduFlow</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Providing high-quality education tools and courses for the modern era. Join us and shape your future.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-gray-400 hover:text-[#1a365d]"><Facebook size={18} /></Link>
              <Link to="#" className="text-gray-400 hover:text-[#1a365d]"><Twitter size={18} /></Link>
              <Link to="#" className="text-gray-400 hover:text-[#1a365d]"><Instagram size={18} /></Link>
              <Link to="#" className="text-gray-400 hover:text-[#1a365d]"><Linkedin size={18} /></Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/courses" className="hover:text-[#1a365d]">Browse Courses</Link></li>
              <li><Link to="/admin" className="hover:text-[#1a365d]">Admin Panel</Link></li>
              <li><Link to="#" className="hover:text-[#1a365d]">Learning Paths</Link></li>
              <li><Link to="#" className="hover:text-[#1a365d]">Certifications</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="#" className="hover:text-[#1a365d]">Help Center</Link></li>
              <li><Link to="#" className="hover:text-[#1a365d]">Teaching Center</Link></li>
              <li><Link to="#" className="hover:text-[#1a365d]">Career Services</Link></li>
              <li><Link to="#" className="hover:text-[#1a365d]">Community</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>support@eduflow.com</li>
              <li>+1 (555) 000-0000</li>
              <li>123 Education Way, Tech City, CA 94000</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2024 EduFlow Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-gray-600">Privacy Policy</Link>
            <Link to="#" className="hover:text-gray-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
