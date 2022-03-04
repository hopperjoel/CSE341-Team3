// Controller for sending product info to be displayed in view

const fs = require('fs');

const Products = require('../models/products');

/*
 
// From: https://stackoverflow.com/questions/24523532/how-do-i-convert-an-image-to-a-base64-encoded-data-url-in-sails-js-or-generally
function base64_encode (file) {
    // Return file as a base64 encoded string
    return fs.readFileSync(file, 'base64');
}
 
exports.getProfessionalData = (req, res, next) => {
    res
        .status(200)
        .json({
            githubLink: {
                text: "David's Github",
                link: "https://github.com/Skhoooler"
            },
            base64Image: base64_encode('res\\image.jpg')
        });
};

*/