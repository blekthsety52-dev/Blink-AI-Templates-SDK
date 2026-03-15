import { GoogleGenerativeAI } from '@google/genai';

const MODEL = 'gemini-2.0-flash';
const MAX_TOKENS = 2048;

// Primitive rate limiter (in-memory, per cold start)
const requestLog = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const window = 60_000; // 1 minute
  const limit = 20;      // requests per IP per minute
  const timestamps = (requestLog.get(ip) || []).filter(t => now - t < window);
  if (timestamps.length >= limit) return true;
  requestLog.set(ip, [...timestamps, now]);
  return false;
}

export default async function handler(req, res) {
  // CORS — restrict to your own origin
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const ip = req.headers['x-forwarded-for']?.split(',')[0] || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please slow down.' });
  }

  const { prompt, history = [], systemInstruction } = req.body ?? {};
  if (!prompt || typeof prompt !== 'string' || prompt.length > 8000) {
    return res.status(400).json({ error: 'Invalid prompt.' });
  }

  try {
    const genai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genai.getGenerativeModel({
      model: MODEL,
      ...(systemInstruction ? { systemInstruction } : {}),
    });

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(prompt);
    const text = result.response.text();

    return res.status(200).json({ text });
  } catch (err) {
    console.error('Gemini error:', err);
    return res.status(502).json({ error: 'AI service error. Please try again.' });
  }
}
