////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////
const express = require('express')
const Product = require('../models/products')

////////////////////////////////////////////
// Create router
////////////////////////////////////////////
const router = express.Router()



////////////////////////////////////////////
// Routes
////////////////////////////////////////////

// index route
router.get('/', (req, res) => {
    // find the products
    Product.find({})
        // then render a template AFTER they're found
        .then(products => {
            // console.log(products)
            const username = req.session.username
			const loggedIn = req.session.loggedIn
			const userId = req.session.userId
            res.render('products/index.liquid', { products, username, loggedIn, userId })
        })
        // show an error if there is one
        .catch(error => {
            console.log(error)
            res.json({ error })
        })
})

// new route -> GET route that renders our page with the form
router.get('/new', (req, res) => {
    res.render('products/new')
})

// create -> POST route that actually calls the db and makes a new document
router.post('/', (req, res) => {
  
    Product.create(req.body)
        .then(product => {
            // console.log('this was returned from create', product)
            res.redirect('/products')
        })
        .catch(err => {
            console.log(err)
            res.json({ err })
        })

})

// edit route -> GET that takes us to the edit form view
router.get('/:id/edit', (req, res) => {
    // we need to get the id
    const productId = req.params.id
    // find the product
    Product.findById(productId)
    // -->render if there is a product
        .then(product => {
            res.render('products/edit', { product })
        })
    // -->error if no product
        .catch(err => { 
            console.log(err)
            res.json(err)
        })
})

// update route -> sends a put request to our database
router.put('/:id', (req, res) => {
    // get the id
    const productId = req.params.id
  
    // tell mongoose to update the product
    Product.findByIdAndUpdate(productId, req.body, { new: true })
    // if successful -> redirect to the product page
        .then(product => {
            console.log('the updated product', product)

            res.redirect(`/products/${product.id}`)
        })
    // if an error, display that
        .catch(error => res.json(error))
})


// BUY route
router.put('/buy/:id', (req, res) => {


    const productId = req.params.id

    Product.findById(productId)
        // then render a template AFTER they're found
        .then(product => {
            console.log(product)
            Product.findByIdAndUpdate(productId, { qty: product.qty - 1 }, { new: true })
                // if successful -> redirect to the product page
                .then(_ => {
                    // console.log("this is product", product.qty);
                    res.redirect(`/products/${product.id}`)
                })
                // if an error, display that
                .catch(err => {
                    console.log(err)
                    res.json({ err })
                })
        })
        // show an error if there is one
        .catch(error => {
            console.log(error)
            res.json({ error })
        })
    })

// show route
router.get('/:id', (req, res) => {
    // first, we need to get the id
    const productId = req.params.id
    // then we can find a product by its id
    Product.findById(productId)
    // once found, we can render a view with the data
        .then(product => {
            const username = req.session.username
			const loggedIn = req.session.loggedIn
			const userId = req.session.userId
            res.render('products/show', { product, username, loggedIn, userId })
            // res.send('you have landed')
        })
    // if there is an error, show that instead
        .catch(err => {
            console.log(err)
            res.json({ err })
        })
})

// delete route
router.delete('/:id', (req, res) => {
    // get the product id
    const productId = req.params.id
    // delete the product 
    Product.findByIdAndRemove(productId)
        .then(product => {
            console.log('this is the response from FBID', product)
            res.redirect('/products')
        })
        .catch(error => {
            console.log(error)
            res.json({ error })
        })
})


////////////////////////////////////////////
// Export the Router
////////////////////////////////////////////
module.exports = router