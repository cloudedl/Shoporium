//  IMPORT DEPENDENCIES
const mongoose = require('./connection')

// DEFINE OUR Products MODEL
// pull the schema and model constructors from mongoose
// we're going to use something called destructuring to accomplish this
const { Schema, model } = mongoose

const productSchema = new Schema ({
    name: { type: String,required: true},
    description: String,
    img: {type: String, default: "https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png"},
    price: {type: Number, requrired: true, min: 0},
    qty: {type: Number, requrired: true, min: 0}
    },
{timestamps: true})

const Product = model('Product', productSchema)

//make this exportable to be accessed in `server.js`
module.exports = Product