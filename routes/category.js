var express = require('express');
var categoryController = require('../controller/category')
var userController = require('../controller/user')
var router = express.Router();

router.post('/Create',userController.Secure,categoryController.categoryCreate)
router.get('/',userController.Secure,categoryController.categoryAll)
router.get('/:id',userController.Secure,categoryController.categorySingle)
router.patch('/:id',userController.Secure,categoryController.CategoryUpdate)
router.delete('/:id',userController.Secure,categoryController.CategoryDelete)

module.exports = router;
