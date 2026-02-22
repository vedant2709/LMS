import { Star, ShoppingCart, Bookmark } from 'lucide-react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  id?: string;
  title: string;
  instructor: string;
  price: string;
  rating: number;
  reviews: string;
  image: string;
  category: string;
  isBestseller?: boolean;
  isNew?: boolean;
}

export function CourseCard({
  id = '1',
  title,
  instructor,
  price,
  rating,
  reviews,
  image,
  category,
  isBestseller,
  isNew
}: CourseCardProps) {
  return (
    <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link to={`/course/${id}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            {isBestseller && (
              <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                Bestseller
              </span>
            )}
            {isNew && (
              <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                New
              </span>
            )}
          </div>
          <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10" onClick={(e) => e.preventDefault()}>
            <Bookmark size={16} className="text-gray-600" />
          </button>
        </div>

        <div className="p-5 space-y-3">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{category}</span>
            <div className="flex items-center gap-1">
              <Star size={12} className="fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold text-gray-700">{rating}</span>
              <span className="text-[10px] text-gray-400">({reviews})</span>
            </div>
          </div>

          <h3 className="font-bold text-gray-900 leading-tight group-hover:text-[#1a365d] transition-colors line-clamp-2 h-10">
            {title}
          </h3>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
              <img src={`https://picsum.photos/seed/${instructor}/32/32`} alt={instructor} referrerPolicy="no-referrer" />
            </div>
            <span className="text-xs text-gray-500">{instructor}</span>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-gray-50">
            <span className="text-lg font-bold text-gray-900">{price}</span>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#1a365d] hover:text-white" onClick={(e) => e.preventDefault()}>
              <ShoppingCart size={18} />
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
}
