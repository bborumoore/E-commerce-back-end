const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'mouse',
  },
  {
    tag_name: 'monitor',
  },
  {
    tag_name: 'license',
  },
  {
    tag_name: 'long-sleeve',
  },
  {
    tag_name: 'RGB',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'free trial',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
