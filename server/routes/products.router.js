const router = require("express").Router();
const controller = require("../controllers/main.js");

router
    .get("/",controller.get_products)
    .post("/",controller.add_product)
    .get("/:id",controller.get_product)
    .delete("/:id",controller.delete_product)
    .put("/:id",controller.update_product);

module.exports = router;
