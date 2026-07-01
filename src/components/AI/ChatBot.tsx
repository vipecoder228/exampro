import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Trash2 } from 'lucide-react';
import { useAI } from '../../hooks/useAI';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

interface Props {
  context?: { subject?: string; topic?: string; question?: string };
}

export default function ChatBot({ context }: Props) {
  const [open, setOpen] = useState(false);
  const { messages, loading, error, send, clear } = useAI(context);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('exampro-ai-key') ?? '');

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text: string) => {
    if (!apiKey) {
      const key = prompt('Введите OpenAI API ключ:');
      if (key) {
        localStorage.setItem('exampro-ai-key', key);
        setApiKey(key);
        send(text, key);
      }
      return;
    }
    send(text, apiKey);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-40 hover:scale-105 transition-transform"
        style={{ background: 'var(--accent)', color: '#fff' }}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {open && (
        <div
          className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] rounded-xl shadow-xl border flex flex-col z-40"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
            <h3 className="font-serif font-bold text-sm" style={{ color: 'var(--primary)' }}>ИИ-помощник</h3>
            <button onClick={clear} className="p-1 hover:opacity-70" style={{ color: 'var(--text-secondary)' }} title="Очистить чат">
              <Trash2 size={14} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <p className="text-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                Задайте вопрос по подготовке к экзамену
              </p>
            )}
            {messages.map((msg, i) => (
              <ChatMessage key={i} role={msg.role} content={msg.content} />
            ))}
            {loading && (
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
                Думаю...
              </div>
            )}
            {error && (
              <p className="text-sm text-center" style={{ color: 'var(--color-error)' }}>{error}</p>
            )}
            <div ref={messagesEndRef} />
          </div>

          <ChatInput onSend={handleSend} disabled={loading} />
        </div>
      )}
    </>
  );
}
