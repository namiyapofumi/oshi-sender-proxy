export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const senderResponse = await fetch("https://api.sender.net/forms/bmZnM0/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const text = await senderResponse.text();

    // Pass Sender's response back to the browser
    return res.status(senderResponse.status).send(text);

  } catch (err) {
    return res.status(500).json({ error: err.toString() });
  }
}
