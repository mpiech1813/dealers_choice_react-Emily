const { Month, Customer, Order } = require('../db/seed');
const monthsRouter = require('express').Router();


monthsRouter.get('/', async(req, res, next) => {
  try {
    const response = await Month.findAll();
    // console.log(response)
    res.send(response);
  }
  catch (error) {
    console.log(`There's a problem with your months '/' route: ${error}`);
    next(error);
  }
})

module.exports = monthsRouter
