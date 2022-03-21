# Shoporium

## MVP
1. Have Index, Show, Cart, and Checkout Routes
2. Ability to add an item to your Cart
3. Ability to remove unwanted items from the Cart
4. Ability to Checkout from Cart and provide Shipping Details
5. Checkout will provide an order number
6. Have a Nav Bar that will navigate to: Index, User , Cart

## Stretch Goals
1. Have a search function to find individual products
2. Be able to reference previous orders on the User Page
3. Have an inventory system preventing ordering of Out of Stock items
4. Have a comments section so customer's can review the product. 
5. tie shipping details with accounts so customer doesn't have to fill out form every time
6. Post Checkout will display approx delivery day based off of todays date. 

## User Story
Customer will load the webiste seeing the different products available. Customer can view the individual products and their descriptions or add them directly to the cart from the main page. After the customer has found the products that interest them they can checkout. Customer will go through a checkout page and provide their details. Stripe API will process the fake transaction and determine if it was successful or not.


## Index Route
![index page](/imgs/proposalImgs/index.jpg)

Customer is greeted with a page that will have a grid of available products. At the top of the page will be a nav bar. 
Each product will have an add to cart button. 

## Show Route
![show page](/imgs/proposalImgs/show.jpg)

Customer can click on any product from the index page to get a larger image and a description of the product. Customer can add to cart from this page as well.

## Cart Route
![cart page](/imgs/proposalImgs/cart.jpg)

On the cart page customer can see which items are in their cart, remove unwanted items, or click the checkout button to proceed

## Checkout Route
![checkout page](/imgs/proposalImgs/Checkout.jpg)

Checkout page will have a form for customer to provide shipping data and dummy payment details. After customer submits they will be taken to post-checkout

## Post-Checkout Route
![postCheckout page](/imgs/proposalImgs/Post-Checkout.jpg)

Post checkout will display an order number and will have a delivery time frame.

## User Create and Login Routes
![userCreate and Login](/imgs/proposalImgs/user_create.jpg)

Customers will need to create a user account to checkout. The orders that they do will be linked to this account.

## Entity Relationship Diagram
![erd](/imgs/proposalImgs/ERD.jpg)
Diagram to show which models will be linked in the final version. 


## Technologies Used
node.js <br>
express <br>
liquid <br>
stripe API <br>
dotenv <br>
bcrypt <br>
express-session <br>

