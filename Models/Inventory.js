const mongoose = require('mongoose');

const Inventory = new mongoose.model('inventory', new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        default: Date.now().toString(),
        immutable: true
    },
    item: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
        immutable: true
    }

}));
module.exports = Inventory;