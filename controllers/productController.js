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

//****McKenzie***
//to select random products and display them
//still need to switch it to 3 items...(create a loop for 3 times?)
// Create array of object keys, ["311", "310", ...]
// const keys = Object.keys(products)

// // Generate random index based on number of keys
// const randIndex = Math.floor(Math.random() * keys.length)

// // Select a key from the array of keys using the random index
// const randKey = keys[randIndex]

// // Use the key to get the corresponding name from the "names" object
// const products = products[randKey]

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
        .find( {"_id": "6226c42cadeab28915b23328"} ) // ID hard coded for now
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
    userId = req.userId;
    User
    .find( { "_id": userId } )
    .then(user => {
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
};
/****************************************************
 * POST Controllers
 ****************************************************/
exports.postCart = (req, res, next) => {
    const userId = req.userId;
    const prodId = req.body.productId;
    console.log('Test 1')
    Product.findById(prodId)
    .then(product => {
        console.log('Test 6')
        User
        .findById(userId)
        .then(user => {
            console.log('Test 5')
            console.log(product)
            console.log(user)
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
            console.log('Test 4')
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
        console.log('Test 3')
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
        console.log('Test 2')
    };
