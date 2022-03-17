////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////
const express = require('express')
const { append } = require('express/lib/response')
const mongoose = require('mongoose')
const Cart = require('../models/cart')

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

    const username = req.session.username
    const loggedIn = req.session.loggedIn
    const userId = req.session.userId
    res.render('cart/index', {Cart, username, loggedIn, userId})

})

router.put('/:id', (req, res) => {

    const productId = req.params.productId
    req.session.cart = Cart
    console.log('what is the productId', productId)

    Cart.create(req.body)
        .then(cart => {
            //send the product to the cartItems array
            cart.cartItems.push(req.body)
            return cart.save()
        })
        .then(cart => {
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