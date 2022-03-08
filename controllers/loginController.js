/****************************************************
 * Login Controller
 * 
 * Used for logging into user accounts
 ***************************************************/
 const Product = require('../models/products');

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
const errors = validationResult(req);
if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(422).render('auth/signup', {
    //path: '/signup',
    //pageTitle: 'Signup',
    errorMessage: errors.array()[0].msg,
    oldInput: {
        email: email,
        password: password,
        confirmPassword: req.body.confirmPassword
    },
    validationErrors: errors.array()
    });
}

// bcrypt
//     .hash(password, 12)
//     .then(hashedPassword => {
//     const user = new User({
//         email: email,
//         password: hashedPassword,
//         cart: { items: [] }
//     });
//     return user.save();
//     })
//     .then(result => {
//     res.redirect('/login');
//     })
//     .catch(err => {
//     const error = new Error(err);
//     error.httpStatusCode = 500;
//     return next(error);
//     });
};