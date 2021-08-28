// jshint esversion:10
const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
    task: {
        type: String,
        minlength: 5,
        maxlength: 60,
        required: true
    // },
    // description: {
    //     type: String,
    //     minlength: 30,
    //     maxlength: 120,
    //     default: 'No description.'
    }
}, {
    timestamps: {
        createdAt: 'create_date',
        updatedAt: 'update_date'
    }
});

const Item = mongoose.model('Item', itemsSchema);

module.exports = Item;