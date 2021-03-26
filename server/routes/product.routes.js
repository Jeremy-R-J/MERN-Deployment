// import my controller if i'm going to use its methods here
const controller = require('../controllers/product.controller');

// our routes is a function that accepts the express application as a parameter
module.exports = app => {
    // C
    app.post('/api/product', controller.createProduct)
    // R
    app.get('/api/product', controller.getAllProduct)
    app.get('/api/product/:id', controller.getOneProduct)
    // U
    app.put('/api/product/:id', controller.updateProduct)
    // D
    app.delete('/api/product/:id', controller.deleteProduct)
}