const  Product = require("../models/products");

module.exports = {
  get_products(req,res){
    Product.find({})
    .then(data => res.json(data))
    .catch(error => console.log(error))
  },
  add_product(req,res){
    Product.create(req.body)
      .then(data => res.json(data))
      .catch(error => console.log(error));
  },
  delete_product(req,res){
    Product.findByIdAndDelete(req.params.id)
      .then(data => res.json(data))
      .catch(error => console.log(error));
  },
  update_product(req,res){
    const { game, status } = req.body;
    const { id } = req.params;
    Product.findById(id, (err,doc)=>{

    }).then((data)=> res.json(data))
      .catch(err => console.log(err.message));
  }
}
