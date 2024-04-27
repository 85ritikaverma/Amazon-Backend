const express = require("express");
const productsRouter = require('./routes/productsRoutes.js')
const app = express();

const test = require('./models/productsModel.js')
app.use(express.json());
app.use('/api/products', productsRouter)
const mongoose = require('mongoose');
const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.40ddhde.mongodb.net/$_NAME_$?retryWrites=true&w=majority&appName=Cluster0'
const databaseUser = 'ritika854031';
const databasePassword = 'ritika854031'
const databaseName = 'AmazonBackend';
let dbLink = url.replace("$_USERNAME_$", databaseUser);
dbLink = dbLink.replace("$_PASSWORD_$", databasePassword);
dbLink = dbLink.replace("$_NAME_$", databaseName);



mongoose.connect(dbLink).then(() => console.log('........database connect........'));
app.listen(1800, () => console.log('........app started.....'));











