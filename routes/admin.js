var express = require('express');
var adminController = require('../controller/admin')
var router = express.Router();

router.post('/signup',adminController.adminCreate)
router.post('/login',adminController.adminLogin)
router.get('/',adminController.AllData)
router.get('/:id',adminController.SingleData)
router.patch('/:id',adminController.AdminUpdate)
router.delete('/:id',adminController.delete)

module.exports = router;
