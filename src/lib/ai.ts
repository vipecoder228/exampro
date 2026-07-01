const AI_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const AI_MODEL = 'gpt-4o-mini';

export async function sendAIMessage(
  messages: { role: 'user' | 'assistant' | 'system'; content: string }[],
  apiKey: string
): Promise<string> {
  const res = await fetch(AI_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: AI_MODEL,
      messages,
      max_tokens: 1500,
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    throw new Error(`AI API error: ${res.status}`);
  }

  const data = await res.json();
  return data.choices[0]?.message?.content ?? 'Нет ответа от ИИ.';
}

export function buildSystemPrompt(context?: { subject?: string; topic?: string; question?: string; wrongAnswer?: string; correctAnswer?: string }): string {
  let prompt = `Ты — опытный репетитор по подготовке к ЕГЭ и ОГЭ.

Правила:
- Объясняй пошагово, разбивай сложное на простые части
- Приводи конкретные примеры и формулы где уместно
- Используй простой язык, избегай канцеляризмов
- Если тема связана с формулами — записывай их
- Отвечай на русском языке
- Будь лаконичным, но полным`;
  if (context?.subject) prompt += `\n\nПредмет: ${context.subject}.`;
  if (context?.topic) prompt += `\nТема: ${context.topic}.`;
  if (context?.question) prompt += `\nВопрос: ${context.question}`;
  if (context?.wrongAnswer && context?.correctAnswer) {
    prompt += `\n\nУченик ответил: "${context.wrongAnswer}"
Правильный ответ: "${context.correctAnswer}"
Объясни почему ответ неправильный и как добраться до правильного ответа пошагово.`;
  }
  return prompt;
}
