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
      className={`rounded-lg shadow-sm border p-5 ${hover ? 'cursor-pointer hover:shadow-md transition-shadow' : ''} ${className}`}
      style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
