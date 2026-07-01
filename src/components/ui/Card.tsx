import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className = '', hover = false, onClick }: CardProps) {
  return (
    <div
      className={`rounded-xl shadow-sm border p-5 animate-fadeIn ${hover ? 'cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200' : ''} ${className}`}
      style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
