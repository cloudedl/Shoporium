// import dependencies
const mongoose = require('./connection')

// import user model for populate
const User = require('./user')

// destructure the schema and model constructors from mongoose
const { Schema, model } = mongoose

const productSchema = new Schema(
	{
		name: { type: String,required: true},
		description: String,
		img: {type: String, required: true},
		price: {type: Number, requrired: true, min: 0},
		qty: {type: Number, requrired: true, min: 0}
		
	},
	{ timestamps: true }
)

const Product = model('Product', productSchema)

/////////////////////////////////
// Export our Model
/////////////////////////////////
module.exports = Product
