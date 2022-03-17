/////////////////////////////////
// import dependencies
/////////////////////////////////
const mongoose = require('./connection')

// here's an alternate syntax for creating a schema
// reminder: we do not need a model for a subdocument
// all we need is a schema 
const cartSchema = new mongoose.Schema({
    Product: [{ 
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Product',
        required: true
    }],
    user: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

module.exports = cartSchema
