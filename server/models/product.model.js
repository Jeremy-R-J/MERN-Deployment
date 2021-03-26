// Step 1: Import mongoose
const mongoose = require('mongoose');

// Step 2: Create a schema (aka a set of rules for our models to adhere to)
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet name is required"],
        minlength: [3, "Product name must be at least 3 characters in length."]
    },
    price: {
        type: String,
        required: [true, "Everything has its type!"],
        minlength: [3, "type has to be something, nothing is less then 3 characters."]
    },
    description: {
        type: String,
        required: [true, "Yes please tell me anbout it!"],
        minlength: [3, "Lazy, make me a description."]
    },
    skill1: {
        type: String,
        
    },
    skill2: {
        type: String,
        
    },
    skill3: {
        type: String,
        
    }
}, { timestamps: true });

// Step 3: Create a mongoose model out of that schema
const Product = mongoose.model('product', ProductSchema);

// Step 4: export that model
module.exports = Product;