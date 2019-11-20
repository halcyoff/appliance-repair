const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/api', (req, res, next) => {
  console.log('api hit');
});

module.exports = router;
