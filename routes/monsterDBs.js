const express = require('express');
const router = express.Router();
const MonsterDB = require('../models/MonsterDB');

//simple get request
router.get('/', (req, res) => {
    res.send('You have entered the Monster DB Homepage');
});

router.post('/', (req, res) => {
    const monsterDB = new MonsterDB({
        name: req.body.name,
        description: req.body.description,
        healthPoolBase: req.body.healthPoolBase,
        attackBase: req.body.attackBase,
        defenseBase: req.body.defenseBase,
        specialAttackBase: req.body.specialAttackBase,
        specialDefenseBase: req.body.specialDefenseBase,
        agilityPoints: req.body.agilityPoints,
        requiredItemUpgrade: req.body.requiredItemUpgrade,
        baseIncrease: req.body.baseIncrease,
    })
    monsterDB.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    })
});

module.exports = router;