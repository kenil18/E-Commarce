var express = require('express');
var userController = require('../controller/user')
var router = express.Router();

router.post('/signup',userController.UserCreate)
router.post('/login',userController.userLogin)
router.get('/',userController.Secure,userController.AllData)
router.get('/:id',userController.Secure,userController.SingleData)
router.patch('/:id',userController.Secure,userController.UserUpdate)
router.delete('/:id',userController.Secure,userController.delete)

module.exports = router;
