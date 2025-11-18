module.exports = (req, res) => {
  // 1. Set CORS Headers (Crucial for all origins, especially POST/OPTIONS)
  // Replace 'https://oshiflavors.com' with your frontend domain, 
  // or use '*' for all origins if you prefer.
  res.setHeader('Access-Control-Allow-Origin', 'https://oshiflavors.com'); 
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 2. Handle the OPTIONS Preflight Request
  if (req.method === 'OPTIONS') {
    res.status(200).end(); // Send 200 OK and finish the request
    return; // Stop processing the rest of the file
  }

  // --- Start your original POST subscription logic here ---
  if (req.method === 'POST') {
    try {
      // Assuming your original logic involves parsing the body
      const { email } = req.body; 

      if (!email) {
        res.status(400).send('Email is required.');
        return;
      }
      
      // *** Insert your actual email subscription database/mailing list code here ***
      // Example: 
      // await saveEmailToDatabase(email); 

      // Send a successful response back to the frontend
      res.status(200).json({ message: "Subscription successful!" });

    } catch (error) {
      console.error("Subscription Error:", error);
      res.status(500).send('Internal Server Error during subscription process.');
    }
  } else {
    // If it's neither POST nor OPTIONS (e.g., a GET request)
    res.status(405).send('Method Not Allowed');
  }
};
