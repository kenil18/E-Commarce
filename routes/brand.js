var express = require('express');
var BrandController = require('../controller/brand')
var userController = require('../controller/user')
var router = express.Router();

router.post('/Create',userController.Secure,BrandController.BrandCreate)
router.get('/',userController.Secure,BrandController.BrandAll)
router.get('/:id',userController.Secure,BrandController.BrandSingle)
router.patch('/:id',userController.Secure,BrandController.BrandUpdate)
router.delete('/:id',userController.Secure,BrandController.BrandDelete)

module.exports = router;
