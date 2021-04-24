const bcrypt = require('bcryptjs');
const User = require('../models/User');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//determining which data of the user object should be stored in the session
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//attaching the loaded user object to the request as req.user
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(
    new LocalStrategy({ usernameField: "email"}, (email, password, done) => {
        //Match User
        User.findOne({email: email})
        .then(user => {
            //Create new User
            if(!user) {
                const newUser = new User({email, password});
                //Hashing password before saving in DB
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                        .save()
                        .then(user => {
                            return done(null, user);
                        })
                        .catch(err => {
                            return done(null, false, {message: err});
                        });
                    });
                });
                //Return other user
            } else {
                //Match password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, {message: "Wrong password"});
                    }
                });
            }
        })
        .catch(err => {
            return done(null, false, {message: err});
        });
    })
);

module.exports = passport;