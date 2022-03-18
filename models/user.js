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

			name: {type: String, required: true},
			address: {type: String, required: true},
			city: {type: String, required: true},
			state: {type: String, required: true},
			postal: {type: Number, required: true},
			phone: {type: Number, required: true}
		}
		
	},
	{ timestamps: true }
)

// creat the model
const User = model('User', UserSchema)

// export the model
module.exports = User
