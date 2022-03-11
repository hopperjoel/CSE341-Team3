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



// //****** Linds ******//
// exports.postLogin = (req, res, next) => {
//     const email = req.body.email;
//     const password = req.body.password;
  
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(422).render('auth/login', {
//         path: '/login',
//         pageTitle: 'Login',
//         errorMessage: errors.array()[0].msg,
//         oldInput: {
//           email: email,
//           password: password
//         },
//         validationErrors: errors.array()
//       });
//     }
// -----------------------------

// User.findOne({ email: email })
// .then(user => {
//   if (!user) {
//     return res.status(422).render('auth/login', {
//       path: '/login',
//       pageTitle: 'Login',
//       errorMessage: 'Invalid email or password.',
//       oldInput: {
//         email: email,
//         password: password
//       },
//       validationErrors: []
//     });
//   }
//   bcrypt
//     .compare(password, user.password)
//     .then(doMatch => {
//       if (doMatch) {
//         req.session.isLoggedIn = true;
//         req.session.user = user;
//         return req.session.save(err => {
//           console.log(err);
//           res.redirect('/');
//         });
//       }
//       return res.status(422).render('auth/login', {
//         path: '/login',
//         pageTitle: 'Login',
//         errorMessage: 'Invalid email or password.',
//         oldInput: {
//           email: email,
//           password: password
//         },
//         validationErrors: []
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.redirect('/login');
//     });
// })
// .catch(err => {
//   const error = new Error(err);
//   error.httpStatusCode = 500;
//   return next(error);
// });
// };

// --------------------------

// exports.postLogout = (req, res, next) => {
//     req.session.destroy(err => {
//       console.log(err);
//       res.redirect('/');
//     });
//   };
// //****** Linds ******//


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