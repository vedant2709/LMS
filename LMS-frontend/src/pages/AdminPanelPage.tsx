import * as React from 'react';
import { useState } from 'react';
import { 
  LayoutDashboard, 
  Plus, 
  Search, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  ExternalLink, 
  TrendingUp, 
  Users, 
  BookOpen, 
  DollarSign,
  X,
  Image as ImageIcon,
  Check
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useCourses, Course } from '../hooks/useCourses';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function AdminPanelPage() {
  const { courses, addCourse, updateCourse, deleteCourse } = useCourses();
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<Course>>({
    title: '',
    instructor: '',
    price: '',
    numericPrice: 0,
    category: 'Tech & IT',
    level: 'Beginner',
    image: 'https://picsum.photos/seed/new/800/600',
    rating: 4.5,
    reviews: '0',
    students: 0
  });

  const filteredCourses = courses.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = [
    { label: 'Total Courses', value: courses.length, icon: BookOpen, color: 'text-blue-600 bg-blue-50' },
    { label: 'Total Students', value: courses.reduce((acc, c) => acc + (c.students || 0), 0).toLocaleString(), icon: Users, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Avg. Rating', value: (courses.length ? courses.reduce((acc, c) => acc + c.rating, 0) / courses.length : 0).toFixed(1), icon: TrendingUp, color: 'text-amber-600 bg-amber-50' },
    { label: 'Revenue', value: `$${(courses.reduce((acc, c) => acc + (c.numericPrice * (c.students || 0)), 0) / 1000).toFixed(1)}k`, icon: DollarSign, color: 'text-purple-600 bg-purple-50' },
  ];

  const handleOpenModal = (course?: Course) => {
    if (course) {
      setEditingCourse(course);
      setFormData(course);
    } else {
      setEditingCourse(null);
      setFormData({
        title: '',
        instructor: '',
        price: '',
        numericPrice: 0,
        category: 'Tech & IT',
        level: 'Beginner',
        image: `https://picsum.photos/seed/${Math.random()}/800/600`,
        rating: 4.5,
        reviews: '0',
        students: 0
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCourse) {
      updateCourse(editingCourse.id, formData);
    } else {
      addCourse(formData as Omit<Course, 'id'>);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a365d] text-white hidden lg:flex flex-col sticky top-0 h-screen">
        <div className="p-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-white p-1.5 rounded-lg">
              <LayoutDashboard className="w-6 h-6 text-[#1a365d]" />
            </div>
            <span className="text-xl font-bold">EduFlow Admin</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl font-bold">
            <BookOpen size={20} /> Courses
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-blue-100/60 hover:bg-white/5 rounded-xl transition-colors">
            <Users size={20} /> Students
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-blue-100/60 hover:bg-white/5 rounded-xl transition-colors">
            <DollarSign size={20} /> Sales
          </button>
        </nav>

        <div className="p-8 border-t border-white/10">
          <Link to="/" className="text-sm text-blue-100/60 hover:text-white flex items-center gap-2">
            <ExternalLink size={16} /> Back to Site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
          <h1 className="text-xl font-bold text-gray-900">Course Management</h1>
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <Input 
                placeholder="Search courses..." 
                className="pl-10 h-10 rounded-xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button onClick={() => handleOpenModal()} className="gap-2 rounded-xl h-10">
              <Plus size={18} /> Add Course
            </Button>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", stat.color)}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Courses Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Course</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Category</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Price</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Students</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Rating</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filteredCourses.map((course) => (
                    <tr key={course.id} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                            <img src={course.image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-bold text-gray-900 truncate">{course.title}</p>
                            <p className="text-xs text-gray-400">{course.instructor}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2.5 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs font-bold">
                          {course.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-bold text-gray-900">{course.price}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-600">{(course.students || 0).toLocaleString()}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          <TrendingUp size={14} className="text-emerald-500" />
                          <span className="text-sm font-bold text-gray-900">{course.rating}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => handleOpenModal(course)}
                            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button 
                            onClick={() => deleteCourse(course.id)}
                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[32px] shadow-2xl overflow-hidden"
            >
              <div className="p-8 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingCourse ? 'Edit Course' : 'Add New Course'}
                </h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Course Title</label>
                    <Input 
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g. Advanced React Patterns" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Instructor Name</label>
                    <Input 
                      required
                      value={formData.instructor}
                      onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                      placeholder="e.g. Sarah Jenkins" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Category</label>
                    <select 
                      className="w-full h-12 px-4 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1a365d]/10 transition-all"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option>Tech & IT</option>
                      <option>Design & UX</option>
                      <option>Business</option>
                      <option>Marketing</option>
                      <option>Photography</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Price (Display)</label>
                    <Input 
                      required
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      placeholder="e.g. $89.99" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Price (Numeric)</label>
                    <Input 
                      required
                      type="number"
                      value={formData.numericPrice}
                      onChange={(e) => setFormData({ ...formData, numericPrice: parseFloat(e.target.value) })}
                      placeholder="89.99" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Level</label>
                    <select 
                      className="w-full h-12 px-4 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1a365d]/10 transition-all"
                      value={formData.level}
                      onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    >
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Image URL</label>
                    <Input 
                      required
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      placeholder="https://..." 
                    />
                  </div>
                </div>

                <div className="pt-6 flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="flex-1 h-12 rounded-xl">
                    Cancel
                  </Button>
                  <Button type="submit" className="flex-1 h-12 rounded-xl gap-2">
                    <Check size={18} /> {editingCourse ? 'Save Changes' : 'Create Course'}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
