const { Product } = require('../models');

const productData = [
  {
    product_name: 'Razer Naga',
    price: 84.99,
    stock: 7,
    category_id: 1,
  },
  {
    product_name: 'Acer Predator',
    price: 390.0,
    stock: 3,
    category_id: 1,
  },
  {
    product_name: 'AutoCad License',
    price: 1122.99,
    stock: 90,
    category_id: 4,
  },
  {
    product_name: 'Razer Hoodie',
    price: 62.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Avacado',
    price: 2.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
