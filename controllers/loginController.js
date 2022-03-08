/****************************************************
 * Login Controller
 * 
 * Used for logging into user accounts
 ***************************************************/
 const Product = require('../models/products');
 const User = require('../models/users')
 const bcrypt = require('bcryptjs')
/****************************************************
 * GET Controllers
 ****************************************************/
exports.getLogin = (req, res, next) => {

}

/****************************************************
 * POST Controllers
 ****************************************************/

exports.postSignup = (req, res, next) => {
const email = req.body.email;
const password = req.body.password;
    // return res.status(422).json({
    // //error if there is already a user with that email in database
    // errorMessage: 'There was already a user with this email',
    // oldInput: {
    //     email: email,
    //     password: password,
    //     confirmPassword: req.body.confirmPassword
    // },
    // });

bcrypt
    .hash(password, 12)
    .then(hashedPassword => {
    const user = new User({
        email: email,
        password: hashedPassword,
        cart: { items: [] }
    });
    return user.save();
    })
        .then(result => {
            res.status(201).json({message: 'User created successfully!'})
        })
    // .then(result => {
    // res.redirect('/login');
    // })
    .catch(err => {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
    });
};