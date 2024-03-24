const order  = require('./db/order.json');
const blogPost = require('./db/blog-post.json');
const product = require('./db/product.json');
const user  = require('./db/user.json');
const weather = require('./db/weather.json');

module.exports = {
  "blog-post": blogPost,
  "order": order,
  "product": product,
  "user": user,
  "weather": weather
}