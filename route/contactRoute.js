const router = require('express').Router()
const nodemailer =  require('nodemailer')
require("dotenv").config();

router.post('/contact',(req,res)=>{
let data = req.body;
if(
    data.name.length === 0 ||
     data.email.length === 0 ||
      data.message.length === 0
      ){
    return res.json({msg: "please fill all the fields"});
}




    let smtpTransporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth:{
            user: 'Volodymyr.koziupa@gmail.com',
            pass: 'jzwhxmfzphcnsgoq',
            // user: process.env.SMTP_USER,
            // pass: process.env.SMTP_PASSWORD,
        },
    });
    let mailOptions = {
        from:data.email,
        to: 'volodymyr.koziupa@gmail.com',
        subject: `message from ${data.name}`,
        html: `
        <h3>Informations</h3>
        <ul>
        
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${data.message}</p>
        `,
    }

smtpTransporter.sendMail(mailOptions,(error)=>{
    try {
if(error) 
return res.status(400).json({msg:"please fill all the fields"});
res.status(200).json({msg: "Thank you for contacting Volodymyr Koziupa"});
    } catch (error){
        if(error) return res.status(500).json({msg:"There is server error"});
    }
});



});

module.exports=router;
