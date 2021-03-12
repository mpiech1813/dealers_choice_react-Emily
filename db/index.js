const Sequelize  = require('sequelize');
const { DataTypes, Model } = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/kb_creamery_2', { logging: false });

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
  orderNumber: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true
  }
},
  { sequelize: db, modelName: 'Order' }
);

// Order.belongsToMany( Month, { through: 'MonthsOrdered' });
Order.belongsTo( Month );
// Month.hasMany( Order );
Order.belongsTo( Customer );

// check on the type of magic method for returning both month and customer information
// Order.getDetails = function (id) {
//   return this.findOnce({
//     include: {
//       model: Month,
//     }
//   })
// }

module.exports = {
  Customer,
  Month,
  Order,
  db
}
