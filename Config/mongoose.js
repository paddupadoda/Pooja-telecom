const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/batches_db')

const db = mongoose.connection;

db.on('error',console.error.bind(console,"connetion error while connecting to DataBase"));

db.once('open',()=>{
    console.log("Successfully connected to the DataBase");
})