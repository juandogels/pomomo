const mongoose = require('mongoose');

const schema = mongoose.Schema;

const ItemDBSchema = schema({
    description: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
});
const ItemDB = mongoose.model('ItemDB', ItemDBSchema);
module.exports = ItemDB;