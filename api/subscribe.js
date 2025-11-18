export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email required" });
  }

  try {
    const senderRes = await fetch(
      "https://api.sender.net/v2/subscribers", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.SENDER_API_KEY}`
        },
        body: JSON.stringify({
          email: email,
          groups: ["your-group-id-here"]
        })
      }
    );

    const data = await senderRes.json();

    if (!senderRes.ok) {
      return res.status(400).json({ error: data });
    }

    res.status(200).json({ success: true, data });

  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
}
