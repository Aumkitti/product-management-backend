const Sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Product = Sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  details: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Product;
