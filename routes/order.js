const express = require('express');


const {getOrders, createOrders, deleteOrders, updateOrder} = require('../controllers/orderController');

const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

//require auth for all order routes
router.use(requireAuth);

router.get('/',getOrders);

router.post('/',createOrders);

router.patch('/:id',updateOrder);

router.delete('/:id',deleteOrders);


module.exports = router;