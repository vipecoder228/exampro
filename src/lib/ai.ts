const AI_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const AI_MODEL = 'gpt-3.5-turbo';

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
      max_tokens: 1000,
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    throw new Error(`AI API error: ${res.status}`);
  }

  const data = await res.json();
  return data.choices[0]?.message?.content ?? 'Нет ответа от ИИ.';
}

export function buildSystemPrompt(context?: { subject?: string; topic?: string; question?: string }): string {
  let prompt = 'Ты — помощник по подготовке к ЕГЭ и ОГЭ. Отвечай кратко и по делу. Объясняй пошагово.';
  if (context?.subject) prompt += `\nПредмет: ${context.subject}.`;
  if (context?.topic) prompt += `\nТема: ${context.topic}.`;
  if (context?.question) prompt += `\nВопрос: ${context.question}`;
  return prompt;
}
