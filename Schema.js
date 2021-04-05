const mongoose = require('mongoose');

const inventory = [{
    item_id: mongoose.Schema.Types.ObjectId, 
    amount: Number, 
    ref: 'Inventory'
}];

const itemGet = [{
    item_id: mongoose.Schema.Types.ObjectId,
    min_amount: Number, 
    max_amount: Number,
    chance: mongoose.Schema.Types.Decimal128,
    ref: 'ItemGet',
}];

const roundInfoList = [{round_id: mongoose.Schema.Types.ObjectId, 
    minGold: Number, 
    maxGold: Number,
    round: Number, exp: Number, itemGet,
    ref: 'RoundInfoList',
}];

const roundInfo = {
    _id: mongoose.Schema.Types.ObjectId,
    exp: Number,
    round: Number,
    gold: Number,
    finished: Boolean,
    itemGet,
    ref: 'RoundInfo',
};

const requiredItemUpgrade = [{
    item_id: mongoose.Schema.Types.ObjectId, 
    amount: Number, 
    ref: 'RequiredItemUpgrade'
}];

const myMonster = [{_id: mongoose.Schema.Types.ObjectId, level: Number,
    nature: mongoose.Schema.Types.ObjectId, 
    hp: Number, 
    atk: Number, 
    def: Number, 
    spAtk: Number,
    spDef: Number, 
    agility: Number, 
    ref: 'MyMonster'
}];

const AccountSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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

const LevelDBSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    roundInfoList,
    ref: 'LevelDB',
});

const ItemDBSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    description: String,
    ref: 'ItemDB',
});

const PokemonDBSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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

const LevelLogSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    player_id: mongoose.Schema.Types.ObjectId,
    timestamp: Date,
    levelId: mongoose.Schema.Types.ObjectId,
    roundInfo,
})