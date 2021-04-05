const mongoose = require('mongoose');
const schema = mongoose.Schema;
const inventory = [{
    item_id: schema.Types.ObjectId, 
    amount: Number, 
    ref: 'Inventory'
}];

const itemGet = [{
    item_id: schema.ObjectId,
    min_amount: Number, 
    max_amount: Number,
    chance: mongoose.Schema.Types.Decimal128,
    ref: 'ItemGet',
}];

const roundInfoList = [{
    round_id: schema.ObjectId, 
    minGold: Number, 
    maxGold: Number,
    round: Number, exp: Number, itemGet,
    ref: 'RoundInfoList',
}];

const roundInfo = {
    _id: schema.ObjectId,
    exp: Number,
    round: Number,
    gold: Number,
    finished: Boolean,
    itemGet,
    ref: 'RoundInfo',
};

const requiredItemUpgrade = [{
    item_id: schema.ObjectId, 
    amount: Number, 
    ref: 'RequiredItemUpgrade'
}];

const myMonster = [{
    _id: schema.Types.ObjectId, 
    level: Number,
    nature: schema.Types.ObjectId, 
    hp: Number, 
    atk: Number, 
    def: Number, 
    spAtk: Number,
    spDef: Number, 
    agility: Number, 
    ref: 'MyMonster'
}];

const AccountSchema = schema({
    _id: schema.Types.ObjectId,
    username: String,
    current_level: Number,
    current_exp: Number,
    coins: Number,
    gold: Number,
    registered_date: Date,
    last_login: Date,
    inventory,
    myMonster,
    ref: 'Account',
});

const LevelDBSchema = schema({
    _id: schema.Types.ObjectId,
    roundInfoList,
    ref: 'LevelDB',
});

const ItemDBSchema = schema({
    _id: schema.Types.ObjectId,
    description: String,
    ref: 'ItemDB',
});

const PokemonDBSchema = schema({
    _id: schema.Types.ObjectId,
    description: String,
    hpBase: Number,
    atkBase: Number,
    defBase: Number,
    spAtkBase: Number,
    spDefBase: Number,
    agility: Number,
    requiredItemUpgrade,
    ref: 'PokemonDB',
})

const LevelLogSchema = schema({
    _id: schema.Types.ObjectId,
    player_id: schema.Types.ObjectId,
    timestamp: Date,
    levelId: schema.Types.ObjectId,
    roundInfo,
})