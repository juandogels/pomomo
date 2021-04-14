const express = require('express');
const router = express.Router();
const ItemDB = require('../models/ItemDB');

//simple get request
router.get('/', (req, res) => {
    res.send('Item DB');
});

router.post('/', (req, res) => {
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

module.exports = router;