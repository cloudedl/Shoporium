////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////
const express = require('express')
const { append } = require('express/lib/response')
const mongoose = require('mongoose')
const User = require('../models/user')

// we need our Fruit MODEL because comments are ONLY a schema
// so we'll run queries on fruits, and add in comments
const Product = require('../models/products')

////////////////////////////////////////////
// Create router
////////////////////////////////////////////
const router = express.Router()

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

router.get ('/', (req,res) => {
    const userId = req.session.userId
    const username = req.session.username
    const loggedIn = req.session.loggedIn


    User.findById(userId)
        .populate('cartItems')
        .then((user) => {
            let cartItems = user.cartItems
            console.log('this is the user data we grabbed', user)
            res.render('cart/index', {user, username, loggedIn, userId, cartItems})

        })
        	// if there is an error, show that instead
		.catch((err) => {
			console.log(err)
			res.json({ err })
		})



})

router.put('/:id', (req, res) => {

    const productId = req.params.id
    const userId = req.session.userId
    // req.session.cart = Cart
    console.log('what is cart', User)
    console.log('what is the productId', productId)

    User.findById(userId)
        .then(user => {
            //send the product to the cartItems array
            user.cartItems.push(productId)
            console.log('what is user', user)
            return user.save()
            
        })
        .then(user => {
            //redirect
            res.redirect('/cart')
        })
        // -->error if no product
        .catch(err => { 
            console.log(err)
            res.json(err)
        })
    })





////////////////////////////////////////////
// Export the Router
////////////////////////////////////////////
module.exports = router