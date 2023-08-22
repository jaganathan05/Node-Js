const products = [];
const path = require('path');

const rootDir = require('../helpers/path');
exports.getaddproduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  };

exports.Postaddproducts = (req, res, next) => {
    products.push({Title:req.body.title});
    res.redirect('/');
  }

exports.getproducts = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  };

exports.successproducts = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
  };

exports.contactuser = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
  };

exports.contactPost = (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
  };