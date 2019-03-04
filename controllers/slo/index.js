const express = require('express');
const router = express.Router();

//slo specific routes
router.get('/', function (req, res) {
  res.render('slo/home', { page: 'home' });
});

router.get('/about', function (req, res) {
  res.render('slo/about', { page: 'about' });
});

router.use('/staff', require('./staff'))

router.get('/history', function (req, res) {
  res.render('slo/history', { page: 'history' });
});

router.get('/involvement', function (req, res) {
  res.render('slo/involvement', { page: 'involvement' });
});

router.use('/ministry', require('./ministry'))

router.get('/missions', function (req, res) {
  res.render('slo/missions', { page: 'missions' });
});

router.get('/construction', function (req, res) {
  res.render('slo/construction', { layout: '' });
});

router.get('/studies', (req, res) => {
  res.redirect('/construction');
})

router.use('/resources', require('./resources'))

router.get('/sermons', (req, res) => {
  res.redirect('/construction');
})

router.get('/leadership', (req, res) => {
  let url = req.headers.host.split('slo.')
  res.redirect(req.protocol + '://' + url[1] + '/leadership');
})

router.get('/ccc', (req, res) => {
  let url = req.headers.host.split('slo.')
  res.redirect(req.protocol + '://' + url[1]);
})

module.exports = router;
