import { ArrowRight, Play, CheckCircle2, Users } from 'lucide-react';
import { Button, getButtonClassName } from '../components/ui/Button';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CourseCard } from '../components/CourseCard';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useCourses } from '../hooks/useCourses';

export default function LandingPage() {
  const { courses } = useCourses();
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1a365d] text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#1a365d] animate-pulse" />
            Trusted by 10,000+ students
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#1a365d] leading-[1.1] tracking-tight">
            Master New Skills with <span className="text-blue-600">EduFlow</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
            Access a world-class education from anywhere. Join a global community learning from industry experts in design, data, and business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2">
              Start Learning <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Play size={18} className="fill-current" /> Watch Demo
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                  <img src={`https://picsum.photos/seed/user${i}/40/40`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#1a365d] flex items-center justify-center text-[10px] font-bold text-white">
                +50k
              </div>
            </div>
            <p className="text-sm text-gray-400">Join 500+ new learners this week</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 bg-emerald-100 flex items-center justify-center p-12">
             <img 
               src="https://picsum.photos/seed/learning/800/600" 
               alt="Learning Illustration" 
               className="w-full h-full object-contain mix-blend-multiply opacity-80"
               referrerPolicy="no-referrer"
             />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <Users size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">12k+</p>
              <p className="text-xs text-gray-400">Active Students</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose EduFlow?</h2>
            <p className="text-gray-500">Our platform is designed to provide a premium learning experience with the flexibility you need to succeed in your career.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Flexible Learning',
                desc: 'Study at your own pace from any device, anywhere in the world. Lifetime access to all course materials.',
                icon: 'clock',
                color: 'bg-blue-50 text-blue-600'
              },
              {
                title: 'Expert Instructors',
                desc: 'Learn from industry leaders with years of real-world experience at top-tier tech companies.',
                icon: 'user-check',
                color: 'bg-emerald-50 text-emerald-600'
              },
              {
                title: 'Recognized Certificates',
                desc: 'Earn certificates that are recognized by top employers globally to boost your professional profile.',
                icon: 'award',
                color: 'bg-amber-50 text-amber-600'
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 space-y-4"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.color}`}>
                   {i === 0 && <CheckCircle2 size={24} />}
                   {i === 1 && <Users size={24} />}
                   {i === 2 && <ArrowRight size={24} />}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Featured Courses</h2>
            <p className="text-gray-500">Expand your knowledge with our most popular programs.</p>
          </div>
          <Link to="/courses" className={getButtonClassName({ variant: 'link', className: 'gap-2 text-[#1a365d]' })}>
            View All Courses <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-[#1a365d] rounded-[32px] p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <h2 className="text-4xl md:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Ready to transform your career?
          </h2>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Join thousands of others and start learning today. Get exclusive updates on new courses and early access to workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full h-12 px-6 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Button variant="secondary" size="lg" className="w-full sm:w-auto whitespace-nowrap">
              Join Now
            </Button>
          </div>
          <p className="text-blue-300 text-xs">No credit card required. Cancel anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
