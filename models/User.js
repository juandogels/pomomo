const mongoose = require('mongoose');
const schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

//no password is added since passport-local-mongoose doesn't need it
//passport-local-mongoose will do the password hashing/auth for us
const UserSchema = new schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: String,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
