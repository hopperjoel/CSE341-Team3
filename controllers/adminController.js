/****************************************************
 * Admin Controller
 * 
 * Controller for admin functions including adding,
 * editing, or deleting products
 ***************************************************/
const Products = require('../models/products');

//Not sure about requiring express-validator with using API's?

/****************************************************
 * GET Controllers
 ****************************************************/

exports.getEditProduct = (req, res, next) => {

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

    const product = new Products({
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

    // not sure how to handle errors...

    const product = new Product({
        title: newTitle,
        price: newPrice,
        description: newDescription,
        image: newImage
    });

    Product.findById(productId)
    product
        .save()
        .then((result) => {
            res.status(201).json({
                message: 'Product Successfully Edited'
            })
        }) 
};


exports.postDeleteProduct = (req, res, next) => {

};

// Linds***
// exports.postDeleteProduct = (req, res, next) => {
//     const prodId = req.body.productId;
//     Product.deleteOne({ _id: prodId, userId: req.user._id })
//       .then(() => {
//         console.log('DESTROYED PRODUCT');
//         res.redirect('/admin/products');
//       })
//       .catch(err => {
//         const error = new Error(err);
//         error.httpStatusCode = 500;
//         return next(error);
//       });
//   };