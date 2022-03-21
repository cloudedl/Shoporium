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

            //function for getting the total price of the items in the cart.
            let cartItems = user.cartItems
            console.log('what is cartItems', cartItems[0].price)
            let total = 0
            for (let i = 0 ; i < cartItems.length ; i++) {
                total += parseInt(cartItems[i].price)
                console.log('This is the total price of cartItems', total)
            }

            console.log('this is the user data we grabbed', user)
            res.render('cart/index', {user, username, loggedIn, userId, cartItems, total})

        })
        	// if there is an error, show that instead
		.catch((err) => {
			console.log(err)
			res.json({ err })
		})



})

// route for adding items to the cart
router.put('/:id', (req, res) => {

    const productId = req.params.id
    const userId = req.session.userId
    // req.session.cart = Cart
    console.log('what is cart', User)
    console.log('what is the productId', productId)

    
    // Product.findById(productId)
    // // then render a template AFTER they're found
    // .then(product => {
    //     console.log(product)
    //     Product.findByIdAndUpdate(productId, { qty: product.qty - 1 }, { new: true })
    //         })
    //         // if an error, display that
    //         .catch(err => {
    //             console.log(err)
    //             res.json({ err })
    //         })
    // })
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