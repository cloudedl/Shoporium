// import what I need
const { Schema, model } = require('./connection.js')
const mongoose = require('./connection')

const cartSchema = ('./cart')

// create the schema
const UserSchema = new Schema(
	{
		username: { 
			type: String, 
			required: true, 
			unique: true 
		},
		password: { 
			type: String, 
			required: true 
		},
		cartItems: [{ 
			type: mongoose.Schema.Types.ObjectID,
			ref: 'Product',
		}],
		shipping:  {

			name: {type: String, },
			address: {type: String, },
			city: {type: String, },
			state: {type: String, },
			postal: {type: Number,},
			phone: {type: Number,}
		},
		previousOrders : 
		[{ 
			orderNumber: {type:String},
			type: mongoose.Schema.Types.ObjectID,
			ref: 'Product',
		}],
		
	},
	{ timestamps: true }
)

// creat the model
const User = model('User', UserSchema)

// export the model
module.exports = User
