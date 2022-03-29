const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    authHeader = req.get('Authorization');
    console.log(authHeader)
    if (!authHeader) {
        const err = new Error('No Authorization Header')
        err.statusCode = 401;
        throw err;
        
        next()
    }
    const token = req.get('Authorization').split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, `${process.env.USER_KEY}`);
    }
    catch (err) {
        const error = new Error(err)
        error.statusCode = 500;
        throw err;
        req.userId = "2"
        next()
    }
    if (!decodedToken) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
        req.userId = "3"
        next()
    }
    req.userId = decodedToken.userId;
    next();
}