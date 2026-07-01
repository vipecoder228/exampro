import { type InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, className = '', ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium" style={{ color: 'var(--text)' }}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`px-3 py-2 rounded-md border text-sm outline-none focus:ring-2 focus:ring-[var(--accent)] transition-shadow ${className}`}
        style={{ background: 'var(--card)', borderColor: error ? 'var(--color-error)' : 'var(--border)', color: 'var(--text)' }}
        {...props}
      />
      {error && <span className="text-xs" style={{ color: 'var(--color-error)' }}>{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
