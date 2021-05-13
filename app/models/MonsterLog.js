const mongoose = require('mongoose');

const schema = mongoose.Schema;

const MonsterLogSchema = schema({
    monsterID: {
        type: schema.Types.ObjectId,
        ref: 'MonsterDB'
    },
    monsterLevelChange: Number,
    healthPoolChange: Number,
    attackChange: Number,
    defenseChange: Number,
    specialAttackChange: Number,
    specialDefenseChange: Number,
    agilityPointsChange: Number,
    createdDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

const MonsterLog = mongoose.model('MonsterLog', MonsterLogSchema);
module.exports = MonsterLog;