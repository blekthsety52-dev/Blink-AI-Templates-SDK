// src/lib/gemini-client.ts
export async function askGemini(
  prompt: string,
  history: { role: string; parts: { text: string }[] }[] = [],
  systemInstruction?: string
): Promise<string> {
  const res = await fetch('/api/gemini', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, history, systemInstruction }),
  });

  if (!res.ok) {
    const { error } = await res.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(error ?? `HTTP ${res.status}`);
  }

  const { text } = await res.json();
  return text;
}
