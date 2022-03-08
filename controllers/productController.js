/****************************************************
 * Product Controller
 * 
 * Controller for the main page of the store
 ***************************************************/
 const Product = require('../models/products');

/****************************************************
 * GET Controllers
 ****************************************************/
// Get Products
exports.getProducts = (req, res, next) => {
    var productJSON = Product.find({});
    console.log(productJSON);
};

// Get Product Description
exports.getProdDesc = (req, res, next) => {

} 

/****************************************************
 * POST Controllers
 ****************************************************/


// Linds***
//  exports.postCartDeleteProduct = (req, res, next) => {
//     const prodId = req.body.productId;
//     req.user
//       .removeFromCart(prodId)
//       .then(result => {
//         res.redirect('/cart');
//       })
//       .catch(err => {
//         const error = new Error(err);
//         error.httpStatusCode = 500;
//         return next(error);
//       });
//   };