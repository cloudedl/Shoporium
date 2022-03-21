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

//route that displays the cart and the items inside it
router.get ('/', (req,res) => {
    const userId = req.session.userId
    const username = req.session.username
    const loggedIn = req.session.loggedIn


    User.findById(userId)
        .populate('cartItems')
        .then((user) => {
            let cartItems = user.cartItems
            console.log('what is cartItems')
            // if there are no items in the cart load the products index
            if (cartItems == []) {
                res.render('products/index',username, loggedIn, userId ) 
            } 
            // if there are items in the cart load the cart.
            else {

                console.log('is this else statement running?')

            //function for getting the total price of the items in the cart.
            
            console.log('what is cartItems', cartItems[0].price)
            let total = 0
            for (let i = 0 ; i < cartItems.length ; i++) {
                total += parseInt(cartItems[i].price)
                console.log('This is the total price of cartItems', total)
            }


           
            console.log('this is the user data we grabbed', user)
            res.render('cart/index', {user, username, loggedIn, userId, cartItems, total})
            }

        })
        	// if there is an error, show that instead
		.catch((err) => {
			console.log(err)
			res.json({ err })
		})



})

// Final Checkout Route
router.put('/emptyCart', (req,res) => {
    const userId = req.session.userId
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    console.log('is this route being hit?')

    User.findById(userId)
    .then((user) => {

        //function for getting the total price of the items in the cart.
        let cartItems = user.cartItems

               
        User.findByIdAndUpdate(userId, {cartItems: [], new:true})
        .then((user) => {
            console.log('this is the user data we grabbed', user)
            res.redirect('/products')
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

// route for adding items to the cart
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
            res.redirect('/products')
        })
        // -->error if no product
        .catch(err => { 
            console.log(err)
            res.json(err)
        })

     })

    





    router.delete(':id', (req,res) => {
        const productId = req.params.id
        const userId = req.session.userId

    })






////////////////////////////////////////////
// Export the Router
////////////////////////////////////////////
module.exports = router