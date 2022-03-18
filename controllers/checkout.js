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











////////////////////////////////////////////
// Export the Router
////////////////////////////////////////////
module.exports = router