const express = require("express");
const router = express.Router();

router.use('/friends', require('./friends'));

router.get('/', (req, res) => {
  return res.status(200).json({
    "success": true,
    "name": "nav",
    "discord": "Nav#8153",
    "discord-server": "not ready"
  });
});

module.exports = router;