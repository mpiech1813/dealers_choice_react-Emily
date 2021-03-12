const { syncAndSeed, db } = require('./db/seed');
const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '/public')));

app.use('/api', require('./api/app'));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '/public/index.html')));


const init = async () => {
  try {
    db.authenticate();
    await syncAndSeed();
    app.listen(port, () => {
      console.log(`App listening on port ${port}!`)})
  }
  catch (error) {
    console.log('The server is not connected to the port!', error)
  }
}

init();
