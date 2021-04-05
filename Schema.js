const mongoose = require('mongoose');

const schema = mongoose.Schema;

const inventory = [{
    item_id: schema.Types.ObjectId, 
    amount: Number, 
    ref: 'Inventory'
}];

const itemGet = [{
    item_id: schema.Types.ObjectId,
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
    _id: {
        type: schema.Types.ObjectId
    },
    username: {
        type: String,
        require: true,
    },
    current_level: {
        type: Number,
        require: true,
    },
    current_exp: {
        type: Number,
        require: true
    },
    coins: {
        type: Number,
        require: true,
    },
    gold: {
        type: Number,
        require: true,
    },
    registered_date: {
        type: Date,
        default: Date.now,
    },
    last_login: {
        type: Date,
        default: Date.now,
    },
    inventory,
    myMonster,
    ref: 'Account',
});

const LevelDBSchema = schema({
    _id: {
        type: schema.Types.ObjectId,
        require: true,
    },
    roundInfoList,
    ref: 'LevelDB',
});

const ItemDBSchema = schema({
    _id: {
        type: schema.Types.ObjectId,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    ref: 'ItemDB',
});

const PokemonDBSchema = schema({
    _id: {
        type: schema.Types.ObjectId, 
        require: true,
    },
    description: {
        type: String, 
        required: true,
    },
    hpBase: {
        type: Number,
        require: true,
    },
    atkBase: {
        type: Number,
        require: true,
    },
    defBase: {
        type: Number,
        require: true,
    },
    spAtkBase: {
        type: Number,
        require: true,
    },
    spDefBase: {
        type: Number,
        require: true,
    },
    agility: {
        type: Number,
        require: true,
    },
    requiredItemUpgrade,
    ref: 'PokemonDB',
});

const LevelLogSchema = schema({
    _id: {
        type: schema.Types.ObjectId,
        require: true,
    },
    player_id: {
        type: schema.Types.ObjectId,
        require: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    levelId: {
        type: schema.Types.ObjectId,
        require: true,
    },
    roundInfo,
});

const account = mongoose.model('Account', AccountSchema);
const levelLog = mongoose.model('Level Log', LevelLogSchema);