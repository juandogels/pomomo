const express = require('express');
const ShopDB = require('../models/ShopDB');
const router = express.Router();
const ItemDB = require('../models/ShopDB');

//simple get request
router.get('/', (req, res) => {
    res.send('Shop DB');
});

router.post('/', (req, res) => {
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

module.exports = router;