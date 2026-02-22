import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/Button';
import { Users, BookOpen, Award, Globe, Heart, Zap, Shield, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const stats = [
    { label: 'Active Students', value: '150k+', icon: Users, color: 'text-blue-600 bg-blue-50' },
    { label: 'Total Courses', value: '1,200+', icon: BookOpen, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Expert Instructors', value: '450+', icon: Award, color: 'text-amber-600 bg-amber-50' },
    { label: 'Countries Reached', value: '120+', icon: Globe, color: 'text-purple-600 bg-purple-50' },
  ];

  const values = [
    {
      title: 'Student First',
      description: 'We prioritize the learning experience above all else, ensuring every student has the tools they need to succeed.',
      icon: Heart,
    },
    {
      title: 'Innovation',
      description: 'We constantly evolve our platform and curriculum to keep pace with the rapidly changing tech landscape.',
      icon: Zap,
    },
    {
      title: 'Quality Content',
      description: 'Our courses are vetted by industry experts to ensure the highest standards of educational excellence.',
      icon: Shield,
    },
    {
      title: 'Accessibility',
      description: 'We believe quality education should be available to everyone, regardless of their location or background.',
      icon: Target,
    },
  ];

  const team = [
    { name: 'Sarah Jenkins', role: 'CEO & Founder', image: 'https://picsum.photos/seed/sarah/200/200' },
    { name: 'Marcus Thorne', role: 'CTO', image: 'https://picsum.photos/seed/marcus/200/200' },
    { name: 'Dr. Emily Chen', role: 'Head of Content', image: 'https://picsum.photos/seed/emily/200/200' },
    { name: 'David Miller', role: 'Head of Design', image: 'https://picsum.photos/seed/david/200/200' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-[#1a365d] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://picsum.photos/seed/education-bg/1920/1080?blur=10" 
              alt="Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                Our Mission is to <span className="text-blue-400">Empower</span> Learners
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                EduFlow was founded on the belief that education is the most powerful tool for personal and professional growth. We're building a world where anyone, anywhere, can master the skills they need to thrive.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center space-y-2"
                >
                  <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon size={24} />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">The EduFlow Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Founded in 2020, EduFlow started as a small project to help local designers share their knowledge. We quickly realized that the demand for high-quality, practical education extended far beyond our local community.
              </p>
              <p>
                Today, we are a global platform serving hundreds of thousands of students. We've partnered with industry leaders and top-tier instructors to create a curriculum that doesn't just teach theory, but prepares students for real-world challenges.
              </p>
              <p>
                Our journey is just beginning. We are constantly innovating, adding new features, and expanding our course catalog to ensure our learners stay ahead in an ever-evolving world.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[48px] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/team-work/800/800" 
                alt="Our Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-gray-50 max-w-xs">
              <p className="text-lg font-bold text-[#1a365d]">"Education is not the filling of a pail, but the lighting of a fire."</p>
              <p className="text-sm text-gray-400 mt-2">— William Butler Yeats</p>
            </div>
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">Our Core Values</h2>
              <p className="text-gray-500">These principles guide everything we do, from course creation to student support.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl border border-gray-100 space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <value.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Meet Our Leadership</h2>
            <p className="text-gray-500">The passionate individuals driving the future of online education.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center space-y-4"
              >
                <div className="aspect-square rounded-3xl overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#1a365d]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="bg-[#1a365d] rounded-[48px] p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            
            <h2 className="text-4xl md:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight">
              Join our mission to democratize education.
            </h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto">
              Whether you're a student looking to learn or an expert looking to teach, there's a place for you at EduFlow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <Button variant="secondary" size="lg" className="px-12">Get Started</Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" size="lg" className="px-12 text-white border-white hover:bg-white/10">Browse Courses</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
