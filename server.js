const syncAndSeed = require('./db/seed');
const db = require('./db/index');
const app = require('./api/app.js');
const port = process.env.PORT || 3000;

// app.use('/api', require('./api/app'));
// app.use('/api', require('./routes/index'));

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
