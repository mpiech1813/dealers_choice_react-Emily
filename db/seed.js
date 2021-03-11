const { Customer, Month, Order, db } = require('./index');

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    console.log("*** Tables Dropped");
    const julie = Customer.create({ name: 'julie'});
    // const [ julie, tim, asha ] = await Promise.all(
    //   ['julie', 'tim', 'asha'].map((name) => {Customer.create({name})}))
  }
  catch (error) {
    console.log(`Trouble seeding data to your db! ${error}`)
  }
}

module.exports = syncAndSeed
