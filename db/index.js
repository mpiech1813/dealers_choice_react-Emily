const { DataTypes,  Model, Sequelize } = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:3000/kb_creamery_2', { logging: false });

class Customer extends Model {};

Customer.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: false
    }
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  }
},
  { sequelize: db, modelName: 'Customer' }
);

class Month extends Model {};

Month.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  flavor1: {
    type: DataTypes.STRING,
  },
  flavor2: {
    type: DataTypes.STRING,
  }
},
  { sequelize: db, modelName: 'Month' }
);

class Order extends Model {};

Order.init({
  orderPlaced: {
    type: DataTypes.BOOLEAN,
  }
},
  { sequelize: db, modelName: 'Order' }
);

Order.belongsTo(Month);
Order.belongsTo(Customer);

// check on the type of magic method for returning both month and customer information
Order.findMonths = function (id) {
  return this.findOnce({
    include: {
      model: Month,
    },
    where: {
      id
    }
  })
}

module.exports = {
  Customer,
  Month,
  Order,
  db
}
