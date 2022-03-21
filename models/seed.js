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
        img: 'https://www.games-workshop.com/resources/catalog/product/920x950/99120104068_AELDarkReapersLead.jpg' ,
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
          name: 'Warlocks',
          description: 'A pair of Elite psychic warriors for your Aeldari army',
          img: 'https://www.games-workshop.com/resources/catalog/product/920x950/99120104066_AELWarlocksLead.jpg',
          price: 55,
          qty: 13
          },
        {
        name: 'Farseer',
        description: 'Powerful psyker HQ Choice for Aeldari armies',
        img: 'https://www.games-workshop.com/resources/catalog/product/920x950/99070104001_EldarFarseer01.jpg',
        price: 32,
        qty: 4    
        },
        {
        name: 'Windriders',
        description: 'Windriders are jetbike pilots completely in tune with their machines.',
        img: 'https://www.games-workshop.com/resources/catalog/product/920x950/99120104038_ELDARWINDRIDERS01.jpg',
        price: 55,
        qty: 1
        },
        {
        name: 'Swooping Hawks',
        description: 'The Swooping Hawks are the swift airborne support of the Aeldari warhost.',
        img: 'https://www.games-workshop.com/resources/catalog/product/920x950/99810104010_SwoopingHawksNEW_01.jpg',
        price: 45,
        qty: 20
        },
        {
        name: 'Wraithguard',
        description: 'Possessing deadly long-ranged weaponry, Wraithguard are constructs made from wraithbone, imbued with the spirit stones of dead Aeldari.',
        img: 'https://www.games-workshop.com/resources/catalog/product/920x950/99120104031_EldarWraithguard01.jpg',
        price: 60,
        qty: 15
        },
        {
        name: 'WraithLord',
        description: "Towering over its foes, the Wraithlord is controlled by the essence of one of the craftworld's mightiest warriors.",
        img: 'https://www.games-workshop.com/resources/catalog/product/920x950/99120104013_WraithlordsNEW_01.jpg',
        price: 60,
        qty: 13
        },
        {
        name: 'Spiritseer',
        description: "Spiritseers are those upon the Witch Path who are called to commune with the dead; a chilling concept, even amongst the Asuryani.",
        img: 'https://www.games-workshop.com/resources/catalog/product/920x950/99070104007_Spiritseer01.jpg',
        price: 32,
        qty: 16
        },
        {
        name: 'Dire Avengers',
        description: "The Dire Avengers are first amongst the Aspect Warriors of the Aeldari.",
        img: 'https://www.games-workshop.com/resources/catalog/product/920x950/99120104033_DireAvengers01.jpg',
        price: 38,
        qty: 8
        },
        {
        name: 'Craftworlds Wave Serpent',
        description: "The Wave Serpent is the main troop carrier of a Craftworld's army.",
        img: 'https://www.games-workshop.com/resources/catalog/product/920x950/99120104023_WaveSerpentNEW_01.jpg',
        price: 60,
        qty: 9
        },
          

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