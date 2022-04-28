const express = require('express')
const router = express.Router();

const ProductController = require('../app/controller/ProductController');

router.get('/',ProductController.index)
router.get('/delete/:id',ProductController.deleteProduct)
router.get('/update/:id',ProductController.updateProduct)
router.get('/add',ProductController.addProduct)
router.get('/adddb',ProductController.addDBProduct)

module.exports = router;