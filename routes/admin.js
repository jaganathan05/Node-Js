const path = require('path');

const express = require('express');

const productscontrooler = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productscontrooler.getaddproduct);

// /admin/add-product => POST
router.post('/add-product', productscontrooler.Postaddproducts );

router.get('/success', productscontrooler.successproducts );

router.get('/contact', productscontrooler.contactuser);
router.post('/contact', productscontrooler.contactPost);
module.exports = router;
