/****************************************************
 * Product Controller
 * 
 * Controller for the main page of the store
 ***************************************************/
//const products = require('../models/products');
const Product = require('../models/products');
const User = require('../models/users')

/****************************************************
 * GET Controllers
 ****************************************************/
 exports.getHomepage = (req, res, next) => {
    Product
        .find()

    //const prod1 = id:622fecb632cc9c150e23bb9c;
    //const prod2 = id:622fecd032cc9c150e23bb9;
    //const prod3 = id:622fece432cc9c150e23bba0;
    //findById() to get certain items?
        .then(result => {
            products = result.slice(0, 3)
            res.status(200).json({ //add in an error message?
                message: "Home display products request successful",
                products: products,
                error: "NULL",
                isLoggedIn: ""
                //thinking maybe you don't need the price for the home page display?
            })
        })
        .catch(err => {
            const error = new Error(err);
            error.httpStatusCode = 204;
            error.message = "No Content Available";

            res
                .status(204)    //HTTP status 204: No content available
                .json({
                    message: "No content available",
                    products: [{
                        _id: "NULL",
                        price: 0,
                        description: "NULL",
                        image: "NULL",
                        __v: 0
                    }],
                    error: error,
                    isLoggedIn: ""
                });
        });
};

// GET Products
exports.getProducts = (req, res, next) => {
    Product
        .find()
        .then(products => {
            res
                .status(200)
                .json({
                    message: "All products returned",
                    products,
                    error: "NULL",
                    isLoggedIn: "" 
                });
        })
        // No Content
        .catch(err => {
            const error = new Error(err);
            error.httpStatusCode = 204;
            error.message = "No Content Available";

            res
                .status(204)    //HTTP status 204: No content available
                .json({
                    message: "No content available",
                    products: [{
                        _id: "NULL",
                        price: 0,
                        description: "NULL",
                        image: "NULL",
                        __v: 0
                    }],
                    error: error,
                    isLoggedIn: ""
                });
        });
}

// GET Prdouct Description
exports.getProdDesc = (req, res, next) => {
    Product
        .findById( req.body.productId ) // ID hard coded for now
        .then(product => {
            res
                .status(200)
                .json({
                    message: "Product found",
                    product,
                    error: "NULL",
                    isLoggedIn: "" 
                })
        })
        .catch(err => {
            const error = new Error(err);
            error.httpStatusCode = 204;
            error.message = "Content not found";

            res
                .status(204)    //HTTP status 204: No content available
                .json({
                    message: "No content available",
                    products: [{
                        _id: "NULL",
                        price: 0,
                        description: "NULL",
                        image: "NULL",
                        __v: 0
                    }],
                    error: error,
                    isLoggedIn: ""
                });
        });
}

exports.getCart = (req, res, next) => {
    const userId = req.body.userId;
    User
    .findById(userId)
    .then(passedUser => {
        passedUser
        .populate('cart.items.productId')
        .then(user => {
          const products = user.cart.items;
          res
            .status(200)
            .json({
                message: "User Cart found",
                cart: products,
                error: "NULL",
                isLoggedIn: "" 
            })
        })
        .catch(err => {
          const error = new Error(err);
          error.httpStatusCode = 500;
          res
            .status(200)
            .json({
                message: "User Cart not found",
                
                error: "NULL",
                isLoggedIn: "" 
            })
        });
    })
    .catch(err => {
        const error = new Error(err);
        error.httpStatusCode = 204;
        error.message = "Content not found";

        res
            .status(204)    //HTTP status 204: No content available
            .json({
                message: "No content available",
                products: [{
                    _id: "NULL",
                    price: 0,
                    description: "NULL",
                    image: "NULL",
                    __v: 0
                }],
                error: error,
                isLoggedIn: ""
            });
        });
};
/****************************************************
 * POST Controllers
 ****************************************************/
exports.postCart = (req, res, next) => {
    const userId = req.userId;
    const prodId = req.body.productId;
    Product.findById(prodId)
    .then(product => {
        User
        .findById(userId)
        .then(user => {
            user.addToCart(product)
            res
            .status(200)
            .json({
                message: "User Cart found",
                cart: user.cart,
                error: "NULL",
                isLoggedIn: "" 
            })
        })
        
        .catch(err => {
            const error = new Error(err);
            error.httpStatusCode = 204;
            error.message = "Content not found";

            res
                .status(204)    //HTTP status 204: No content available
                .json({
                    message: "No content available",
                    products: [{
                        _id: "NULL",
                        price: 0,
                        description: "NULL",
                        image: "NULL",
                        __v: 0
                    }],
                    error: error,
                    isLoggedIn: ""
                });
            });
    })
    .catch(err => {
        const error = new Error(err);
        error.httpStatusCode = 204;
        error.message = "Content not found";

        res
            .status(204)    //HTTP status 204: No content available
            .json({
                message: "No content available",
                products: [{
                    _id: "NULL",
                    price: 0,
                    description: "NULL",
                    image: "NULL",
                    __v: 0
                }],
                error: error,
                isLoggedIn: ""
            });
        });
    };
