import { isRateLimited } from '@/lib/rateLimit'
import { getClientIp } from '@/lib/security'

// Server-side proxy for the MSME checkup's AI analysis.
// The Gemini key lives in GEMINI_API_KEY (server env only — NOT NEXT_PUBLIC_).
// Model and generation settings are fixed here, so callers can only send the prompt.

const MODEL = 'gemini-2.5-flash'
const MAX_PROMPT_CHARS = 20000

export async function POST(request) {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    console.error('[checkup-ai] GEMINI_API_KEY is not set')
    return Response.json({ error: { message: 'Analysis is temporarily unavailable.' } }, { status: 503 })
  }

  try {
    const { prompt } = await request.json()

    if (typeof prompt !== 'string' || prompt.length < 20 || prompt.length > MAX_PROMPT_CHARS) {
      return Response.json({ error: { message: 'Invalid request.' } }, { status: 400 })
    }

    // Keeps this endpoint from being used as a free general-purpose LLM.
    if (await isRateLimited('checkup-ai', getClientIp(request), { max: 5 })) {
      return Response.json(
        { error: { message: 'Too many analyses from this network. Please try again later.' } },
        { status: 429 }
      )
    }

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 3000,
            thinkingConfig: { thinkingBudget: 0 },
          },
        }),
      }
    )

    const data = await res.json()
    if (!res.ok || data.error) {
      console.error('[checkup-ai] Gemini error:', data.error || res.status)
      return Response.json({ error: { message: 'Analysis failed. Please try again.' } }, { status: 502 })
    }

    // Same shape the client already parses (candidates[0].content.parts[0].text).
    return Response.json({ candidates: data.candidates })
  } catch (err) {
    console.error('[checkup-ai] error:', err)
    return Response.json({ error: { message: 'Analysis failed. Please try again.' } }, { status: 500 })
  }
}
