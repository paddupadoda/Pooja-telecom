const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://badipyaarihai:<password>@pooja-telecom-cluster.dxgw0n7.mongodb.net/?retryWrites=true&w=majority')

const db = mongoose.connection;

db.on('error',console.error.bind(console,"connetion error while connecting to DataBase"));

db.once('open',()=>{
    console.log("Successfully connected to the DataBase");
})