// import what I need
const { Schema, model, STATES } = require('./connection.js')

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
		shipping: {
			name: {type: String},
			address: {type: String},
			city: {type: String},
			state: {type: String},
			postal: {type: String},
			phone: {type: String}
		}
	},
	{ timestamps: true }
)

// creat the model
const User = model('User', UserSchema)

// export the model
module.exports = User
