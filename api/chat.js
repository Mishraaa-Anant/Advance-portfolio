// Vercel Serverless Function — /api/chat.js
// The GROQ_API_KEY is stored securely in Vercel Environment Variables
// and is NEVER exposed to the browser or GitHub.

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";

module.exports = async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return res
      .status(500)
      .json({ error: "API key not configured on the server." });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid request body." });
    }

    const groqResponse = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        max_tokens: 1000,
        temperature: 0.7,
        messages: messages,
      }),
    });

    if (!groqResponse.ok) {
      const errorData = await groqResponse.json();
      return res
        .status(groqResponse.status)
        .json({ error: errorData.error?.message || "Groq API error" });
    }

    const data = await groqResponse.json();
    const reply = data.choices[0].message.content;

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Serverless function error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
}
