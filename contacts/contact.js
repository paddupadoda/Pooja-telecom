const express = require('express');
const cont = express.Router();


// var contact = [
//     {
//         name:"harsh",
//         phone:393834993
//     },
//     {
//         name:"akarsh",
//         phone:989939398
//     },
//     {
//         name:"kiran",
//         phone:389349403
//     }
// ]

// cont.get('/',(req,res)=>{
//     return res.render("home",{title:'Contact List',contact_list: contact})
// })

// cont.get('/delete-contact/',(req,res)=>{
//     let phone = req.query.phone;

//     let contactIndex = contact.findIndex(contactlist => contactlist.phone == phone);

//     if(contactIndex != -1){
//         contact.splice(contactIndex,1);
//     }
    
//     return res.redirect('back');
// })

// cont.get('/practice',(req,res)=>{
//     return res.render("practice",{title:"Playing with ejs"});
// })

// cont.post('/create-contact' , (req , res)=>{
//   contact.push(req.body);
//     return res.redirect('back');
// })

// module.exports = cont