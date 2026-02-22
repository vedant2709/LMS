import { Search, Bell, Filter, ChevronDown, ShoppingCart, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { CourseCard } from '../components/CourseCard';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CatalogPage() {
  const categories = ['Tech & IT', 'Design & UX', 'Business', 'Marketing', 'Photography'];
  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const ratings = [4.5];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="h-20 border-b border-gray-100 flex items-center justify-between px-8 bg-white sticky top-0 z-20">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-[#1a365d] p-1.5 rounded-lg">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-[#1a365d]">EduFlow</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-1 relative w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search for courses in Design, Tech, or Business..." 
              className="w-full h-11 pl-12 pr-4 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1a365d]/10 focus:bg-white transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link to="#" className="hover:text-[#1a365d]">Teach on EduFlow</Link>
            <Link to="/dashboard" className="hover:text-[#1a365d]">My Learning</Link>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="p-2.5 text-gray-400 hover:text-[#1a365d] hover:bg-gray-50 rounded-xl transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute top-2 right-2 w-4 h-4 bg-[#1a365d] text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">2</span>
            </button>
            <button className="p-2.5 text-gray-400 hover:text-[#1a365d] hover:bg-gray-50 rounded-xl transition-colors">
              <Bell size={20} />
            </button>
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-gray-100 ml-2">
              <img src="https://picsum.photos/seed/user/40/40" alt="Profile" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar Filters */}
        <aside className="w-72 border-r border-gray-100 p-8 hidden xl:block overflow-y-auto sticky top-20 h-[calc(100vh-80px)]">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Filter size={20} /> Filters
            </h3>
            <button className="text-xs font-bold text-gray-400 hover:text-[#1a365d] uppercase tracking-wider">Clear All</button>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Categories</h4>
              <div className="space-y-3">
                {categories.map((cat, i) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" defaultChecked={i === 0} className="w-4 h-4 rounded border-gray-300 text-[#1a365d] focus:ring-[#1a365d]" />
                    <span className="text-sm text-gray-600 group-hover:text-[#1a365d] transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Level</h4>
              <div className="space-y-3">
                {levels.map((level) => (
                  <label key={level} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#1a365d] focus:ring-[#1a365d]" />
                    <span className="text-sm text-gray-600 group-hover:text-[#1a365d] transition-colors">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Price</h4>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="radio" name="price" className="w-4 h-4 border-gray-300 text-[#1a365d] focus:ring-[#1a365d]" />
                  <span className="text-sm text-gray-600 group-hover:text-[#1a365d] transition-colors">Free</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="radio" name="price" defaultChecked className="w-4 h-4 border-gray-300 text-[#1a365d] focus:ring-[#1a365d]" />
                  <span className="text-sm text-gray-600 group-hover:text-[#1a365d] transition-colors">Paid</span>
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Rating</h4>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#1a365d] focus:ring-[#1a365d]" />
                  <div className="flex items-center gap-1">
                    <div className="flex text-amber-400">
                      {[1, 2, 3, 4].map(i => <span key={i}>★</span>)}
                      <span className="text-gray-200">★</span>
                    </div>
                    <span className="text-sm text-gray-600">4.5 & up</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 lg:p-12 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Courses in Tech</h1>
              <p className="text-gray-500">Showing 1,248 results for "Web Development"</p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400 font-medium">Sort by:</span>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 rounded-xl text-sm font-bold text-gray-900 border border-gray-100">
                Most Popular <ChevronDown size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <CourseCard 
              title="Mastering React 18: From Zero to Fullstack Professional"
              instructor="Sarah Jenkins, Senior Dev"
              price="$89.99"
              rating={4.9}
              reviews="12,450"
              category="Tech & IT"
              image="https://picsum.photos/seed/react/800/600"
              isBestseller
            />
            <CourseCard 
              title="UI Design Principles: Visual Hierarchy and Grid Systems"
              instructor="Marcus Thorne"
              price="$49.99"
              rating={4.7}
              reviews="842"
              category="Design & UX"
              image="https://picsum.photos/seed/ui/800/600"
              isNew
            />
            <CourseCard 
              title="Python for Data Science and Machine Learning Bootcamp"
              instructor="Dr. Emily Chen"
              price="$129.99"
              rating={4.8}
              reviews="45,102"
              category="Tech & IT"
              image="https://picsum.photos/seed/python/800/600"
            />
            <CourseCard 
              title="Digital Marketing Masterclass: 23 Courses in 1"
              instructor="Alex Thompson"
              price="$19.99"
              rating={4.5}
              reviews="5,290"
              category="Marketing"
              image="https://picsum.photos/seed/marketing/800/600"
            />
            <div className="bg-emerald-50 rounded-xl p-6 flex flex-col justify-between border border-emerald-100">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-600 shadow-sm">
                  <Bookmark size={24} />
                </div>
                <h3 className="text-xl font-bold text-emerald-900">Introduction to Web Development: HTML, CSS & JS</h3>
                <p className="text-sm text-emerald-700/70">EduFlow Academy • 4.6 (156k)</p>
              </div>
              <div className="flex items-center justify-between pt-4">
                <span className="text-2xl font-bold text-emerald-900">Free</span>
                <Button variant="primary" size="icon" className="bg-emerald-900 hover:bg-emerald-950">
                  <Bookmark size={18} />
                </Button>
              </div>
            </div>
            <CourseCard 
              title="Agile Project Management: The Complete Scrum Guide"
              instructor="Project Experts"
              price="$64.99"
              rating={4.4}
              reviews="3,412"
              category="Business"
              image="https://picsum.photos/seed/agile/800/600"
            />
          </div>

          <div className="flex flex-col items-center gap-8 pt-12">
            <Button variant="outline" className="h-12 px-12 rounded-xl font-bold">Load More Courses</Button>
            
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:bg-gray-50"><ChevronLeft size={20} /></button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1a365d] text-white font-bold">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-600 hover:bg-gray-50 font-bold">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-600 hover:bg-gray-50 font-bold">3</button>
              <span className="px-2 text-gray-400">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-600 hover:bg-gray-50 font-bold">42</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:bg-gray-50"><ChevronRight size={20} /></button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
