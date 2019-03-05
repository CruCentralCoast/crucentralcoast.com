const express = require('express');
const router = express.Router(); // eslint-disable-line
const getStaff = require('../../models/staff');

// slo specific routes
router.get('/', (req, res) => {
  getStaff().then((staff) => {
    res.render('slo/staff', {page: 'staff', staff: staff});
  });
});

module.exports = router;
