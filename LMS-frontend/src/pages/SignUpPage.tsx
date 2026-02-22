import { Link } from 'react-router-dom';
import { GraduationCap, Eye, Info } from 'lucide-react';
import { Button, getButtonClassName } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { motion } from 'motion/react';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-[#1a365d] p-1.5 rounded-lg">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-[#1a365d]">EduFlow</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link to="#" className="hover:text-[#1a365d]">Features</Link>
          <Link to="#" className="hover:text-[#1a365d]">Pricing</Link>
          <Link to="#" className="hover:text-[#1a365d]">About</Link>
          <Link to="/login" className={getButtonClassName({ variant: 'primary', size: 'sm', className: 'px-6' })}>
            Log In
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-[32px] shadow-xl shadow-blue-900/5 border border-gray-100 w-full max-w-[540px] space-y-8"
        >
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Join EduFlow today</h1>
            <p className="text-gray-500">Start your learning journey with a professional account.</p>
          </div>

          <form className="space-y-6">
            <Input label="Full Name" placeholder="Enter your full name" />
            <Input label="Work Email" type="email" placeholder="name@company.com" />
            <div className="relative">
              <Input label="Create Password" type="password" placeholder="At least 8 characters" />
              <button type="button" className="absolute right-4 bottom-3.5 text-gray-400 hover:text-gray-600">
                <Eye size={18} />
              </button>
            </div>
            
            <div className="flex items-start gap-2 text-xs text-gray-400">
              <Info size={14} className="mt-0.5 shrink-0" />
              <p>At least 8 characters long.</p>
            </div>

            <Button className="w-full h-14 text-lg">Create Account</Button>
          </form>

          <div className="pt-6 border-t border-gray-50 text-center space-y-6">
            <p className="text-sm text-gray-500">
              Already have an account? <Link to="/login" className="font-bold text-gray-900 hover:underline">Log In</Link>
            </p>
            
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">By signing up, you agree to our</p>
              <div className="flex justify-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <Link to="#" className="underline hover:text-gray-600">Terms of Service</Link>
                <span>&</span>
                <Link to="#" className="underline hover:text-gray-600">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="p-8 flex flex-col items-center gap-4">
        <div className="flex gap-6 text-gray-400">
          <Link to="#" className="hover:text-gray-600"><GraduationCap size={18} /></Link>
          <Link to="#" className="hover:text-gray-600"><GraduationCap size={18} /></Link>
          <Link to="#" className="hover:text-gray-600"><GraduationCap size={18} /></Link>
        </div>
        <p className="text-[10px] text-gray-400">© 2024 EduFlow Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
