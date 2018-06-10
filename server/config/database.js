const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');

const connection = mongoose.connect("mongodb://localhost/commerce");

//autoIncrement.initialize(mongoose.createConnection("mongodb://localhost/commerce"));

mongoose.connection.on("connected",()=>{
  console.log("connected to database");
});

require("../models/products");
