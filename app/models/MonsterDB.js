const mongoose = require ('mongoose');
const schema = mongoose.Schema;

const MonsterDBSchema = schema({
    name: String,
    description: String,
    healthPoolBase: Number,
    attackBase: Number,
    defenseBase: Number,
    specialAttackBase: Number,
    specialDefenseBase: Number,
    agilityPoints: Number,
    requiredItemUpgrade: [{
        itemID: {
            type: schema.Types.ObjectId,
            ref: 'ItemDB'
        },
        itemQuantityNeeded: Number,
        initialGoldRequirement: Number
    }],
    baseIncrease: [{
        monsterLevel: Number,
        monsterLevelChange: Number,
        healthPoolChange: Number,
        attackChange: Number,
        defenseChange: Number,
        specialAttackChange: Number,
        specialDefenseChange: Number,
        agilityPointsChange: Number,
    }],
});

const MonsterDB = mongoose.model('MonsterDB', MonsterDBSchema);
module.exports = MonsterDB;