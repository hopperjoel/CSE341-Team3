/****************************************************
 * Admin Controller
 * 
 * Controller for admin functions including adding,
 * editing, or deleting products
 ***************************************************/
const Product = require('../models/products');
var fs = require('fs'); // File System

// ***Linds***//
// exports.getProducts = (req, res, next) => {
//     Product.find({ userId: req.user._id })
//       .then(products => {
//         console.log(products);
//         res.render('admin/products', {
//           prods: products,
//           pageTitle: 'Admin Products',
//           path: '/admin/products'
//         });
//       })
//       .catch(err => {
//         const error = new Error(err);
//         error.httpStatusCode = 500;
//         return next(error);
//       });
//   };

//Not sure about requiring express-validator with using API's?


/* base64_encode */
function base64_encode(file) {
    return fs.readFileSync(file, 'base64'); // Returns the image as a base64 encoded string
}

/****************************************************
 * GET Controllers
 ****************************************************/

exports.getEditProduct = (req, res, next) => {
    const productId = req.body.productId;
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
    const userId = req.userId;
    
    if (!userId) {
        res.status(401).json({
            message: "Not authorized to perform this action"
        })
    }
    // not sure how to handle errors...
    const product = new Product({
        title: title,
        price: price,
        description: description,
        image: base64_encode(image),
        userId: userId
    });
    product
        .save()
        .then((result) => {
            res.status(201).json({
                message: 'Product Successfully Added'
            })
        })
        .catch(err => {
            res.status(400).json({
                message: `Unable to complete request due to ${err}`
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
        image: base64_encode(newImage),
    });

    Product.findById(productId)
        .then((product) => {
            product.title = newTitle;
            product.price = newPrice;
            product.imageURL = base64_encode(newImage);
            product.description = newDescription;
            product.save();
        })
        .then((result) => {
            res.status(201).json({
                message: 'Product Successfully Edited'
            })
        })
        .catch((err) => {
            res.status(400).json({
                message: `Unable to complete request due to ${err}`
            })
        });
};

// Do we want to add functionality to delete multiple products at once??

exports.postDeleteProduct = (req, res, next) => {
    const productId = req.body.productId;
    if (!req.userId) {
        res.status(401).json({
            message: "Not authorized to perform this action"
        })
    } 
    Product.findByIdAndDelete(productId)
    .then((result) => {
        res.status(201).json({
            message: "Product Successfully Deleted"
        })
    })
    .catch(err => {
        res.status(400).json({
            message: `Unable to complete request due to ${err}`
        })
    })
};