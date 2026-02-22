import { Search, Bell, Settings, ChevronRight, Play } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { Button } from '../components/ui/Button';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-20 border-b border-gray-100 flex items-center justify-between px-8 bg-white sticky top-0 z-10">
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search courses, skills..." 
              className="w-full h-11 pl-12 pr-4 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1a365d]/10 focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-8 text-sm font-medium text-gray-600 mr-4">
              <Link to="/dashboard" className="text-[#1a365d]">My Learning</Link>
              <Link to="/courses" className="hover:text-[#1a365d]">Catalog</Link>
              <Link to="/resources" className="hover:text-[#1a365d]">Resources</Link>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="p-2.5 text-gray-400 hover:text-[#1a365d] hover:bg-gray-50 rounded-xl transition-colors relative">
                <Bell size={20} />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full" />
              </button>
              <button className="p-2.5 text-gray-400 hover:text-[#1a365d] hover:bg-gray-50 rounded-xl transition-colors">
                <Settings size={20} />
              </button>
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-gray-100 ml-2">
                <img src="https://picsum.photos/seed/alex/40/40" alt="Profile" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8 space-y-10 max-w-6xl">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex!</h1>
            <p className="text-gray-500">You're doing great. Keep up the momentum!</p>
          </div>

          {/* Continue Learning */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Continue Learning</h2>
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 aspect-video md:aspect-auto bg-blue-50 relative overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/ui/800/600" 
                  alt="Course" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-[#1a365d] shadow-xl">
                    <Play size={24} className="fill-current ml-1" />
                  </div>
                </div>
              </div>
              <div className="flex-1 p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-gray-900">Advanced UI Design</h3>
                    <p className="text-sm text-gray-500">Lesson 12: Design Systems and Documentation</p>
                  </div>
                  <span className="bg-blue-50 text-[#1a365d] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    In Progress
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-gray-900">85% Complete</span>
                    <span className="text-gray-400">4 lessons remaining</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      className="h-full bg-[#1a365d]"
                    />
                  </div>
                </div>

                <Button className="gap-2 h-12 px-8">
                  Resume Lesson <ChevronRight size={18} />
                </Button>
              </div>
            </motion.div>
          </section>

          {/* My Courses */}
          <section className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">My Courses</h2>
              <Link to="/my-courses" className="text-sm font-bold text-gray-900 hover:underline">View All</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Web Development 101', instructor: 'Sarah Miller', progress: 60, image: 'web' },
                { title: 'Data Science Basics', instructor: 'David Chen', progress: 100, image: 'data' },
                { title: 'Digital Marketing Mastery', instructor: 'Emma Wilson', progress: 15, image: 'marketing' }
              ].map((course, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/${course.image}/400/225`} 
                      alt={course.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="space-y-1">
                      <h4 className="font-bold text-gray-900 line-clamp-1">{course.title}</h4>
                      <p className="text-xs text-gray-500">Instructor: {course.instructor}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={cn(
                            "h-full rounded-full",
                            course.progress === 100 ? "bg-emerald-500" : "bg-[#1a365d]"
                          )}
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                          {course.progress === 100 ? 'Completed' : `${course.progress}%`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="flex justify-center pt-4">
            <Button variant="outline" className="gap-2 rounded-xl h-12 px-8">
              <span className="text-xl">+</span> Explore More Courses
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
