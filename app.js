const express = require('express');
const bodyParser = require('body-parser');


const adminRoutes = require('./routes/admin/adminRoutes');
const authRoutes = require('./routes/authentication/loginRoutes');
const shopRoutes = require('./routes/products/productRoutes');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(adminRoutes);
app.use(authRoutes);
app.use(shopRoutes);



app.listen(8080);