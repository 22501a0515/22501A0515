require('dotenv').config();
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const token = process.env.TOKEN;
    const response = await fetch('http://20.244.56.144/evaluation-service/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.status(response.status).json(data);

  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
