/****************************************************
 * Login Controller
 * 
 * Used for logging into user accounts
 ***************************************************/
 const Product = require('../models/products');
 const User = require('../models/users')
 const bcrypt = require('bcryptjs')
 const jwt = require('jsonwebtoken')
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


//****** Linds ******//
exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
  
    // const errors = [];
    // if (!errors.isEmpty()) {
    //   return res.status(422).json({error: "There was an error" })
    // }
// -----------------------------

    User.findOne({ email: email })
    .then(user => {
    if (!user) {
        return res.status(422).json({ error: "There was an error 1" })
    }
    bcrypt
        .compare(password, user.password)
        .then(doMatch => {
        if (doMatch) {
            const token = jwt.sign({ email: email, userId: user._id }, 'asjdkflajsdlkfjalksdfj', { expiresIn: '1h' });
            res.json({ token: token, userId: user._id })
        }
        else { 
            return res.status(422).json({ error: "There was an error 2" })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(422).json({ error: "There was an error 3" });
        });
    })
    .catch(err => {
    // const error = new Error(err);
    // error.httpStatusCode = 500;
    // return next(error);
    });
};

// --------------------------

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
      console.log(err);
      res.redirect('/');
    });
  };
//****** Linds ******//

