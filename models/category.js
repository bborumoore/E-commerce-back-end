const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Category extends Model {}

// Category needs id and category_name
//
// * `Category`

// * `id`
//   * Integer.
//   * Doesn't allow null values.
//   * Set as primary key.
//   * Uses auto increment.

// * `category_name`
//   * String.
//   * Doesn't allow null values.

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
