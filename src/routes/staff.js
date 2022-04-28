const express = require('express')
const router = express.Router();

const StaffController = require('../app/controller/StaffController');

router.get('/update/:id/:server',StaffController.updateStaff)
router.get('/delete/:id/:server',StaffController.deleteStaff)
router.get('/add/:server',StaffController.addStaff)
router.get('/adddb/:server',StaffController.addDBStaff)
router.get('/:server',StaffController.index)
module.exports = router;