const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ShopDBSchema = schema({
    purchasedItemName: String,
    itemDescription: String,
    itemPrice: Number,
    giveGold: Number,
    giveDiamond: Number,
    createdDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    giveItem: [{
        itemID: {
            type: schema.Types.ObjectId,
            ref: 'ItemDB'
        },
        itemQuantityNeeded: Number,
    }],
});

const ShopDB = mongoose.model('ShopDB', ShopDBSchema);
module.exports = ShopDB;