const mongoose = require("mongoose");

const schema = mongoose.Schema;

const inventory = [
  {
    item_id: schema.Types.ObjectId,
    amount: Number,
  },
];

const itemGet = [
  {
    item_id: schema.Types.ObjectId,
    min_amount: Number,
    max_amount: Number,
    chance: mongoose.Schema.Types.Decimal128,
  },
];

const roundInfoList = [
  {
    round_id: schema.ObjectId,
    minGold: Number,
    maxGold: Number,
    round: Number,
    exp: Number,
    itemGet,
  },
];

const roundInfo = {
  _id: schema.ObjectId,
  exp: Number,
  round: Number,
  gold: Number,
  finished: Boolean,
  itemGet,
};

const requiredItemUpgrade = [
  {
    item_id: schema.ObjectId,
    amount: Number,
  },
];

const myMonster = [
  {
    _id: schema.Types.ObjectId,
    level: Number,
    nature: schema.Types.ObjectId,
    hp: Number,
    atk: Number,
    def: Number,
    spAtk: Number,
    spDef: Number,
    agility: Number,
  },
];

const AccountSchema = schema({
  _id: {
    type: schema.Types.ObjectId,
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
    require: true,
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
});

const LevelDBSchema = schema({
  _id: {
    type: schema.Types.ObjectId,
    require: true,
  },
  roundInfoList,
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

const account = mongoose.model("Account", AccountSchema);
const levelLog = mongoose.model("Level Log", LevelLogSchema);
