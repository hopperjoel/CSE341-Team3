/****************************************************
 * Product Controller
 * 
 * Controller for the main page of the store
 ***************************************************/
//const products = require('../models/products');
const Product = require('../models/products');

/****************************************************
 * GET Controllers
 ****************************************************/
exports.getHomepage = (req, res, next) => {
    return products.find() //findById() to get certain items?
        .then(result => {
            res.status(200).json({ //add in an error message?
                message: "Home display products request successful",
                title: result.title,
                image: result.image,
                description: result.description
                //thinking maybe you don't need the price for the home page display?
            })
        })
};
    // const product = homeProduct({
    //     title: title,
    //     image: image
    // });
    // product
    //     .save()
    //     .then((result) => {
    //         res.status(200).json({
    //           //Do I need to add a message here for get?  message: ''
    //         })
    //     }) 
    

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