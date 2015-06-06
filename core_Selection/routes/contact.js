/**
 * Created by Kushagra on 06-06-2015.
 */
var express = require('express');
var contact = express.Router();
var bodyParser=require('body-parser');
var nodemailer = require("nodemailer");

contact.use(bodyParser.urlencoded({ extended: false }));

/* GET about page page. */
contact.get('/', function(req, res){
    res.render('contact', { title: 'CSI - Contact', page: 'contact', msg: " "})
});

contact.post('/', function (req, res) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'vaish.kushagra@gmail.com',
            pass: 'you_wish'
        }
    });

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
    var mailOptions = {
        from:req.body.email, // sender address
        to: 'vaish.kushagra@gmail.com', // list of receivers
        subject: 'CSI Contact Form', // Subject line
        text: req.body.message // plaintext body

    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.render('contact', {
                title: 'CSI - Contact',
                msg: 'Error occured, message not sent.',
                err: true,
                page: 'contact'
            });
        }
        //Yay!! Email sent
        else {
            res.render('contact', {
                title: 'CSI - Contact',
                msg: 'Message sent! Thank you.',
                err: false,
                page: 'contact'
            });
        }
    });
});
module.exports = contact;

