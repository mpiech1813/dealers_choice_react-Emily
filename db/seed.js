const { Customer, Month, Order, db } = require('./index');


const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    console.log("*** Tables Dropped");
    const customers = await Promise.all([
      Customer.create({ name: 'Julie', email: 'julie@gmail.com'}),
      Customer.create({ name: 'Tim', email: 'tim@gmail.com'}),
      Customer.create({ name: 'Sally', email: 'sally@gmail.com'})
    ])
    const months = await Promise.all([
      Month.create({ name:'January', flavor1: 'Oh Lemon', flavor2: 'Blueberry' }),
      Month.create({ name: 'February', flavor1: 'Heath Bar Crunch', flavor2: 'Missing Chocolate' }),
      Month.create({ name: 'March', flavor1: 'Butter Brickle', flavor2: 'Blueberry-Lemon Cheesecake' }),
      Month.create({ name: 'April', flavor1: 'Cherry', flavor2: 'Madagascar Vanilla' }),
      Month.create({ name:'May', flavor1: 'Chocolate Brownie', flavor2: 'Pralines & Cream' }),
      Month.create({ name:'June', flavor1: 'Strawberry', flavor2: 'Straciatella' }),
      Month.create({ name: 'July', flavor1: 'Mojito', flavor2: 'Tahitian Vanilla' }),
      Month.create({ name: 'August', flavor1: 'Mexican Vanilla', flavor2: 'Cookies & Cream' }),
      Month.create({ name: 'September', flavor1: 'Salted Caramel', flavor2: 'Orange Sherbet' }),
      Month.create({ name: 'October', flavor1: 'Pear Caramel', flavor2: 'Apple Pie' }),
      Month.create({ name: 'November', flavor1: 'Butterscotch Pecan', flavor2: 'Pumpkin Cheesecake' }),
      Month.create({ name: 'December', flavor1: 'Almond Roca', flavor2: 'Peppermint Bark' })
    ])
    const order1 = await Order.create({
      customerId: 2,
      // {
      //   where: {
      //     [customers[0].id]: 2
      //    }}, // returns an empty array w/o [1]
      monthId: 4
      // {
      //   where: {
      //     [months[0].id]: 4
      //   }}
    })
    // const order1 = Order.create();
    // await order1.getMonth(months)
  }
  catch (error) {
    console.log(`Trouble seeding data to your db! ${error}`)
  }
}


module.exports = {
    Customer,
    Month,
    Order,
    db,
    syncAndSeed
  }
