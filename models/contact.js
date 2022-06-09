const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:false
    }
})

const Contact = mongoose.model('Contact',ContactSchema);

module.exports = Contact;