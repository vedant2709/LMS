import { 
  Star, 
  Clock, 
  Globe, 
  Users, 
  PlayCircle, 
  CheckCircle2, 
  ChevronRight, 
  Share2, 
  Bookmark,
  MessageSquare,
  FileText,
  Download,
  Smartphone,
  Trophy
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CourseCard } from '../components/CourseCard';
import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useState } from 'react';

export default function CourseDetailsPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const curriculum = [
    {
      title: 'Module 1: Introduction to UI Design',
      lessons: [
        { title: 'Welcome to the course', duration: '05:20', isPreview: true },
        { title: 'What is UI Design?', duration: '12:45', isPreview: true },
        { title: 'The UI Design Process', duration: '15:10', isPreview: false },
      ]
    },
    {
      title: 'Module 2: Visual Hierarchy & Layout',
      lessons: [
        { title: 'Understanding Grids', duration: '22:15', isPreview: false },
        { title: 'Spacing and Proximity', duration: '18:30', isPreview: false },
        { title: 'Creating Balance', duration: '14:20', isPreview: false },
      ]
    },
    {
      title: 'Module 3: Typography & Color',
      lessons: [
        { title: 'Choosing the right fonts', duration: '25:10', isPreview: false },
        { title: 'Color Theory for UI', duration: '30:45', isPreview: false },
        { title: 'Accessibility in Design', duration: '20:15', isPreview: false },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Course Header / Hero */}
        <section className="bg-[#1a365d] text-white py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-widest">
                <Link to="/courses" className="hover:text-white">Courses</Link>
                <ChevronRight size={12} />
                <span className="text-white">Design</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                UI/UX Design Essentials: From Beginner to Professional
              </h1>
              
              <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
                Master the core principles of modern user interface design. Learn Figma, visual hierarchy, typography, and how to create stunning user experiences from scratch.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="fill-current" />)}
                  </div>
                  <span className="text-sm font-bold">4.9</span>
                  <span className="text-sm text-blue-200">(2,450 ratings)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-100">
                  <Users size={16} />
                  <span>12,450 students enrolled</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                  <img src="https://picsum.photos/seed/jane/48/48" alt="Instructor" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Created by</p>
                  <p className="font-bold">Jane Doe, Senior Product Designer</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-blue-100">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>Last updated 02/2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} />
                  <span>English [Auto]</span>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar Card (Desktop) */}
            <div className="hidden lg:block relative">
              <div className="absolute top-0 w-full bg-white rounded-3xl shadow-2xl shadow-blue-900/20 border border-gray-100 overflow-hidden z-20">
                <div className="aspect-video bg-gray-900 relative group cursor-pointer">
                  <img 
                    src="https://picsum.photos/seed/preview/600/400" 
                    alt="Preview" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#1a365d] shadow-xl">
                      <PlayCircle size={32} className="fill-current ml-1" />
                    </div>
                    <span className="text-white font-bold text-sm">Preview this course</span>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-bold text-gray-900">$89.99</span>
                    <span className="text-lg text-gray-400 line-through mb-1">$129.99</span>
                    <span className="text-emerald-600 font-bold mb-1">30% OFF</span>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full h-14 text-lg">Add to Cart</Button>
                    <Button variant="outline" className="w-full h-14 text-lg">Buy Now</Button>
                  </div>

                  <p className="text-center text-xs text-gray-400">30-Day Money-Back Guarantee</p>

                  <div className="space-y-4 pt-4 border-t border-gray-50">
                    <h4 className="font-bold text-gray-900 text-sm">This course includes:</h4>
                    <ul className="space-y-3">
                      {[
                        { icon: PlayCircle, text: '24 hours on-demand video' },
                        { icon: FileText, text: '12 downloadable resources' },
                        { icon: Download, text: 'Full lifetime access' },
                        { icon: Smartphone, text: 'Access on mobile and TV' },
                        { icon: Trophy, text: 'Certificate of completion' }
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                          <item.icon size={16} className="text-[#1a365d]" />
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center gap-8 pt-4">
                    <button className="flex items-center gap-2 text-sm font-bold text-[#1a365d] hover:underline">
                      <Share2 size={16} /> Share
                    </button>
                    <button className="flex items-center gap-2 text-sm font-bold text-[#1a365d] hover:underline">
                      <Bookmark size={16} /> Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content Tabs */}
        <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Tabs Navigation */}
            <div className="flex border-b border-gray-100 sticky top-20 bg-white z-10">
              {['overview', 'curriculum', 'instructor', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all relative",
                    activeTab === tab ? "text-[#1a365d]" : "text-gray-400 hover:text-gray-600"
                  )}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-[#1a365d]"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-12">
              {activeTab === 'overview' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-12"
                >
                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-6">
                    <h3 className="text-xl font-bold text-gray-900">What you'll learn</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'Master the core principles of UI/UX design',
                        'Learn Figma from scratch to advanced level',
                        'Understand visual hierarchy and layout',
                        'Create responsive designs for mobile and web',
                        'Build a professional design portfolio',
                        'Learn how to work with developers'
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">Description</h3>
                    <div className="text-gray-600 leading-relaxed space-y-4">
                      <p>
                        Are you looking to break into the world of UI/UX design? This comprehensive course is designed to take you from a complete beginner to a professional designer. We'll cover everything from the basic principles of design to advanced prototyping in Figma.
                      </p>
                      <p>
                        Design is not just about making things look pretty; it's about solving problems and creating meaningful experiences for users. In this course, you'll learn the "why" behind design decisions and how to apply them to real-world projects.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'curriculum' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-gray-900">Course Curriculum</h3>
                    <span className="text-sm text-gray-500">12 sections • 145 lectures • 24h 15m total length</span>
                  </div>

                  <div className="space-y-4">
                    {curriculum.map((section, i) => (
                      <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                        <div className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer">
                          <h4 className="font-bold text-gray-900">{section.title}</h4>
                          <span className="text-xs text-gray-400">{section.lessons.length} lessons</span>
                        </div>
                        <div className="divide-y divide-gray-50">
                          {section.lessons.map((lesson, j) => (
                            <div key={j} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                              <div className="flex items-center gap-3">
                                <PlayCircle size={16} className="text-gray-400" />
                                <span className="text-sm text-gray-600">{lesson.title}</span>
                              </div>
                              <div className="flex items-center gap-4">
                                {lesson.isPreview && (
                                  <button className="text-xs font-bold text-[#1a365d] hover:underline">Preview</button>
                                )}
                                <span className="text-xs text-gray-400">{lesson.duration}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'instructor' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-32 h-32 rounded-3xl overflow-hidden shrink-0">
                      <img src="https://picsum.photos/seed/jane/200/200" alt="Jane Doe" referrerPolicy="no-referrer" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Jane Doe</h3>
                        <p className="text-gray-500">Senior Product Designer & Design Educator</p>
                      </div>
                      <div className="flex gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <Star size={16} className="text-amber-400 fill-current" />
                          <span className="font-bold">4.9 Instructor Rating</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageSquare size={16} className="text-blue-500" />
                          <span className="font-bold">12,450 Reviews</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-emerald-500" />
                          <span className="font-bold">156,000 Students</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-600 leading-relaxed">
                    <p>
                      Jane is a passionate product designer with over 10 years of experience in the industry. She has worked with top tech companies like Google, Airbnb, and Spotify, helping them build intuitive and beautiful user interfaces.
                    </p>
                    <p className="mt-4">
                      She believes that anyone can learn design with the right guidance and practice. Her teaching style is practical and project-based, ensuring that students gain hands-on experience that they can apply to their own work.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'reviews' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="flex flex-col md:flex-row gap-12 items-center bg-gray-50 p-8 rounded-3xl">
                    <div className="text-center space-y-2">
                      <p className="text-6xl font-bold text-[#1a365d]">4.9</p>
                      <div className="flex text-amber-400 justify-center">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-current" />)}
                      </div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Course Rating</p>
                    </div>
                    <div className="flex-1 w-full space-y-2">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center gap-4">
                          <div className="flex-1 h-2 bg-white rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-amber-400" 
                              style={{ width: star === 5 ? '85%' : star === 4 ? '10%' : '2%' }} 
                            />
                          </div>
                          <div className="flex text-amber-400 w-24">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} size={12} className={cn(i < star ? "fill-current" : "text-gray-200")} />
                            ))}
                          </div>
                          <span className="text-xs font-bold text-gray-400 w-8">{star === 5 ? '85%' : star === 4 ? '10%' : '2%'}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8">
                    {[1, 2, 3].map((review) => (
                      <div key={review} className="space-y-4 border-b border-gray-50 pb-8">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                            <img src={`https://picsum.photos/seed/reviewer${review}/48/48`} alt="Reviewer" referrerPolicy="no-referrer" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">Alex Johnson</p>
                            <div className="flex items-center gap-3">
                              <div className="flex text-amber-400">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} className="fill-current" />)}
                              </div>
                              <span className="text-xs text-gray-400">2 weeks ago</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          This course is absolutely amazing! Jane explains everything so clearly and the projects are really helpful for building a portfolio. I've learned more in this course than I did in my entire design degree. Highly recommend!
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Related Courses */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-gray-900">More Courses by Jane</h3>
            <div className="space-y-6">
              <CourseCard 
                title="Advanced Prototyping in Figma"
                instructor="Jane Doe"
                price="$49.99"
                rating={4.8}
                reviews="1.2k"
                category="Design"
                image="https://picsum.photos/seed/proto/400/300"
              />
              <CourseCard 
                title="Design Systems for Scale"
                instructor="Jane Doe"
                price="$59.99"
                rating={4.9}
                reviews="850"
                category="Design"
                image="https://picsum.photos/seed/sys/400/300"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
