var user = require('../models/model.js');
var express = require('express');
var quiz = express.Router();
var quizData = require('../models/questions.json');


quiz.get('/', function (req, res) {
    console.log(req.session.userId);
    res.render('quiz', {
        title: "Tech Quiz",
        question: quizData
    });

    quiz.post('/', function(req, res){
        console.log(req.body);
        res.redirect('/');
    });

});

module.exports = quiz;
