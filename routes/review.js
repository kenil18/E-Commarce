var express = require('express');
var reviewController = require('../controller/review')
var userController = require('../controller/user')

var router = express.Router();

router.post('/Create',userController.Secure,reviewController.reviewCreate)
router.get('/',userController.Secure,reviewController.reviewAll)
router.get('/:id',userController.Secure,reviewController.reviewSingle)
router.patch('/:id',userController.Secure,reviewController.reviewUpdate)

module.exports = router;
