const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  return res.status(404).json({
    "friends": [
      "deathhound"
    ]
  });
});

router.get('/deathhound', (req, res) => {
  return res.status(200).json({
    "name": "deathhound",
    "discord": "DeathHound#8339",
    "how": "discord"
  });
});

module.exports = router;