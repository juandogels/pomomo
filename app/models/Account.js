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
AccountSchema.index({currentLevel: 1, currentExperience: 1});
AccountSchema.index({coins: 1, gold: 1});
AccountSchema.index({username: 1, lastLogin: 1, registeredDate: 1});
AccountSchema.index({username: 1});
AccountSchema.index({username: 1, inventory: 1, myMonster: 1, levelsCompletedLog: 1});
const Account = mongoose.model('Account', AccountSchema);
module.exports = Account;