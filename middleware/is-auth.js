const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    authHeader = req.get('Authorization');
    console.log(authHeader)
    if (!authHeader) {
        // err.statusCode = 401;
        // throw error;
        req.userId = "1"
        next()
    }
    const token = req.get('Authorization').split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'asjdkflajsdlkfjalksdfj');
    }
    catch (err) {
        // err.statusCode = 500;
        // throw err;
        req.userId = "2"
        next()
    }
    if (!decodedToken) {
        // const error = new Error('Not authenticated.');
        // error.statusCode = 401;
        // throw error;
        req.userId = "3"
        next()
    }
    req.userId = decodedToken.userId;
    next();
}