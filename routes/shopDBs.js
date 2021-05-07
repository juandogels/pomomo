const express = require('express');
const router = express.Router();
const ShopDB = require('../models/ShopDB');

//simple get request
router.get('/', IsAuthenticated, (req, res) => {
    res.send('Shop DB');
});

router.post('/', IsAuthenticated, (req, res) => {
    const shopDB = new ShopDB({
        purchasedItemName: req.body.purchasedItemName,
        itemDescription: req.body.itemDescription,
        itemPrice: req.body.itemPrice,
        giveGold: req.body.giveGold,
        giveDiamond: req.body.giveDiamond,
        createdDate: req.body.createdDate,
        giveItem: req.body.giveItem,
    })

    shopDB.save()
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