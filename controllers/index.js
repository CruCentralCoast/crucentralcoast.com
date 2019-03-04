const express = require('express');
const router = express.Router();

// example.com
router.get('/', (req, res) => {
  res.render('home', { layout: '' });
});

router.get('/leadership', (req, res) => {
  res.render('leadership', { page: 'leadership' });
});

router.get('/support', (req, res) => {
  res.render('support', { layout: '' });
})

router.get('/slo', (req, res) => {
  res.redirect(req.protocol + '://slo.' + req.headers.host);
})

router.get('*', (req, res) => {
  res.redirect(req.protocol + '://slo.' + req.headers.host + req.path);
})

module.exports = router;