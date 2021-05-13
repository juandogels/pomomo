module.exports = (app, passport) => {
    //HOME PAGE
    app.get('/', (req, res) => {
        res.render('index.ejs');
    });

    //LOGIN PAGE
    app.get('/login', (req, res) => {
        res.render('/login.ejs', {message: req.flash('loginMessage')});
    });

    //processing the login form
    // app.post('/login', do all passport shit here);

    //SIGN UP PAGE
    app.get('/signup', (req, res) => {
        res.render('signup.ejs', {message: req.flash('signupMessage')});
    });

    //processing sign up form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    //PROFILE SECTION
    app.get('/profile', isLoggedIn, (req, res) => {
        res.render('profile.ejs', {
            user: req.user //gets user out of session and pass to template
        });
    });

    //LOGOUT
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
    
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next;
    res.redirect('/');
}