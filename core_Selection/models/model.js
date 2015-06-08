var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user',function (err) {
    if (err) {
        console.log ('ERROR connecting:'  + '. ' + err);
    } else {
        console.log ('Succeeded connected ');
    }
});

var userSchema = new mongoose.Schema({ user_name: String,
    user_email: String,
    user_regno: String,
    user_age: Number,
    user_bio: String,
    user_job: [String],
    user_interest: [String] });

var User = mongoose.model('User', userSchema);

module.exports= User;