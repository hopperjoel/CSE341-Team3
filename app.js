const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const adminRoutes = require('./routes/adminRoutes');
const authRoutes  = require('./routes/loginRoutes');
const shopRoutes  = require('./routes/productRoutes');

const MONGODB_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}`

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
    app.listen(process.env.PORT || 8080);
  })
  .catch(err => {
    console.log(err);
  });

//For package.json production env vars
//"start": "MONGO_USER=admin MONGO_PASSWORD=admin MONGO_URL=cluster0.9h2tp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority PATH=3000 node app.js",