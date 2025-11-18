export default (req, res) => {
  // 1. Headers set BEFORE ANY LOGIC
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 2. IMMEDIATE check for OPTIONS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end(); // Send the necessary 200 OK status
    return; // THIS IS CRITICAL: Stops execution and prevents 404/500
  }

  // 3. Your POST logic follows
  if (req.method === 'POST') {
    // ... your original subscription code ...
    res.status(200).json({ message: "Subscription successful!" }); 
  } else {
    // Handle other methods
    res.status(405).send('Method Not Allowed');
  }
};
