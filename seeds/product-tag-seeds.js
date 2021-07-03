const { ProductTag } = require('../models');


// Pairings of product_ids and tag_ids
const productTagData = [
  {
    product_id: 1,
    tag_id: 1,
  },
  {
    product_id: 1,
    tag_id: 5,
  },
  {
    product_id: 2,
    tag_id: 2,
  },
  {
    product_id: 2,
    tag_id: 5,
  },
  {
    product_id: 3,
    tag_id: 3,
  },
  {
    product_id: 3,
    tag_id: 8,
  },
  {
    product_id: 4,
    tag_id: 4,
  },
  {
    product_id: 4,
    tag_id: 6,
  },
  {
    product_id: 4,
    tag_id: 7,
  },
  {
    product_id: 5,
    tag_id: 6,
  }
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
