const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');

const ProductSchema = new Schema({
  name: { type: String, required: true, minlength: [3, 'Name must be longer than 3 characters'] },
  qty: { type: Number, required: true, min: [0, 'Qty Must be a Positive Number'], max: [99999, 'To many for our inventory'] },
  price: { type: Number, required: true, min: [0.01, 'Price must be greater than or equal to 1 penny'] }
});

ProductSchema.plugin(autoIncrement.plugin,"Product");

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product
