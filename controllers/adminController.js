/****************************************************
 * Admin Controller
 * 
 * Controller for admin functions including adding,
 * editing, or deleting products
 ***************************************************/
const Product = require('../models/products');

//Not sure about requiring express-validator with using API's?

/****************************************************
 * GET Controllers
 ****************************************************/

exports.getEditProduct = (req, res, next) => {
    const productId = "6226c42cadeab28915b23328";
    //const productId = req.body.productId;
    Product.findById(productId)
        .then(result => {
            return res.status(200).json({result})
        })
        .catch(err => {console.log(err)})
}

/****************************************************
 * POST Controllers
 ****************************************************/
exports.putAddProduct = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const image = req.body.image;

    // not sure how to handle errors...

    const product = new Product({
        title: title,
        price: price,
        description: description,
        image: image
    });
    product
        .save()
        .then((result) => {
            res.status(201).json({
                message: 'Product Successfully Added'
            })
        }) 
};

exports.postEditProduct = (req, res, next) => {
    const productId = req.body._id;
    const newTitle = req.body.title;
    const newPrice = req.body.price;
    const newDescription = req.body.description;
    const newImage = req.body.image;

    const product = new Product({
        title: newTitle,
        price: newPrice,
        description: newDescription,
        image: newImage
    });

    Product.findById(productId)
        .then((product) => {
            product.title = newTitle;
            product.price = newPrice;
            product.imageURL = newImage;
            product.description = newDescription;
            product.save();
        })
        .then((result) => {
            res.status(201).json({
                message: 'Product Successfully Edited'
            })
        })
        .catch((err) => {
            res.status(404).json({
                message: 'Product Not Found'
            })
        });
};


exports.postDeleteProduct = (req, res, next) => {
    const productId = req.body.productId;

};

