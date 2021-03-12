const { Month, Customer, Order } = require('../db');
const customersRouter = require('express').Router();

customersRouter.get('/', async (req, res, next) => {
  try {
    const customers = await Customer.findAll();
    res.send(customers);
  }
  catch (error) {
    next(error)
  }
})

module.exports = customersRouter;
