const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use('/monthRouter', require('./monthsRouter'));
app.use('/orderRouter', require('./ordersRouter'));


module.exports = app
