const express = require('express')
const router = express.Router();


const CustomerController = require('../app/controller/CustomerController')
router.get('/',CustomerController.index)
router.get('/delete/:id',CustomerController.deleteCustommer)
router.get('/update/:id',CustomerController.updateCustommer)
router.get('/add',CustomerController.addCustommer)
router.get('/adddb',CustomerController.addDBCustommer)

module.exports = router;