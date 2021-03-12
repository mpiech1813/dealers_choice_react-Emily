const { Month, Customer, Order } = require('../db/seed');
const orderRouter = require('express').Router();

orderRouter.get('/', async (req, res, next) => {
  try {
    const allOrders = await Order.findAll({
      include: [
        {
        model: Month,
        attributes: []
        },
        {
        model: Customer
        }
      ]
  });
    res.send(allOrders);
  }
  catch (error) {
    console.log(`trouble with your order '/' get route: ${error}`);
    next(error);
  }
})


orderRouter.get('/:id', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        id: req.params.id,
        include: {
          model: { Month, Customer }
        }
      }
    })
    res.send(order);
  }
  catch (error) {
    console.log(`trouble with your order '/:id' get route: ${error}`);
    next(error);
  }
})

orderRouter.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create({
      where: {
        orderPlaced: req.body.orderPlaced,
        month_id: req.body.month,
        customer_id: req.body.customer
      }
    })
  }
  catch (error) {
    console.log(`trouble with your order '/' post route: ${error}`);
    next(error);
  }
})

orderRouter.put('/', async (req, res, next) => {
  try {

  }
  catch (error) {
    console.log(`trouble with your order '/' put route: ${error}`);
    next(error);
  }
})

module.exports = orderRouter
