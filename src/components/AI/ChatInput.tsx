import { useState, type KeyboardEvent } from 'react';
import { Send } from 'lucide-react';

interface Props {
  onSend: (text: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled }: Props) {
  const [value, setValue] = useState('');

  const handleSend = () => {
    if (!value.trim() || disabled) return;
    onSend(value.trim());
    setValue('');
  };

  const handleKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-center gap-2 p-3 border-t" style={{ borderColor: 'var(--border)' }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKey}
        disabled={disabled}
        placeholder="Задайте вопрос..."
        className="flex-1 px-3 py-2 rounded-md border text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
        style={{ background: 'var(--card)', borderColor: 'var(--border)', color: 'var(--text)' }}
      />
      <button
        onClick={handleSend}
        disabled={disabled || !value.trim()}
        className="p-2 rounded-md transition-opacity disabled:opacity-30"
        style={{ background: 'var(--accent)', color: '#fff' }}
      >
        <Send size={16} />
      </button>
    </div>
  );
}
