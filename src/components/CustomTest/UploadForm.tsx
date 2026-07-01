import { useState } from 'react';
import { Upload, Trash2 } from 'lucide-react';
import Button from '../ui/Button';

interface CustomQuestion {
  text: string;
  answer: string;
}

export default function UploadForm({ onUpload }: { onUpload: (questions: CustomQuestion[]) => void }) {
  const [questions, setQuestions] = useState<CustomQuestion[]>([]);
  const [text, setText] = useState('');
  const [answer, setAnswer] = useState('');

  const addQuestion = () => {
    if (!text.trim() || !answer.trim()) return;
    setQuestions((prev) => [...prev, { text: text.trim(), answer: answer.trim() }]);
    setText('');
    setAnswer('');
  };

  const removeQuestion = (i: number) => {
    setQuestions((prev) => prev.filter((_, idx) => idx !== i));
  };

  return (
    <div className="border rounded-lg p-6" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
      <h3 className="font-serif font-bold mb-4" style={{ color: 'var(--primary)' }}>Добавить свой тест</h3>

      <div className="flex flex-col gap-3 mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Текст вопроса"
          className="px-3 py-2 rounded-md border text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
          style={{ background: 'var(--card)', borderColor: 'var(--border)', color: 'var(--text)' }}
        />
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Правильный ответ"
          className="px-3 py-2 rounded-md border text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
          style={{ background: 'var(--card)', borderColor: 'var(--border)', color: 'var(--text)' }}
        />
        <Button variant="secondary" onClick={addQuestion}>Добавить вопрос</Button>
      </div>

      {questions.length > 0 && (
        <div className="flex flex-col gap-2 mb-4">
          {questions.map((q, i) => (
            <div key={i} className="flex items-center gap-2 p-2 rounded border text-sm" style={{ borderColor: 'var(--border)' }}>
              <span className="flex-1" style={{ color: 'var(--text)' }}>{q.text}</span>
              <span className="text-xs px-2 py-0.5 rounded" style={{ background: 'var(--color-success)', color: '#fff' }}>{q.answer}</span>
              <button onClick={() => removeQuestion(i)} className="p-1 hover:opacity-70" style={{ color: 'var(--color-error)' }}>
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      )}

      {questions.length > 0 && (
        <Button onClick={() => onUpload(questions)}>
          <Upload size={16} className="inline mr-2" />
          Начать тест ({questions.length} вопросов)
        </Button>
      )}
    </div>
  );
}
