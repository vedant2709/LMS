import { Link } from 'react-router-dom';
import { GraduationCap, Eye, EyeOff } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex w-1/2 bg-[#1a365d] relative overflow-hidden flex-col justify-between p-16">
        <div className="absolute inset-0 opacity-20">
           <img 
             src="https://picsum.photos/seed/office/1920/1080?blur=4" 
             alt="Background" 
             className="w-full h-full object-cover"
             referrerPolicy="no-referrer"
           />
        </div>
        
        <Link to="/" className="flex items-center gap-3 relative z-10">
          <div className="bg-white p-2 rounded-xl">
            <GraduationCap className="w-8 h-8 text-[#1a365d]" />
          </div>
          <span className="text-3xl font-bold text-white">EduFlow</span>
        </Link>

        <div className="relative z-10 space-y-8">
          <h2 className="text-6xl font-bold text-white leading-tight">
            Empowering your learning journey.
          </h2>
          <p className="text-xl text-blue-100 max-w-lg leading-relaxed">
            Join thousands of students and professionals who are mastering new skills every day through EduFlow's personalized pathways.
          </p>
          
          <div className="flex items-center gap-6 pt-8">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-[#1a365d] overflow-hidden bg-gray-100">
                  <img src={`https://picsum.photos/seed/user${i+10}/48/48`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <p className="text-blue-100 font-medium">Over 50k+ students joined this month</p>
          </div>
        </div>

        <div className="relative z-10 flex justify-between text-xs text-blue-300 font-medium">
          <p>© 2024 EduFlow Inc.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 bg-white">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-[440px] space-y-10"
        >
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900">Welcome back</h1>
            <p className="text-gray-500">Please enter your details to sign in.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="gap-3 h-12">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              Google
            </Button>
            <Button variant="outline" className="gap-3 h-12">
              <img src="https://www.linkedin.com/favicon.ico" alt="LinkedIn" className="w-5 h-5" />
              LinkedIn
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-100"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-gray-400 font-bold tracking-widest">Or continue with email</span>
            </div>
          </div>

          <form className="space-y-6">
            <Input label="Email Address" type="email" placeholder="name@company.com" />
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <Link to="#" className="text-sm font-bold text-[#1a365d] hover:underline">Forgot password?</Link>
              </div>
              <div className="relative">
                <Input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="••••••••" 
                  className="pr-12"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-[#1a365d] focus:ring-[#1a365d]" />
              <label htmlFor="remember" className="text-sm text-gray-500">Remember me for 30 days</label>
            </div>

            <Button className="w-full h-14 text-lg">Sign in to account</Button>
          </form>

          <p className="text-center text-sm text-gray-500">
            Don't have an account? <Link to="/signup" className="font-bold text-gray-900 hover:underline">Join for free</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
