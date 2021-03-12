const router = require('express').Router();

router.use('/months', require('./monthsRouter'));
router.use('/orders', require('./ordersRouter'));
router.use('/customers', require('./customersRouter'));


module.exports = router
