const router = require("express").Router();
const productsRouter = require("./products.router");

module.exports = router.use("/products",productsRouter);
