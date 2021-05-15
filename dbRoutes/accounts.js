const express = require('express');
const router = express.Router();
const Account = require('../app/models/Account');

//getting all accounts
router.get('/', IsAuthenticated, async (req, res) => {
    try{
        const accounts = await Account.find();
        res.json(accounts);
    }catch(err){
        res.json({message: err});
    }
});

//getting an account by ID
router.get('/:id', IsAuthenticated, async (req, res) => {
    try{
        const account = await Account.findById(req.params.id);
        res.json(account);
    }catch(err){
        res.json({message: err});
    }
});

//create a new account
router.post('/newAccount', IsAuthenticated, async (req, res) => {
        const newAccount = new Account({
            username: req.body.username,
            registeredDate: Date.now(),
        });
        try{
            const saveNewAccount = await newAccount.save();
            res.json(saveNewAccount);
        }catch(err){
            res.json({message: err})
        }
});

//update last login after user logs out
router.patch('/logout/:id', IsAuthenticated, async (req, res) => {
    try{
        const lastLoginAccount = await Account.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: {lastLogin: Date.now()}
        });
        res.json(lastLoginAccount);
    }catch(err){
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