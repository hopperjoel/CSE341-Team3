//Controller for admin functions including adding, editing, or deleting projects

const Product = require('../../models/products');

//Not sure about requiring express-validator with using API's?

exports.postAddProduct = (req, res, next) => {
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
    const productId = req.body.productId;
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
    .then(product => {
        if (product.userId.toString() !== req.user._id.toString) {
            return res.status(400).json({
                message: "Product id not found"
            })
        }
    })
    product
        .save()
        .then((result) => {
            res.status(201).json({
                message: "Product Successfully Edited"
            })
        })
        .catch(err => console.log(err)) // or send the error through the response?
};


exports.postDeleteProduct = (req, res, next) => {
    const productId = req.body.productId;
    
    Product.findByIdAndDelete(productId)
    .then(result => {
        res.status(200).json({
            message: "Product Deleted"
        })
    })
};