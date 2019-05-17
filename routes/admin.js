const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const product = [];
// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  //console.log(req.body);
  product.push({title: req.body.title});
  res.redirect('/');
});

//module.exports = router;
exports.routers = router;
exports.product = product;