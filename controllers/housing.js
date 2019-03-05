const express = require('express');
const router = express.Router(); // eslint-disable-line

router.get('/', (req, res) => {
  res.redirect('https://crucentralcoasthousing.lefora.com/');
});

module.exports = router;
