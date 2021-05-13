const mongoose = require ('mongoose');

const schema = mongoose.Schema;

const LevelDBSchema = schema({
    levelOrder: Number,
    levelName: String,
    levelDescription: String,
    totalRounds: Number,
    roundInfo: [{
        currentRound: Number,
        minGoldEarned: Number,
        maxGoldEarned: Number,
        totalExperienceGained: Number,
        itemGet: [{
            itemID: {
                type: schema.Types.ObjectId,
                ref: 'ItemDB'
            },
            minAmount: Number,
            maxAmount: Number,
            chance: Number,
        }],
    }],
});
const LevelDB = mongoose.model('LevelDB', LevelDBSchema);
module.exports = LevelDB;