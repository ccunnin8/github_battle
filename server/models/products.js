const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');

const ProductSchema = new Schema({
  name: { type: String, required: true, minlength: 3 },
  qty: { type: Number, required: true, min: 0, max: 99999 },
  price: { type: Number, required: true, min: 0.01 }
});

//ProductSchema.plugin(autoIncrement.plugin,"Product");

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product
