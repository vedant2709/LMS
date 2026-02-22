import { useState, useEffect } from 'react';

export interface Course {
  id: string;
  title: string;
  instructor: string;
  price: string;
  numericPrice: number;
  rating: number;
  reviews: string;
  category: string;
  level: string;
  image: string;
  isBestseller?: boolean;
  isNew?: boolean;
  students?: number;
}

const INITIAL_COURSES: Course[] = [
  {
    id: '1',
    title: "Mastering React 18: From Zero to Fullstack Professional",
    instructor: "Sarah Jenkins",
    price: "$89.99",
    numericPrice: 89.99,
    rating: 4.9,
    reviews: "12.4k",
    category: "Tech & IT",
    level: "Intermediate",
    image: "https://picsum.photos/seed/react/800/600",
    isBestseller: true,
    students: 12450
  },
  {
    id: '2',
    title: "UI Design Principles: Visual Hierarchy and Grid Systems",
    instructor: "Marcus Thorne",
    price: "$49.99",
    numericPrice: 49.99,
    rating: 4.7,
    reviews: "842",
    category: "Design & UX",
    level: "Beginner",
    image: "https://picsum.photos/seed/ui/800/600",
    isNew: true,
    students: 8420
  },
  {
    id: '3',
    title: "Python for Data Science and Machine Learning Bootcamp",
    instructor: "Dr. Emily Chen",
    price: "$129.99",
    numericPrice: 129.99,
    rating: 4.8,
    reviews: "45.1k",
    category: "Tech & IT",
    level: "Advanced",
    image: "https://picsum.photos/seed/python/800/600",
    students: 45100
  },
  {
    id: '4',
    title: "Digital Marketing Masterclass: 23 Courses in 1",
    instructor: "Alex Thompson",
    price: "$19.99",
    numericPrice: 19.99,
    rating: 4.5,
    reviews: "5.2k",
    category: "Marketing",
    level: "Beginner",
    image: "https://picsum.photos/seed/marketing/800/600",
    students: 5200
  },
  {
    id: '5',
    title: "Business Management: Strategy & Leadership",
    instructor: "Albert Johnson",
    price: "$74.99",
    numericPrice: 74.99,
    rating: 4.7,
    reviews: "950",
    category: "Business",
    level: "Intermediate",
    image: "https://picsum.photos/seed/business/800/600",
    students: 9500
  },
  {
    id: '6',
    title: "Advanced UI Design: Design Systems & Documentation",
    instructor: "David Chen",
    price: "$99.99",
    numericPrice: 99.99,
    rating: 4.9,
    reviews: "1.2k",
    category: "Design & UX",
    level: "Advanced",
    image: "https://picsum.photos/seed/uidesign/800/600",
    isBestseller: true,
    students: 1200
  }
];

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('eduflow_courses');
    if (saved) {
      setCourses(JSON.parse(saved));
    } else {
      setCourses(INITIAL_COURSES);
      localStorage.setItem('eduflow_courses', JSON.stringify(INITIAL_COURSES));
    }
  }, []);

  const saveCourses = (newCourses: Course[]) => {
    setCourses(newCourses);
    localStorage.setItem('eduflow_courses', JSON.stringify(newCourses));
  };

  const addCourse = (course: Omit<Course, 'id'>) => {
    const newCourse = { ...course, id: Math.random().toString(36).substr(2, 9) };
    saveCourses([...courses, newCourse]);
  };

  const updateCourse = (id: string, updatedCourse: Partial<Course>) => {
    saveCourses(courses.map(c => c.id === id ? { ...c, ...updatedCourse } : c));
  };

  const deleteCourse = (id: string) => {
    saveCourses(courses.filter(c => c.id !== id));
  };

  return { courses, addCourse, updateCourse, deleteCourse };
}
