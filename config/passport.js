var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var User = require('../app/models/User');

module.exports = (passport) => {
    //serializing user for the session
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    //deserializing user 
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

    //LOCAL SIGNUP
    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email', 
        passwordField: 'password',
        passReqToCallback: true //allows us ot pass back the entire request to the template
    },
    (req, email, password, done) => {
        //asynchronous
        //user.findOne won't run unless data is sent back
        process.nextTick(() => {
            //find a user whose email is the same as the forms email
            User.findOne({'local.email': email}, (err, user) => {
                if (err) {
                    return done(err)
                } 
                if (user) {
                    return done(null, false, req.flash('signupMessage', 'That email is already taken'));
                } else {
                    //create a new user with that email
                    var newUser = new User();
                    newUser.local.email = email;
                    newUser.local.password = newUser.generateHash(password);

                    //saving the newly registered user
                    newUser.save((err) => {
                        if (err) {
                            throw err;
                        }
                        return done(null, newUser);
                    });
                }
            });
        });
    }));

    //local login
    passport.use('local-login', new LocalStrategy({
        usernameField: 'email', 
        passwordField: 'password',
        passReqToCallback: true
    },
    (req, email, password, done) => {
        User.findOne({'local.email': email}, (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, req.flash('loginMessage', 'No user found'))
            }
            const validPassword = bcrypt.compareSync(password, user.local.password);
            if (!validPassword) {
                return done(null, false, req.flash('loginMessage', 'Incorrect password'));
            }
            return done(null, user);
        });
    }));
};