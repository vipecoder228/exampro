import { type ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const variants = {
  primary: 'bg-[var(--accent)] text-white hover:opacity-90',
  secondary: 'border text-[var(--text)] hover:opacity-80',
  ghost: 'text-[var(--text-secondary)] hover:opacity-80',
  danger: 'bg-[var(--color-error)] text-white hover:opacity-90',
};

const sizes = {
  sm: 'px-3 py-1 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

export default function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-lg font-medium transition-all duration-200 disabled:opacity-50 active:scale-[0.97] ${variants[variant]} ${sizes[size]} ${className}`}
      style={variant === 'secondary' ? { borderColor: 'var(--border)' } : undefined}
      {...props}
    >
      {children}
    </button>
  );
}
