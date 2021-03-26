const Product = require('../models/product.model');
const productRoutes = require('../routes/product.routes');


module.exports = {
    createProduct: (req, res) => {
        // Product.create(req.body)
        // .then(product=>res.json(product))
        // .catch(err=>res.json({ message: "error", errors: err.errors }))
        Product.exists({ name: req.body.name })
            .then(productExists => {
                if(productExists){
                    return Promise.reject({ errors: { name: { message: "A product with that name already exists in the database" } } });
                } else {
                    return Product.create(req.body);
                }
            })
            .then(data => res.status(200).json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    getAllProduct: (req, res) => {
        Product.find()
            .then(data => res.status(200).json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    getOneProduct: (req, res) => {
        Product.findById(req.params.id)
            .then(data => res.status(200).json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    updateProduct: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(data => res.status(200).json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err.errors }))
    },
    deleteProduct: (req, res) => {
        Product.remove({ _id: req.params.id })
            .then(data => res.status(200).json({ message: "success", results: data }))
            .catch(err => res.json({ message: "error", errors: err }));
    }
}