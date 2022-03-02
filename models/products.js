const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Do we want to add quantity or price-per-dozen fields?
const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Products', productSchema);