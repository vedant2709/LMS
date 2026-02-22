import { Search, Bell, Filter, ChevronDown, ShoppingCart, Bookmark, ChevronLeft, ChevronRight, Star, X } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { CourseCard } from '../components/CourseCard';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useState, useMemo } from 'react';
import { useCourses } from '../hooks/useCourses';

export default function AllCoursesPage() {
  const { courses: COURSES } = useCourses();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number>(0);
  const [priceFilter, setPriceFilter] = useState<{ free: boolean; paid: boolean }>({ free: true, paid: true });
  const [sortBy, setSortBy] = useState<'popular' | 'newest' | 'price-low' | 'price-high'>('popular');

  const categories = [
    { name: 'Tech & IT', count: 452 },
    { name: 'Design & UX', count: 312 },
    { name: 'Business', count: 215 },
    { name: 'Marketing', count: 156 },
    { name: 'Photography', count: 113 }
  ];

  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const ratings = [4.5, 4.0, 3.5, 3.0];

  const filteredCourses = useMemo(() => {
    let result = COURSES.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category);
      const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(course.level);
      const matchesRating = course.rating >= minRating;
      
      const isFree = course.numericPrice === 0;
      const matchesPrice = (priceFilter.free && isFree) || (priceFilter.paid && !isFree);

      return matchesSearch && matchesCategory && matchesLevel && matchesRating && matchesPrice;
    });

    // Sorting logic
    result = [...result].sort((a, b) => {
      if (sortBy === 'price-low') return a.numericPrice - b.numericPrice;
      if (sortBy === 'price-high') return b.numericPrice - a.numericPrice;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      // Default: popular (using rating and reviews as proxy)
      return b.rating - a.rating;
    });

    return result;
  }, [COURSES, searchQuery, selectedCategories, selectedLevels, minRating, priceFilter, sortBy]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleLevel = (level: string) => {
    setSelectedLevels(prev => 
      prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]
    );
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedLevels([]);
    setMinRating(0);
    setPriceFilter({ free: true, paid: true });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col">
        {/* Breadcrumbs & Title */}
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-12 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <Link to="/" className="hover:text-[#1a365d]">Home</Link>
              <ChevronRight size={12} />
              <span className="text-[#1a365d]">All Courses</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Explore All Courses
            </h1>
            <p className="text-gray-500 max-w-2xl">
              Discover thousands of high-quality courses taught by industry experts. From beginner basics to advanced professional certifications.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 space-y-10 shrink-0">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Filter size={18} /> Filters
              </h3>
              <button 
                onClick={resetFilters}
                className="text-xs font-bold text-gray-400 hover:text-[#1a365d] uppercase tracking-wider transition-colors"
              >
                Reset
              </button>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Categories</h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat.name} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat.name)}
                        onChange={() => toggleCategory(cat.name)}
                        className="w-4 h-4 rounded border-gray-300 text-[#1a365d] focus:ring-[#1a365d]" 
                      />
                      <span className={cn(
                        "text-sm transition-colors",
                        selectedCategories.includes(cat.name) ? "text-[#1a365d] font-bold" : "text-gray-600 group-hover:text-[#1a365d]"
                      )}>
                        {cat.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-gray-300">{cat.count}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Level */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Difficulty Level</h4>
              <div className="space-y-2">
                {levels.map((level) => (
                  <label key={level} className="flex items-center gap-3 group cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedLevels.includes(level)}
                      onChange={() => toggleLevel(level)}
                      className="w-4 h-4 rounded border-gray-300 text-[#1a365d] focus:ring-[#1a365d]" 
                    />
                    <span className={cn(
                      "text-sm transition-colors",
                      selectedLevels.includes(level) ? "text-[#1a365d] font-bold" : "text-gray-600 group-hover:text-[#1a365d]"
                    )}>
                      {level}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Minimum Rating</h4>
              <div className="space-y-2">
                {ratings.map((rating) => (
                  <label key={rating} className="flex items-center gap-3 group cursor-pointer">
                    <input 
                      type="radio" 
                      name="rating"
                      checked={minRating === rating}
                      onChange={() => setMinRating(rating)}
                      className="w-4 h-4 border-gray-300 text-[#1a365d] focus:ring-[#1a365d]" 
                    />
                    <div className="flex items-center gap-1">
                      <div className="flex text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={14} className={cn(i < Math.floor(rating) ? "fill-current" : "text-gray-200")} />
                        ))}
                      </div>
                      <span className={cn(
                        "text-sm transition-colors",
                        minRating === rating ? "text-[#1a365d] font-bold" : "text-gray-600 group-hover:text-[#1a365d]"
                      )}>
                        {rating} & up
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Price Range</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3 group cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={priceFilter.free}
                    onChange={(e) => setPriceFilter(prev => ({ ...prev, free: e.target.checked }))}
                    className="w-4 h-4 rounded border-gray-300 text-[#1a365d] focus:ring-[#1a365d]" 
                  />
                  <span className={cn(
                    "text-sm transition-colors",
                    priceFilter.free ? "text-[#1a365d] font-bold" : "text-gray-600 group-hover:text-[#1a365d]"
                  )}>
                    Free
                  </span>
                </label>
                <label className="flex items-center gap-3 group cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={priceFilter.paid}
                    onChange={(e) => setPriceFilter(prev => ({ ...prev, paid: e.target.checked }))}
                    className="w-4 h-4 rounded border-gray-300 text-[#1a365d] focus:ring-[#1a365d]" 
                  />
                  <span className={cn(
                    "text-sm transition-colors",
                    priceFilter.paid ? "text-[#1a365d] font-bold" : "text-gray-600 group-hover:text-[#1a365d]"
                  )}>
                    Paid
                  </span>
                </label>
              </div>
            </div>
          </aside>

          {/* Course Grid */}
          <div className="flex-1 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search all courses..." 
                  className="w-full h-11 pl-12 pr-12 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#1a365d]/10 focus:border-[#1a365d] transition-all"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400 font-medium whitespace-nowrap">Sort by:</span>
                <div className="relative group/sort">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-900 hover:bg-gray-50 transition-colors">
                    {sortBy === 'popular' && 'Most Popular'}
                    {sortBy === 'newest' && 'Newest'}
                    {sortBy === 'price-low' && 'Price: Low to High'}
                    {sortBy === 'price-high' && 'Price: High to Low'}
                    <ChevronDown size={16} />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover/sort:opacity-100 group-hover/sort:visible transition-all z-30 overflow-hidden">
                    <button 
                      onClick={() => setSortBy('popular')}
                      className={cn("w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors", sortBy === 'popular' ? "bg-blue-50 text-[#1a365d] font-bold" : "text-gray-600")}
                    >
                      Most Popular
                    </button>
                    <button 
                      onClick={() => setSortBy('newest')}
                      className={cn("w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors", sortBy === 'newest' ? "bg-blue-50 text-[#1a365d] font-bold" : "text-gray-600")}
                    >
                      Newest
                    </button>
                    <button 
                      onClick={() => setSortBy('price-low')}
                      className={cn("w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors", sortBy === 'price-low' ? "bg-blue-50 text-[#1a365d] font-bold" : "text-gray-600")}
                    >
                      Price: Low to High
                    </button>
                    <button 
                      onClick={() => setSortBy('price-high')}
                      className={cn("w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors", sortBy === 'price-high' ? "bg-blue-50 text-[#1a365d] font-bold" : "text-gray-600")}
                    >
                      Price: High to Low
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Filters Display */}
            {(selectedCategories.length > 0 || selectedLevels.length > 0 || minRating > 0 || searchQuery) && (
              <div className="flex flex-wrap gap-2">
                {searchQuery && (
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-[#1a365d] rounded-lg text-xs font-bold">
                    Search: {searchQuery}
                    <button onClick={() => setSearchQuery('')}><X size={12} /></button>
                  </div>
                )}
                {selectedCategories.map(cat => (
                  <div key={cat} className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-bold">
                    {cat}
                    <button onClick={() => toggleCategory(cat)}><X size={12} /></button>
                  </div>
                ))}
                {selectedLevels.map(lvl => (
                  <div key={lvl} className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-bold">
                    {lvl}
                    <button onClick={() => toggleLevel(lvl)}><X size={12} /></button>
                  </div>
                ))}
                {minRating > 0 && (
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-xs font-bold">
                    {minRating}+ Stars
                    <button onClick={() => setMinRating(0)}><X size={12} /></button>
                  </div>
                )}
                <button 
                  onClick={resetFilters}
                  className="text-xs font-bold text-red-500 hover:underline px-2"
                >
                  Clear all
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course) => (
                    <motion.div
                      key={course.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CourseCard {...course} />
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full py-20 text-center space-y-4">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-300">
                      <Search size={40} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-gray-900">No courses found</h3>
                      <p className="text-gray-500">Try adjusting your filters or search query to find what you're looking for.</p>
                    </div>
                    <Button variant="outline" onClick={resetFilters}>Clear all filters</Button>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Pagination (only show if there are results) */}
            {filteredCourses.length > 0 && (
              <div className="flex flex-col items-center gap-8 pt-12">
                <Button variant="outline" className="h-12 px-12 rounded-xl font-bold">Load More Courses</Button>
                
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:bg-gray-50 transition-colors">
                    <ChevronLeft size={20} />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1a365d] text-white font-bold">1</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-600 hover:bg-gray-50 font-bold transition-colors">2</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-600 hover:bg-gray-50 font-bold transition-colors">3</button>
                  <span className="px-2 text-gray-400">...</span>
                  <button className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-600 hover:bg-gray-50 font-bold transition-colors">42</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:bg-gray-50 transition-colors">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
