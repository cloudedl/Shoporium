////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////
const express = require('express')
const { append } = require('express/lib/response')
const mongoose = require('mongoose')
const Cart = require('../models/add_to_cart')

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

router.get ('/cart', (req,res) => {

})

router.put('/cart/:id', (req, res) => {

})




////////////////////////////////////////////
// Export the Router
////////////////////////////////////////////
module.exports = router