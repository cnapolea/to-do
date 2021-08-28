// jshint esversion:10
const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 10,
        maxlength: 60,
        required: true
    },
    description: {
        type: String,
        minlength: 30,
        maxlength: 120,
        default: 'No description.'
    }
}, {
    timestamps: {
        createdAt: 'create_date',
        updatedAt: 'update_date'
    }
});

const Item = mongoose.model('Item', itemsSchema);

module.exports = Item;