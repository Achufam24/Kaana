const mongoose = require('mongoose');

const Schema = mongoose.Schema

const orderSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    destination: {
        type: String,
        required: true
    }
},{timestamps: true})

module.exports = mongoose.model('Order',orderSchema)