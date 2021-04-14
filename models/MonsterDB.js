const mongoose = require ('mongoose');
const schema = mongoose.Schema;

const MonsterDBSchema = schema({
    name: String,
    description: String,
});