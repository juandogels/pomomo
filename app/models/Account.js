const mongoose = require('mongoose');
const schema = mongoose.Schema;

const AccountSchema = schema({
    username: {
        type: String,
        require: true,
    },
    currentLevel: {
        type: Number,
        default: 0,
    },
    currentExperience: {
        type: Number,
        default: 0
    },
    coins: {
        type: Number,
        default: 0,
    },
    gold: {
        type: Number,
        default: 0,
    },
    registeredDate: {
        type: Date,
        default: Date.now,
    },
    lastLogin: Date,
    inventory: [{
        itemID: {
            type: schema.Types.ObjectId,
            ref: 'ItemDB',
        }, 
        amount: Number, 
    }],
    myMonster: [{
        monsterID: {
            type: schema.Types.ObjectId,
            ref: 'MonsterDB'
        },
        level: Number,
        rarity: Number,
        healthPool: Number, 
        attack: Number, 
        defense: Number, 
        specialAttack: Number,
        specialDefense: Number, 
        agilityPoints: Number, 
    }],
    levelsCompletedLog: [{
        levelID: {
            type: schema.Types.ObjectId,
            ref: 'LevelDB',
        },
        levelsCompleted: Number,
        createdDate: {
            type: Date,
            required: true,
            default: Date.now,
        },
        lastUpdated: {
            type: Date,
            required: true,
            default: Date.now,
        },

    }],
});

const Account = mongoose.model('Account', AccountSchema);
module.exports = Account;