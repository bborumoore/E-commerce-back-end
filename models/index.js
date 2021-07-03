const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// * `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.
// * `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

// Link products to a Category using foreign Key
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Link categories to a product using foreign Key: one-to-many relationship
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Link products to tags using foreign Key: one-to-many relationship
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Link tags to a product using foreign Key: this makes it a many-to-many relationship
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
