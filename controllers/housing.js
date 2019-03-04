const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('https://crucentralcoasthousing.lefora.com/');
})

module.exports = router;