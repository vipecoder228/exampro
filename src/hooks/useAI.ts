import { useState, useCallback } from 'react';
import { sendAIMessage, buildSystemPrompt } from '../lib/ai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function useAI(context?: { subject?: string; topic?: string; question?: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const send = useCallback(
    async (userMessage: string, apiKey: string) => {
      if (!apiKey) {
        setError('Введите API-ключ в настройках.');
        return;
      }

      const newMessages: Message[] = [...messages, { role: 'user' as const, content: userMessage }];
      setMessages(newMessages);
      setLoading(true);
      setError(null);

      try {
        const systemPrompt = buildSystemPrompt(context);
        const apiMessages = [
          { role: 'system' as const, content: systemPrompt },
          ...newMessages,
        ];
        const reply = await sendAIMessage(apiMessages, apiKey);
        setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Ошибка ИИ');
      } finally {
        setLoading(false);
      }
    },
    [messages, context]
  );

  const clear = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return { messages, loading, error, send, clear };
}
