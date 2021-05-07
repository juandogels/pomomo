const express = require('express');
const passport = require('passport');
const router = express.Router();
const ItemDB = require('../models/ItemDB');

//simple get request
router.get('/', IsAuthenticated, (req, res) => {
    res.send('Item DB');
});

router.post('/newItemDB', IsAuthenticated, (req, res) => {
        const itemDB = new ItemDB({
            description: req.body.description,
            name: req.body.name
        })
        itemDB.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        })
});

function IsAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next();
        console.log("Authenticated!");
    } else {
        res.redirect('/api/auth/login');
        console.log("Not authenticated");
    }
};

module.exports = router;