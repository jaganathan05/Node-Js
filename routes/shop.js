const path = require('path');

const express = require('express');

const productscontrooler = require('../controllers/products');

const router = express.Router();

router.get('/', productscontrooler.getproducts );

module.exports = router;
