const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Hardware',
  },
  {
    category_name: 'Produce',
  },
  {
    category_name: 'Clothing',
  },
  {
    category_name: 'Software',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
