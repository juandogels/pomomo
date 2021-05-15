const express = require('express');
const router = express.Router();
const ItemDB = require('../app/models/ItemDB');

//gets all existing items
router.get('/', IsAuthenticated, async (req, res) => {
    try{
        const items = await ItemDB.find();
        res.json(items);
    }catch(err) {
        res.json({message: err});
    }
});

//gets a specific item by ID
router.get('/:id', IsAuthenticated, async (req, res) => {
    try{
        const item = await ItemDB.findById(req.params.id);
        res.json(item);
    }catch(err){
        res.json({message: err});
    }
});

//posts a new item
router.post('/newItem', IsAuthenticated, async (req, res) => {
    const newItem = new ItemDB({
        name: req.body.name,
        description: req.body.description
    });
    try{
        const saveNewItem = await newItem.save();
        res.json(saveNewItem);
    }catch(err){
        res.json({message: err});
    }
});

//update an existing item by ID
router.patch('/:id', IsAuthenticated, async (req, res) => {
    try {
        const updateItem = await ItemDB.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: {name: req.body.name, description: req.body.description}
        });
        res.json(updateItem);
    }catch(err) {
        res.json({message: err});
    }
});

//deletes an existing item
router.delete('/:id', IsAuthenticated, async (req, res) => {
    try {
        const removeItem = await ItemDB.remove({_id: req.params.id});
        res.json(removeItem);
    }catch(err) {
        res.json({message: err});
    }
});

function IsAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next();
        console.log("Authenticated!");
    } else {
        res.redirect('/login');
        console.log("Not authenticated");
    }
};

module.exports = router;