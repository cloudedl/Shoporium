///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require("./connection")
const Product = require("./products")


// save the connection in a variable
const db = mongoose.connection

// Make sure code is not run till connected
db.on("open", () => {
  ///////////////////////////////////////////////
  // Write your Seed Code Below
  //////////////////////////////////////////////

  // Run any database queries in this function
    const startProducts = [
        { 
        name: 'Codex: Aeldari',
        description: 'Definitive guide to commanding the forces of the Aeldari',
        img: 'https://www.games-workshop.com/resources/catalog/product/920x950/60030104012_EngAELCodex01.jpg' ,
        price: 55 ,
        qty: 12 ,
        },
        { 
        name: 'Yvraine',
        description: 'A skilled combatant and powerful psyker',
        img: 'https://www.games-workshop.com/resources/catalog/product/920x950/99070104009_AELYvraineLead.jpg' ,
        price: 55 ,
        qty: 9 ,
        },
        {
        name: 'Maugan Ra',
        description: 'A legendary Phoenix Lord and HQ choice for your Aeldari forces',
        img: 'https://www.games-workshop.com/resources/catalog/product/920x950/99120104069_AELMauganRaLead.jpg' ,
        price: 45 ,
        qty: 6 ,
        },
        {
        name: 'Dark Reapers',
        description: 'A peerless long-ranged Heavy Support choice for your Aeldari army',
        img: '../imgs/Seed_Imgs/DarkReapers.webp' ,
        price: 60 ,
        qty: 15 ,
        },
        {
        name: 'Guardian Defenders',
        description: 'Versatile Troops choice for Aeldari armies',
        img: 'https://www.games-workshop.com/resources/catalog/product/920x950/99120104067_AELGuardiansLead.jpg',
        price: 55,
        qty: 8
        },
        {
        name: 'Storm Guardians',
        description: 'Builds 10 Storm Guardians or Guardian Defenders, with helmets or bare heads',
        img: 'https://www.games-workshop.com/resources/catalog/product/920x950/99120104067_AELGuardiansLeadAlt.jpg',
        price: 55,
        qty: 15
        },
        {
        name: 'Farseer',
        description: 'Powerful psyker HQ Choice for Aeldari armies',
        img: 'https://www.games-workshop.com/resources/catalog/product/920x950/99070104001_EldarFarseer01.jpg',
        price: 32,
        qty: 4    
        }
    ]

  // Delete all products
  Product.deleteMany({})
    .then((deletedProducts) => {
      // add the starter products 
      Product.create(startProducts)
        .then((newProducts) => {
          // log the new products s to confirm their creation
          console.log('here are the new seed products ' , newProducts)
          db.close()
        })
        .catch((error) => {
          console.log(error)
          db.close()
        })
    })
    .catch((error) => {
      console.log(error)
      db.close()
    })

  ///////////////////////////////////////////////
  // Write your Seed Code Above
  //////////////////////////////////////////////
})