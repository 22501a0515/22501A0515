const express = require("express");
const router  = express.Router();
const { connect } = require("./helper");

function randomCode(len = 5) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length: len }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}

router.post("/check", async (req, res) => {
  const { url } = req.body;
  if (!url || !url.startsWith("http")) {
    return res.status(400).json({ message: "Invalid URL" });
  }

  const db   = await connect();
  const col  = db.collection("links");

  let short;
  
  while (true) {
    try {
      short = randomCode();
      await col.insertOne({ original: url, short });
      break;               
    } catch (err) {
      if (err.code === 11000) continue; 
      return res.status(500).json({ message: "DB error" });
    }
  }

  res.json({
    message: `Shortened link: http://localhost:5000/${short}`,
    short,
  });
});

module.exports = router;
