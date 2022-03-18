const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const adminRoutes = require('./routes/adminRoutes');
const authRoutes  = require('./routes/loginRoutes');
const shopRoutes  = require('./routes/productRoutes');

const MONGODB_URL = "mongodb+srv://admin:admin@cluster0.9h2tp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

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

mongoose
  .connect(MONGODB_URL)
  .then(result => {
    app.listen(8080);
  })
  .catch(err => {
    console.log(err);
  });