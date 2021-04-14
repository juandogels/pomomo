const mongoose = require('mongoose');

const ItemDBSchema = mongoose.Schema({
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