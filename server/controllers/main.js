const  Product = require("../models/products");

module.exports = {
  get_products(req,res){
    Product.find({})
    .then(data => res.json(data))
    .catch(error => console.log(error))
  },
  get_product(req,res){
    console.log(req.params.id);
    Product.findById(parseInt(req.params.id)).then(data => res.json(data)).catch(err => res.json({"error": err.message}));
  },
  add_product(req,res){
    Product.create(req.body)
      .then(data => res.json(data))
      .catch(error => res.json({"error": error.message}));
  },
  delete_product(req,res){
    Product.findByIdAndDelete(parseInt(req.params.id))
      .then(data => res.json(data))
      .catch(error => console.log(error));
  },
  update_product(req,res){
    const { price, name, qty } = req.body;
    const { id } = req.params;
    Product.findById(parseInt(id), (err,doc)=>{
      doc.price = price;
      doc.name = name;
      doc.qty = qty;
      doc.validate((err)=>{
        if (err) { res.json({"error": err.message }) }
        else { doc.save() }
      });
    }).then((data)=> res.json(data))
      .catch(err => console.log(err.message));
  }
}
