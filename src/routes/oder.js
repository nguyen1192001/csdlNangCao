const express = require('express')
const router = express.Router();


const OderController = require('../app/controller/OderController')
router.get('/',OderController.index)

module.exports = router;