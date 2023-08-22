const path = require('path');

const express = require('express');
const productscontrooler = require('../controllers/products');


const rootDir = require('../helpers/path');

const router = express.Router();

router.get('/success', productscontrooler.successproducts );

module.exports = router;
