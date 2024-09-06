var express = require('express');
var productController = require('../controller/product')
var userController = require('../controller/user')
var router = express.Router();

router.post('/Create',userController.Secure,productController.productCreate)
router.get('/',userController.Secure,productController.ProductAll)
router.get('/:id',userController.Secure,productController.productSingle)
router.patch('/:id',userController.Secure,productController.ProductUpdate)
router.delete('/:id',userController.Secure,productController.ProductDelete)


module.exports = router;
