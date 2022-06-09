const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
const cont = require('./contacts/contact.js')

const db = require('./Config/mongoose.js');

const Contact = require('./models/contact.js'); 

const  port = process.env.PORT || 5000;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('assets'));
// app.use('/',cont);


var contact = [
    {
        name:"harsh",
        phone:393834993
    },
    {
        name:"akarsh",
        phone:989939398
    },
    {
        name:"kiran",
        phone:389349403
    }
]

app.get('/',(req,res)=>{
    Contact.find({},(err,contacts)=>{
        if(err){
            console.log(err);
            return
        }
        return res.render("home",{title:'Contact List',contact_list: contacts})
    })
})

app.get('/delete-contact/',(req,res)=>{
    let id = req.query.id;   

    Contact.findByIdAndDelete(id,(err)=>{
        if(err){
            console.log(err);
            return;
        }

    })

    return res.redirect('back');
})

app.get('/practice',(req,res)=>{
    return res.render("practice",{title:"Playing with ejs"});
})

app.post('/create-contact' , (req , res)=>{
//   contact.push(req.body);
    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    },(err)=>{
        if(err){
            console.log(err);
        }
    })
    return res.redirect('back');
})



app.listen(port,(err)=>{
    if(err){console.log("sever is not  running",err); return;}
    console.log("wow! server is running on port:",port);
})

















// var count = 0;

// // setTimeout(() => {
// //     var s = setInterval(() => {
// //         if(count>=100){
// //             clearInterval(s);
// //         }
// //         console.log(count);
// //         count++;
// //     }, 50);
// // }, 5000);

// var car = [
//     {
//         car_name:"car",
//         model:"6969",
//         colour:"blue"
//     },
//     {
//         car_name:"aachiCar",
//         model:"9696",
//         colour:"blue"
//     },
//     {
//         car_name:"acchi se aachhi car",
//         model:"6699",
//         colour:"blue & black"
//     }
// ]

// car[2].car_name = "StoleIt" 

// for(var i of car){
//     console.log(i.car_name);
// }



