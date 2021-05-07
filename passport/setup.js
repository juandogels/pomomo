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
    new LocalStrategy({usernameField: "email"}, (email, password, done) => {
        User.findOne({email: email})
        .then(user => {
            console.log("finding user");
            if(!user) {
                console.log("user not found, creating one");
                const newUser = new User({email, password});
                //Hashing password before entering into database
                bcrypt.genSalt(10, (err, salt) => {
                    if (err) return next(err);
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) return next(err);
                        newUser.password = hash;
                        newUser
                        .save()
                        .then(user => {
                            console.log("New user created");
                            return done(null, user);
                        })
                        .catch(err => {
                            console.log(err);
                            return done(null, false, {message: err});
                        });
                    });
                });
            } else {
                console.log("User found, comparing password, password check completed.");
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) return next(err);
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, {message: "Wrong password"});
                    }
                });
            }
        }) 
        .catch(err => {
            console.log("user.findOne doesn't work");
            return done(null, false, {message: err});
        });
    })
);

module.exports = passport;