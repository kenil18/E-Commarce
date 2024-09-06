var express = require('express');
var orderController = require('../controller/order')
var router = express.Router();

router.post('/create',orderController.orderCreate)
router.get('/',orderController.orderAll)
router.get('/:id',orderController.orderSingle)
router.patch('/:id',orderController.orderUpdate)

module.exports = router;
