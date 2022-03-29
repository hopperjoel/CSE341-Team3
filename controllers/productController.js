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
    const page = +req.query.page || 1;
    const ITEMS_PER_PAGE = 10;
    let totalItems;
    Product.find()
        .countDocuments()
        .then(numProducts => {
            totalItems = numProducts;
            return Product
                .find()
                .skip((page - 1) * ITEMS_PER_PAGE)
                .limit(ITEMS_PER_PAGE)
            }).then(products => {
            res
            .status(200)
            .json({
                message: "All products returned",
                products,
                error: "NULL",
                isLoggedIn: "",
                currentPage: page,
                hasNextPage: ITEMS_PER_PAGE * page < totalItems,
                hasPreviousPage: page > 1,
                nextPage: page + 1,
                previousPage: page - 1,
                lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE)
        });
    })
}

exports.searchProduct = (req, res, next) => {
    let searchTerm = req.body.searchTerm;
    Product
        .find()
        .then(products => {
            const newProducts = []
            products.forEach(product => {
                if (product.title.toLowerCase().indexOf(searchTerm) !== -1) {
                    newProducts.push(product);
                }
                else if (product.description.toLowerCase().indexOf(searchTerm) !== -1) {
                    newProducts.push(product);
                }
            })
        
            res.json({ newProducts })
        })
}

// GET Product Description
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
    const userId = req.userId;
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
    const quantity = Math.floor(req.body.quantity);
    Product.findById(prodId)
    .then(product => {
        User
        .findById(userId)
        .then(user => {
            user.addToCart(product, quantity)
            
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

exports.deleteFromCart = (req, res, next) => {
    const userId = req.userId
    const prodId = req.body.productId;
    const quantity = Math.floor(req.body.quantity);
    User
    .findById(userId)
    .then(user => {
        user.removeFromCart(prodId, quantity)
        
        .then(result => {
            const products = user.cart.items;
            res
            .status(200)
            .json({
                message: "Product deleted",
                products: products, 
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
}
