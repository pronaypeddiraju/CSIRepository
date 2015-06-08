/**
 * Created by Kushagra on 08-06-2015.
 */
var user = require('../models/model.js');
var express = require('express');
var submit = express.Router();
var bodyParser=require('body-parser');

submit.use(bodyParser.urlencoded({ extended: false }));

submit.post('/',function(req, res){
    var newUser = new user(req.body);
    newUser.save(function(err) {
        if (err) throw err;

        console.log('User saved successfully!');
    });
    req.session.userId = newUser.user_regno;
    res.redirect('/quiz');
});

module.exports = submit;