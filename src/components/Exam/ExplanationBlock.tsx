export default function ExplanationBlock({ explanation }: { explanation: string }) {
  return (
    <div className="mt-3 p-3 rounded-md text-sm" style={{ background: 'var(--border)' }}>
      <p className="font-medium mb-1" style={{ color: 'var(--text)' }}>Разбор:</p>
      <p style={{ color: 'var(--text-secondary)' }}>{explanation}</p>
    </div>
  );
}
