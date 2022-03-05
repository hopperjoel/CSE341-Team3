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
    //Do we need to add another field with the number of purchases?
    //That would be for the "popular items" that display on the homepage
})


module.exports = mongoose.model('Products', productSchema);