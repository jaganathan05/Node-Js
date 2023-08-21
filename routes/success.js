const path = require('path');

const express = require('express');

const rootDir = require('../helpers/path');

const router = express.Router();

router.get('/success', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'success.html'));
});


module.exports = router;
