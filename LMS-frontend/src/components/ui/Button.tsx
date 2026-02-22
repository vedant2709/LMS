import * as React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

const variants = {
  primary: 'bg-[#1a365d] text-white hover:bg-[#142a4a]',
  secondary: 'bg-white text-[#1a365d] hover:bg-gray-50',
  outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700',
  ghost: 'hover:bg-gray-100 text-gray-600',
  link: 'text-[#1a365d] underline-offset-4 hover:underline p-0 h-auto',
};

const sizes = {
  sm: 'h-9 px-3 text-xs',
  md: 'h-11 px-6 text-sm font-medium',
  lg: 'h-12 px-8 text-base',
  icon: 'h-10 w-10 p-0 flex items-center justify-center',
};

export function getButtonClassName({
  className,
  variant = 'primary',
  size = 'md',
}: {
  className?: string;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
}) {
  return cn(
    'inline-flex items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a365d] disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    className
  );
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {

    return (
      <button
        className={getButtonClassName({ className, variant, size })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
