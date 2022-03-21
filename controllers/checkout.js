////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////
const express = require('express')
const { append } = require('express/lib/response')
const mongoose = require('mongoose')
const User = require('../models/user')

// We need our products model
const Product = require('../models/products')
const { findById } = require('../models/user')

////////////////////////////////////////////
// Create router
////////////////////////////////////////////
const router = express.Router()

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

// confirm shipping details of the customer
router.get('/shipping', (req,res) => {
    const userId = req.session.userId
    const username = req.session.username
    const loggedIn = req.session.loggedIn

    User.findById(userId)
    
    .then((user) => {
        let shipping = user.shipping
        console.log('this is the user data we grabbed', user)
        res.render('checkout/shipping', {username, loggedIn, userId, shipping})

    })
        // if there is an error, show that instead
    .catch((err) => {
        console.log(err)
        res.json({ err })
    })


})

router.get('/confirm', (req, res) => {

    const userId = req.session.userId
    const username = req.session.username
    const loggedIn = req.session.loggedIn

    User.findById(userId)
    .populate('cartItems')
    .then((user) => {

        //function for getting the total price of the items in the cart.
        let cartItems = user.cartItems
        let shipping = user.shipping
        console.log('what is cartItems', cartItems[0].price)
        let total = 0
        for (let i = 0 ; i < cartItems.length ; i++) {
            total += parseInt(cartItems[i].price)
            console.log('This is the total price of cartItems', total)
        }

        console.log('this is the user data we grabbed', user)
        res.render('checkout/confirm', {user, username, loggedIn, userId, cartItems, total, shipping})

    })
        // if there is an error, show that instead
    .catch((err) => {
        console.log(err)
        res.json({ err })
    })



})

// update user Shipping Details
router.put('/edit', (req,res) => {

    const userId = req.session.userId
    const username = req.session.username
    const loggedIn = req.session.loggedIn

    User.findByIdAndUpdate(userId, {shipping: req.body},{ new: true } )
        // if successful redirect to products page for testing
        .then((user) => {
            console.log('did user update?', user)
            res.redirect('/checkout/confirm')
        })
        .catch((error) => {
            console.log('the error', error);
            
            res.redirect(`/error?error=${error}`)
        })

    })

router.get('/success' , (req,res) => {

    const userId = req.session.userId
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    
    User.findById(userId)
    .then((user) => {

        let orderNumber = 0
        const randomNumber = () => {
             orderNumber = 'a' + Math.floor(Math.random() * 1000000000)
        }
        randomNumber()

        //function for getting the total price of the items in the cart.
        let cartItems = user.cartItems
        let shipping = user.shipping
        previousOrders= user.previousOrders
     

        console.log('this is the user data we grabbed', user)
        res.render('checkout/success', {user, username, loggedIn, userId, cartItems, shipping, previousOrders, orderNumber})

    })
        // if there is an error, show that instead
    .catch((err) => {
        console.log(err)
        res.json({ err })
    })


})
    
    
// Final Checkout Route
router.put('/final', (req,res) => {
    const userId = req.session.userId
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    console.log('is this route being hit?')

    User.findById(userId)
    .then((user) => {

        //function for getting the total price of the items in the cart.
        let cartItems = user.cartItems
        let shipping = user.shipping
       
      

       req.body.cartItems = user.cartItems
       
       console.log('what is req.body' , req.body)



        User.findByIdAndUpdate(userId, {previousOrders: cartItems,  new: true})
            .then((user) => {
                console.log('this is the user data we grabbed', user)
                
                
            })
            .catch((error) => {
                console.log('the error', error);
                
                res.redirect(`/error?error=${error}`)
            })
        
        User.findByIdAndUpdate(userId, {cartItems: [], new:true})
        .then((user) => {
            console.log('this is the user data we grabbed', user)
            res.redirect('/checkout/success')
        })
        .catch((error) => {
            console.log('the error', error);
            
            res.redirect(`/error?error=${error}`)
        })
    .catch((error) => {
        console.log('the error', error);
        
        res.redirect(`/error?error=${error}`)
    })
      


})
})










////////////////////////////////////////////
// Export the Router
////////////////////////////////////////////
module.exports = router