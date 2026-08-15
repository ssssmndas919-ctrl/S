const express = require('express');
const router = express.Router();
const {
  createOrder,
  verifyPayment,
  getBuyerOrders,
  getSellerOrders,
  completeOrder,
  acceptOrder,
  cancelOrder
} = require('../controllers/orderController');
const auth = require('../middleware/auth');

// All order routes require authentication
router.post('/', auth, createOrder);
router.post('/verify-payment', auth, verifyPayment);
router.get('/buyer', auth, getBuyerOrders);
router.get('/seller', auth, getSellerOrders);
router.put('/:orderId/complete', auth, completeOrder);
router.put('/:orderId/accept', auth, acceptOrder);
router.put('/:orderId/cancel', auth, cancelOrder);

module.exports = router;
