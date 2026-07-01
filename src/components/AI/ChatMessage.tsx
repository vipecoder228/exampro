export default function ChatMessage({ role, content }: { role: 'user' | 'assistant'; content: string }) {
  return (
    <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className="max-w-[80%] px-3 py-2 rounded-lg text-sm"
        style={{
          background: role === 'user' ? 'var(--accent)' : 'var(--border)',
          color: role === 'user' ? '#fff' : 'var(--text)',
        }}
      >
        {content}
      </div>
    </div>
  );
}
