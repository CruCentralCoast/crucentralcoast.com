const express = require('express');
const router = express.Router();
let getStaff = require('../../models/staff');

//slo specific routes
router.get('/', function (req, res) {
  getStaff().then((staff) => {
    res.render('slo/staff', { page: 'staff', staff: staff });
  })
});

module.exports = router;