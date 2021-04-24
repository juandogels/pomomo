const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/login', (req, res) => {
    const Users = new User({
        email: req.body.email,
        username: req.body.username
    });
    User.register(Users, req.body.password, (err, user) => {
        if (err) {
            res.json({success: false, message: "Your account could not be saved. Error: ", err})
        } else {
            res.json({success: false, message: "Your account has been saved"})
        }
    });
});
module.exports = router;