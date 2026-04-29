const express = require("express");
const app = express();

const greeting = process.env.GREETING || "Hello from your deployed app!";

// HOME ROUTE (fixes Cannot GET /)
app.get("/", (req, res) => {
  res.send("Server is running. Go to /api/message");
});

// REQUIRED API ROUTE (Practice 12)
app.get("/api/message", (req, res) => {
  res.json({ message: greeting });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
