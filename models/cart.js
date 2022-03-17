/////////////////////////////////
// import dependencies
/////////////////////////////////
const mongoose = require('./connection')

const { Schema, model } = mongoose

const cartSchema = new mongoose.Schema({
    cartItems: [{ 
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Product',
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User'
    },
    purchased: {type: Boolean, default: false}

    
}, {
    timestamps: true
})

const Cart = model('Cart', cartSchema)

module.exports = Cart
