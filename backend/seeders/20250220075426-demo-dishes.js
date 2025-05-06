"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    await queryInterface.bulkInsert("Dishes", [
      // ... your existing categoryId: 13 and 14 dishes (not repeating here)

      {
        name: "Caesar Salad",
        description:
          "Classic romaine lettuce tossed with creamy Caesar dressing, croutons, and Parmesan cheese.",
        price: 250.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744461384/Caesar_Salad_vagco5.webp",
        categoryId: 1,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Greek Salad",
        description:
          "Fresh cucumbers, tomatoes, red onions, feta cheese, and olives, tossed in olive oil and lemon juice.",
        price: 220.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744461385/Greek_Salad_yqreqv.webp",
        categoryId: 1,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Chicken Pasta Salad",
        description:
          "Pasta salad with grilled chicken, cherry tomatoes, and creamy mayo-mustard dressing.",
        price: 280.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744460580/dishes/16-ChickenPastaSalad.png",
        categoryId: 1,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Quinoa Avocado Salad",
        description:
          "A healthy mix of quinoa, avocado, bell peppers, and black beans with lime vinaigrette.",
        price: 270.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744485808/dishes/17-Quinoa%20Avocado%20Salad.jpg",
        categoryId: 1,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Tuna Nicoise Salad",
        description:
          "French-style salad with tuna, boiled eggs, green beans, olives, and potatoes.",
        price: 300.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744486352/dishes/18-Tuna%20Nicoise%20Salad.webp",
        categoryId: 1,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Fruit &amp; Nut Salad",
        description:
          "Fresh seasonal fruits tossed with crunchy walnuts, raisins, and a drizzle of honey.",
        price: 200.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744486661/dishes/21-FruitNutSalad.jpg",
        categoryId: 1,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Spicy Thai Chicken Salad",
        description:
          "Grilled chicken with shredded carrots, cabbage, peanuts, and spicy Thai dressing.",
        price: 310.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744486754/dishes/22-SpicyThaiChickenSalad.jpg",
        categoryId: 1,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Corn &amp; Bean Salad",
        description:
          "A tangy mix of sweet corn, kidney beans, onion, and bell peppers with lemon dressing.",
        price: 190.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744486853/dishes/23-CornBeanSalad.jpg",
        categoryId: 1,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Paneer Tikka Salad",
        description:
          "Grilled paneer cubes, mixed greens, onions, and mint chutney dressing.",
        price: 260.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744487119/dishes/24-PaneerTikkaSalad.jpg",
        categoryId: 1,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Egg Salad",
        description:
          "Boiled eggs chopped and mixed with creamy mustard mayo, lettuce, and spices.",
        price: 240.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744487214/dishes/25-EggSalad.jpg",
        categoryId: 1,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
    
        name: "Chicken Tikka Roll",
        description:
          "Grilled chicken tikka wrapped in a soft paratha with onions and mint chutney.",
        price: 150.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744487384/dishes/26-ChickenTikkaRoll.jpg",
        categoryId: 2,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Paneer Masala Roll",
        description:
          "Spicy paneer cubes wrapped with salad and sauces in a whole wheat roll.",
        price: 130.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744487461/dishes/27-PaneerMasalaRoll.jpg",
        categoryId: 2,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Double Egg Roll",
        description:
          "Flaky paratha layered with two beaten eggs and served with tangy sauces.",
        price: 100.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744487606/dishes/28-DoubleEggRoll.webp",
        categoryId: 2,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Veggie Delight Roll",
        description:
          "Loaded with fresh vegetables, lettuce, onions, bell peppers, and mayo.",
        price: 90.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744487764/dishes/29-VeggieDelightRoll.jpg",
        categoryId: 2,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Mutton Seekh Kebab Roll",
        description:
          "Juicy mutton seekh kebabs rolled in a tandoori roti with mint sauce.",
        price: 180.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744487831/dishes/30-MuttonSeekhKebabRoll.jpg",
        categoryId: 2,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Chilli Garlic Potato Roll",
        description:
          "Crispy potatoes tossed in chilli garlic sauce, wrapped in a soft roll.",
        price: 110.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744488000/dishes/31-ChilliGarlicPotatoRoll.jpg",
        categoryId: 2,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Egg Paneer Roll",
        description:
          "A fusion of spicy paneer and egg rolled in a buttery wrap.",
        price: 140.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744488082/dishes/32-EggPaneerRoll.webp",
        categoryId: 2,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
      
        name: "Spicy Chicken Roll",
        description:
          "Tender chicken cooked in spicy gravy and wrapped with onions and sauces.",
        price: 160.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744488196/dishes/33-SpicyChickenRoll.jpg",
        categoryId: 2,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Mushroom Masala Roll",
        description:
          "Sautéed mushrooms in Indian spices rolled with fresh greens and chutney.",
        price: 120.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744488255/dishes/34-MushroomMasalaRoll.webp",
        categoryId: 2,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Fish Tandoori Roll",
        description:
          "Chunks of tandoori fish wrapped in a rumali roti with mint mayo.",
        price: 190.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744488346/dishes/35-FishTandooriRoll.jpg",
        categoryId: 2,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
      
        name: "Gulab Jamun",
        description:
          "Soft, deep-fried milk balls soaked in cardamom-flavored sugar syrup.",
        price: 80.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744488443/dishes/36-Gulab%20Jamun.webp",
        categoryId: 3,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
     
        name: "Chocolate Brownie",
        description:
          "Rich and fudgy chocolate brownie topped with a drizzle of dark chocolate.",
        price: 120.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744488522/dishes/37-Browniees.webp",
        categoryId: 3,
        type: "Veg",
        createdAt:now,
        updatedAt: now,
      },
      {
        
        name: "Rasmalai",
        description:
          "Soft cheese patties soaked in thickened milk, flavored with saffron and pistachios.",
        price: 100.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744488585/dishes/38-Rasmalai.jpg",
        categoryId: 3,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Tiramisu",
        description:
          "Classic Italian dessert layered with coffee-soaked sponge and mascarpone cream.",
        price: 180.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744488651/dishes/39-Tiramisu.jpg",
        categoryId: 3,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Mango Kulfi",
        description:
          "Traditional Indian ice cream infused with mango pulp and dry fruits.",
        price: 90.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744488705/dishes/40-MangoKulfi.jpg",
        categoryId: 3,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Caramel Custard",
        description:
          "Silky smooth baked custard topped with golden caramel sauce.",
        price: 110.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744488804/dishes/41-CaramelCustard.jpg",
        categoryId: 3,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Choco Lava Cake",
        description:
          "Warm chocolate cake with a gooey molten chocolate center.",
        price: 130.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744488870/dishes/42-ChocoLavaCake.jpg",
        categoryId: 3,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
      
        name: "Kaju Katli",
        description:
          "Diamond-shaped cashew fudge made with premium nuts and silver leaf.",
        price: 500.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744488943/dishes/43-Kaju%20Katli.jpg",
        categoryId: 3,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Ice Cream Sundae",
        description:
          "Three scoops of flavored ice cream topped with syrup, nuts, and a cherry.",
        price: 140.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744489012/dishes/44-IceCreamSundae.jpg",
        categoryId: 3,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
    
        name: "Malai Kulfi",
        description:
          "Creamy and dense kulfi made with thickened milk and cardamom.",
        price: 75.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744489128/dishes/45-MalaiKulfi.jpg",
        categoryId: 3,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Pista Kulfi",
        description:
          "Kulfi infused with pistachios and a hint of rose water for a refreshing flavor.",
        price: 85.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744489193/dishes/46-pistaKulfi.webp",
        categoryId: 3,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
      
        name: "Kesar Badam Kulfi",
        description:
          "Saffron and almond flavored kulfi topped with crushed nuts.",
        price: 90.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744489229/dishes/47-kesarPistaKulfi.jpg",
        categoryId: 3,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Chocolate Kulfi",
        description:
          "Rich and creamy chocolate kulfi made with cocoa and milk.",
        price: 95.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744489278/dishes/48-Chocolate%20Kulfi.jpg",
        categoryId: 3,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
     
        name: "Rasgulla",
        description:
          "Spongy white balls made from chhena, soaked in light sugar syrup.",
        price: 55.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744489353/dishes/49-Rasgulla.jpg",
        categoryId: 3,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
      
        name: "Motichoor Ladoo",
        description:
          "Tiny boondi pearls made from gram flour, bound together with sugar syrup.",
        price: 70.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744489477/dishes/50-Motichoor%20Ladoo.jpg",
        categoryId: 3,
        type: "Veg",
        createdAt:now,
        updatedAt: now,
      },
      {
        
        name: "Barfi",
        description:
          "Classic Indian sweet made from condensed milk solids, flavored with cardamom and garnished with silver leaf.",
        price: 65.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744489524/dishes/51-Barfi.jpg",
        categoryId: 3,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Belgian Chocolate Cake (1 kg)",
        description:
          "Rich, moist chocolate sponge layered with premium Belgian chocolate ganache.",
        price: 1100.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744489760/dishes/52-Belgian%20Chocolate%20Cake.jpg",
        categoryId: 5,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Belgian Chocolate Cake (500 gms)",
        description:
          "Rich, moist chocolate sponge layered with premium Belgian chocolate ganache.",
        price: 600.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744489852/dishes/53-Belgian%20Chocolate%20Cake.jpg",
        categoryId: 5,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Red Velvet Cake (500 gms)",
        description:
          "Classic red velvet cake with smooth cream cheese frosting and layers of soft sponge.",
        price: 580.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744489913/dishes/54-Red%20Velvet%20Cake.jpg",
        categoryId: 5,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Red Velvet Cake (1 kg)",
        description:
          "Classic red velvet cake with smooth cream cheese frosting and layers of soft sponge.",
        price: 1050.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744489970/dishes/55-Red%20Velvet%20Cake.jpg",
        categoryId: 5,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Blueberry Cheesecake (1 kg)",
        description:
          "Creamy baked cheesecake topped with a generous layer of real blueberry compote.",
        price: 1300.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744490025/dishes/56-Blueberry%20Cheesecake.jpg",
        categoryId: 5,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
     
        name: "Blueberry Cheesecake (500 gms)",
        description:
          "Creamy baked cheesecake topped with a generous layer of real blueberry compote.",
        price: 700.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744490371/dishes/57-Blueberry%20Cheesecake.jpg",
        categoryId: 5,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Truffle Cake (500 gms)",
        description:
          "Decadent chocolate cake with dark chocolate truffle icing and fudge layers.",
        price: 620.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744490547/dishes/58-Truffle%20Cake.jpg",
        categoryId: 5,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Truffle Cake (1 kg)",
        description:
          "Decadent chocolate cake with dark chocolate truffle icing and fudge layers.",
        price: 1150.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744490586/dishes/59-Truffle%20Cake.jpg",
        categoryId: 5,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
      
        name: "Pineapple Delight Cake (500 gms)",
        description:
          "Light vanilla sponge with whipped cream and juicy pineapple chunks.",
        price: 500.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744490667/dishes/60-Pineapple%20Delight%20Cake.jpg",
        categoryId: 5,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Pineapple Delight Cake (1 kg)",
        description:
          "Light vanilla sponge with whipped cream and juicy pineapple chunks.",
        price: 950.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744490734/dishes/61-Pineapple%20Delight%20Cake.jpg",
        categoryId: 5,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Tiramisu Cake (500 gms)",
        description:
          "Coffee-flavored layered dessert cake with mascarpone cream and cocoa dusting.",
        price: 680.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744490795/dishes/62-Tiramisu%20Cake.jpg",
        categoryId: 5,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Tiramisu Cake",
        description:
          "Coffee-flavored layered dessert cake with mascarpone cream and cocoa dusting.",
        price: 1250.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744490821/dishes/63-Tiramisu%20Cake.jpg",
        categoryId: 5,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Chocolate Hazelnut Cake (500 gms)",
        description:
          "Soft chocolate sponge with crunchy hazelnut praline and rich cocoa frosting.",
        price: 640.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744490872/dishes/64-Chocolate%20Hazelnut%20Cake.jpg",
        categoryId: 5,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Chocolate Hazelnut Cake (1 kg)",
        description:
          "Soft chocolate sponge with crunchy hazelnut praline and rich cocoa frosting.",
        price: 1180.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744490912/dishes/65-Chocolate%20Hazelnut%20Cake.jpg",
        categoryId: 5,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Black Forest Cake (500 gms)",
        description:
          "Traditional German-style chocolate cake with whipped cream and cherries.",
        price: 550.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744491135/dishes/66-Black%20Forest%20Cake.jpg",
        categoryId: 5,
        type: "Veg",
        createdAt:now,
        updatedAt: now,
      },
      {
      
        name: "Black Forest Cake (1 kg)",
        description:
          "Traditional German-style chocolate cake with whipped cream and cherries.",
        price: 1080.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744491176/dishes/67-Black%20Forest%20Cake.jpg",
        categoryId: 5,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Lotus Biscoff Cake (500 gms)",
        description:
          "A creamy and crunchy cake layered with Lotus Biscoff spread and crushed biscuits, topped with caramel drizzle.",
        price: 690.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744491340/dishes/68-lotus%20biscoff%20cake.png",
        categoryId: 5,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Lotus Biscoff Cake (1 kg)",
        description:
          "A creamy and crunchy cake layered with Lotus Biscoff spread and crushed biscuits, topped with caramel drizzle.",
        price: 1280.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744491374/dishes/69-lotus%20biscoff%20cake.png",
        categoryId: 5,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Strawberry Choco Cake (500 gms)",
        description:
          "A perfect blend of fresh strawberry compote and rich chocolate sponge, layered with whipped cream and choco drizzle.",
        price: 620.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744491496/dishes/70-chocolate%20strawberryCake.jpg",
        categoryId: 5,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Strawberry Choco Cake (1 kg)",
        description:
          "A perfect blend of fresh strawberry compote and rich chocolate sponge, layered with whipped cream and choco drizzle.",
        price: 1150.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744491537/dishes/71-chocolate%20strawberryCake.jpg",
        categoryId: 5,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Grilled Veggie Sandwich",
        description:
          "A wholesome sandwich loaded with grilled bell peppers, zucchini, onions, and cheese on multigrain bread.",
        price: 180.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744492420/Grilled_Veggie_Sandwich_fw87s6.jpg",
        categoryId: 4,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Chicken Tandoori Sandwich",
        description:
          "Juicy tandoori chicken pieces with mint mayo, lettuce, and onions grilled to perfection.",
        price: 220.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744492480/Chicken_Tandoori_Sandwich_yuw5br.jpg",
        categoryId: 4,
        type: "Non-Veg",
        createdAt:now,
        updatedAt:now,
      },
      {
       
        name: "Paneer Tikka Sandwich",
        description:
          "Spiced paneer cubes with onions, capsicum, and cheese in a grilled sandwich.",
        price: 190.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744492860/Paneer_Tikka_Sandwich_qvj9ef.jpg",
        categoryId: 4,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Classic Egg Mayo Sandwich",
        description:
          "Creamy egg mayo filling with a touch of mustard, served on white or brown bread.",
        price: 170.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744492861/Classic_Egg_Mayo_Sandwich_fcm9ef.jpg",
        categoryId: 4,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
  
        name: "Corn & Cheese Sandwich",
        description:
          "Melty cheese with sweet corn, herbs, and a hint of spice — a kid’s favorite!",
        price: 160.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744492860/Corn_Cheese_Sandwich_lz2sjn.webp",
        categoryId: 4,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
  
        name: "Peri Peri Chicken Sandwich",
        description:
          "Fiery peri peri grilled chicken with lettuce and tomato in soft bread.",
        price: 230.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744492863/Peri_Peri_Chicken_Sandwich_olk6yn.webp",
        categoryId: 4,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
      
        name: "Spicy Bombay Sandwich",
        description:
          "A street-style sandwich stuffed with mashed potatoes, chutney, onion, and tomato, toasted golden.",
        price: 150.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744492863/Spicy_Bombay_Sandwich_urxyhn.webp",
        categoryId: 4,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
      
        name: "BBQ Chicken Sandwich",
        description:
          "Smokey BBQ chicken strips with melted cheese and caramelized onions.",
        price: 240.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744492862/BBQ_Chicken_Sandwich_b0bgsp.jpg",
        categoryId: 4,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Capsicum & Mushroom Sandwich",
        description:
          "Sautéed capsicum and mushrooms with cheese and oregano seasoning.",
        price: 175.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744492862/CapsicumMushroom_Sandwich_ki9lsi.jpg",
        categoryId: 4,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Ham & Cheese Sandwich",
        description:
          "Classic deli ham layered with cheddar cheese and a touch of mustard.",
        price: 250.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744492862/Ham_Cheese_Sandwich_eqwumr.jpg",
        categoryId: 4,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Classic Alfredo Pasta",
        description:
          "Creamy white sauce pasta with parmesan, garlic, and herbs.",
        price: 260.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744493376/alfredo_pasta_c2cqrv.jpg",
        categoryId: 6,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Spaghetti Bolognese",
        description: "Traditional Italian pasta in a rich tomato-meat sauce.",
        price: 280.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744492862/Spaghetti_Bolognese_vokk3d.jpg",
        categoryId: 6,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Penne Arrabiata",
        description: "Spicy red sauce pasta with garlic and chili flakes.",
        price: 240.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744492862/Penne_Arrabiata_xbngng.jpg",
        categoryId: 6,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Chicken Pesto Pasta",
        description:
          "Grilled chicken tossed in homemade basil pesto with penne pasta.",
        price: 290.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744492861/Chicken_Pesto_Pasta_oi8tgg.jpg",
        categoryId: 6,
        type: "Non-Veg",
        createdAt:now,
        updatedAt:now,
      },
      {
       
        name: "Mac and Cheese",
        description: "Classic baked macaroni with gooey cheddar cheese.",
        price: 220.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744492861/Mac_and_Cheese_it0bez.jpg",
        categoryId: 6,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Seafood Marinara Pasta",
        description:
          "Pasta in a tomato base with shrimp, calamari, and fish chunks.",
        price: 320.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744492861/Seafood_Marinara_Pasta_pte6ni.jpg",
        categoryId: 6,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Mushroom Stroganoff Pasta",
        description: "Creamy stroganoff sauce with button mushrooms and herbs.",
        price: 250.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744492860/Mushroom_Stroganoff_Pasta_e3ubqj.jpg",
        categoryId: 6,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Chicken Lasagna",
        description: "Layered pasta with minced chicken, béchamel, and cheese.",
        price: 310.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744492861/Chicken_Lasagna_yyiimo.jpg",
        categoryId: 6,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
   
        name: "Veg Lasagna",
        description: "Baked layers of veggies, white sauce, and cheese.",
        price: 270.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744492860/Veg_Lasagna_nwclla.jpg",
        categoryId: 6,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
     
        name: "Chicken Penne Alfredo",
        description:
          "Tender chicken slices tossed with penne in creamy Alfredo sauce.",
        price: 290.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744492861/Chicken_Penne_Alfredo_oafypp.jpg",
        categoryId: 6,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
      
        name: "Veg Hakka Noodles",
        description:
          "Stir-fried noodles with mixed veggies and Indo-Chinese spices.",
        price: 150.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744527686/Veg_Hakka_Noodles_uhqpgh.jpg",
        categoryId: 7,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Chicken Schezwan Noodles",
        description: "Spicy schezwan noodles tossed with juicy chicken pieces.",
        price: 190.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744528368/Chicken-Schezwan-Noodles_l8j6zi.jpg",
        categoryId: 7,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Paneer Chilli Garlic Noodles",
        description: "Soft noodles tossed with paneer, garlic, and chili.",
        price: 170.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744528442/Paneer_Chilli_Garlic_Noodles_ozjbel.jpg",
        categoryId: 7,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Egg Hakka Noodles",
        description: "Classic egg noodles loaded with flavor and crunch.",
        price: 160.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744528661/Egg_Hakka_Noodles_xhzsnz.jpg",
        categoryId: 7,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Butter Garlic Noodles",
        description: "Mildly spiced buttery noodles with garlic aroma.",
        price: 140.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744528713/Butter_Garlic_Noodles_kj5xu1.jpg",
        categoryId: 7,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Mixed Noodles",
        description:
          "Combination of chicken, egg, and vegetables in spicy noodles.",
        price: 200.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744528760/Mixed_Noodles_yenery.jpg",
        categoryId: 7,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
     
        name: "Mushroom Noodles",
        description: "Tossed mushrooms with veggies and sauces in noodles.",
        price: 160.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744529035/Mushroom_Noodles_caadvi.jpg",
        categoryId: 7,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
      
        name: "Thai Style Noodles",
        description: "Noodles in tangy Thai sauce with basil and herbs.",
        price: 180.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744529104/Thai_Style_Noodles_tqsnr3.jpg",
        categoryId: 7,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Chili Chicken Noodles",
        description: "Spicy chili chicken with tossed noodles.",
        price: 210.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744529212/Chili_Chicken_Noodles_zbfrqg.jpg",
        categoryId: 7,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Singapore Noodles",
        description: "Thin noodles with veggies, spices, and curry flavor.",
        price: 175.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744529263/Singapore_Noodles_jczcha.webp",
        categoryId: 7,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Aloo Tikki Burger",
        description:
          "Crispy aloo tikki with mayo and lettuce in a toasted bun.",
        price: 80.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744529319/Aloo_Tikki_Burger_k7mbgi.jpg",
        categoryId: 8,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Chicken Burger",
        description: "Classic grilled chicken burger with cheese and lettuce.",
        price: 120.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744529360/Chicken_Burger_alutpe.jpg",
        categoryId: 8,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
   
        name: "Paneer Burger",
        description: "Crispy paneer patty with spicy chutney mayo.",
        price: 100.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744529430/Paneer_Burger_hlihxg.jpg",
        categoryId: 8,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Egg & Cheese Burger",
        description: "Fluffy egg omelette with melted cheese and sauces.",
        price: 110.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744529518/Egg_Cheese_Burger_y4rkdh.jpg",
        categoryId: 8,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
      
        name: "Veggie Delight Burger",
        description:
          "Loaded veggie patty with lettuce, onions and house sauce.",
        price: 90.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744529578/Veggie_Delight_Burger_ea8ykg.png",
        categoryId: 8,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Double Chicken Burger",
        description: "Two grilled chicken patties stacked with cheese.",
        price: 160.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744529632/Double_Chicken_Burger_sqng5a.webp",
        categoryId: 8,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Spicy Bean Burger",
        description: "Mexican-style spicy bean patty with chipotle sauce.",
        price: 95.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744529682/Spicy_Bean_Burger_f1dmeu.jpg",
        categoryId: 8,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Mutton Kebab Burger",
        description: "Juicy mutton kebab with mint chutney and onion rings.",
        price: 180.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744529786/Mutton_Kebab_Burger_l8qcul.jpg",
        categoryId: 8,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Corn & Cheese Burger",
        description: "Sweet corn and cheese patty with mayo and ketchup.",
        price: 105.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744529823/Corn_Cheese_Burger_ej94xt.webp",
        categoryId: 8,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Peri Peri Chicken Burger",
        description: "Fiery peri peri grilled chicken with jalapenos.",
        price: 140.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744529907/Peri_Peri_Chicken_Burger_1_o29vwr.jpg",
        categoryId: 8,
        type: "Non-Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Cappuccino",
        description: "Espresso with steamed milk foam.",
        price: 120.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744529952/Cappuccino_wh2uc9.jpg",
        categoryId: 9,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Cold Coffee",
        description: "Chilled coffee shake with ice cream and whipped cream.",
        price: 140.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744530017/Cold_Coffee_ytff40.jpg",
        categoryId: 9,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
      
        name: "Espresso Shot",
        description: "Strong black coffee in a small shot.",
        price: 80.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744530248/Espresso_Shot_m8y5pj.jpg",
        categoryId: 9,
        type: "Veg",
        createdAt:now,
        updatedAt:now,
      },
      {
      
        name: "Hazelnut Latte",
        description: "Smooth latte infused with hazelnut flavor.",
        price: 150.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744530282/Hazelnut_Latte_liqxrf.jpg",
        categoryId: 9,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Filter Coffee",
        description: "South Indian-style brewed filter coffee.",
        price: 70.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744530352/Filter_Coffee_vznzpq.jpg",
        categoryId: 9,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Mocha",
        description: "Espresso mixed with chocolate and milk.",
        price: 160.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744530393/Mocha_huboyr.jpg",
        categoryId: 9,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Irish Coffee",
        description: "Creamy coffee with Irish essence.",
        price: 170.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531565/Irish_Coffee_gjb0ib.jpg",
        categoryId: 9,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Vanilla Iced Coffee",
        description: "Cold brewed coffee with vanilla twist.",
        price: 130.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531596/Vanilla_Iced_Coffee_weirdf.webp",
        categoryId: 9,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Dalgona Coffee",
        description: "Whipped coffee foam over iced milk.",
        price: 150.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531596/Dalgona_Coffee_mianao.jpg",
        categoryId: 9,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Caramel Macchiato",
        description: "Espresso with caramel drizzle and frothy milk.",
        price: 165.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531598/Caramel_Macchiato_lr8itn.webp",
        categoryId: 9,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Fresh Orange Juice",
        description: "Pure squeezed oranges served chilled.",
        price: 90.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531600/Fresh_Orange_Juice_d0ldbj.jpg",
        categoryId: 10,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Watermelon Juice",
        description: "Hydrating watermelon juice, served fresh.",
        price: 80.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531603/Watermelon_Juice_f9pevc.jpg",
        categoryId: 10,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Mango Shake",
        description: "Rich mango pulp blended with milk and ice.",
        price: 100.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531604/Mango_Shake_yrgdh7.webp",
        categoryId: 10,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
      
        name: "Sweet Lime Juice",
        description: "Refreshing mosambi juice with a hint of salt.",
        price: 85.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531606/Sweet_Lime_Juice_dmehw6.webp",
        categoryId: 10,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Pomegranate Juice",
        description: "Antioxidant-rich juice freshly pressed.",
        price: 110.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531607/Pomegranate_Juice_iuykhe.jpg",
        categoryId: 10,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Grape Juice",
        description: "Sweet and tangy black grape juice.",
        price: 95.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531609/Grape_Juice_g2fbg1.jpg",
        categoryId: 10,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Banana Shake",
        description: "Smooth banana shake with ice cream option.",
        price: 90.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531611/banana-milkshake_ip5hhg.webp",
        categoryId: 10,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Papaya Juice",
        description: "Smoothie-style papaya juice rich in fiber.",
        price: 85.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531613/papaya-juice_i7mncg.jpg",
        categoryId: 10,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Pineapple Juice",
        description: "Tropical pineapple juice with pulp.",
        price: 90.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531615/Pineapple-Juice_fszfza.webp",
        categoryId: 10,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Mixed Fruit Juice",
        description: "A medley of seasonal fruits blended fresh.",
        price: 100.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531617/mixed_fruit_juice_zajtvd.avif",
        categoryId: 10,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Samosa",
        description: "Crispy fried pastry with spicy potato filling.",
        price: 30.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531619/samosa_edfcdf.webp",
        categoryId: 11,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Kachori",
        description: "Flaky deep-fried snack stuffed with lentils or spices.",
        price: 35.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531621/khasta-kachori_wnibse.jpg",
        categoryId: 11,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Dhokla",
        description:
          "Steamed savory cake made from fermented rice and chickpea batter.",
        price: 40.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531634/dhokla_vvnpz6.jpg",
        categoryId: 11,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Aloo Tikki",
        description: "Pan-fried potato patties spiced with Indian herbs.",
        price: 35.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531624/aloo_tikki_menlpi.jpg",
        categoryId: 11,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Pakora",
        description: "Deep-fried fritters made from vegetables and gram flour.",
        price: 25.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531632/PAKORA_gou76y.jpg",
        categoryId: 11,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Vada Pav",
        description: "Spicy potato fritter in a bun, Mumbai’s favorite snack.",
        price: 30.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531632/Vada-Pav_j5hojp.webp",
        categoryId: 11,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
      
        name: "Chole Bhature",
        description: "Fluffy fried bread served with spicy chickpeas.",
        price: 60.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531631/chole-bhature_imlcud.jpg",
        categoryId: 11,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Pav Bhaji",
        description: "Spicy mashed vegetable curry with buttered buns.",
        price: 55.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531633/Pav-Bhaji_ekk1uj.webp",
        categoryId: 11,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Bhel Puri",
        description: "Puffed rice snack tossed with tangy tamarind chutney.",
        price: 30.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531633/bhel_puri_skiuus.jpg",
        categoryId: 11,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Sev Puri",
        description: "Crispy puris topped with potato, chutneys, and sev.",
        price: 35.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744531973/Sev_Puri_ebhetc.jpg",
        categoryId: 11,
        type: "Veg",
        createdAt:now,
        updatedAt:now,
      },
      {
       
        name: "Spring Roll",
        description: "Crispy rolls filled with mixed vegetables and spices.",
        price: 60.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744532627/Spring_Roll_zwko5a.jpg",
        categoryId: 12,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Chilli Paneer",
        description: "Cottage cheese tossed in spicy Indo-Chinese sauces.",
        price: 90.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744532628/Chilli_Paneer_zir8ig.jpg",
        categoryId: 12,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Veg Manchurian",
        description: "Crispy vegetable balls in a spicy garlic-soy sauce.",
        price: 85.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744532629/Veg_Manchurian_rl9xoh.jpg",
        categoryId: 12,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Schezwan Fried Rice",
        description: "Spicy fried rice tossed with veggies and Schezwan sauce.",
        price: 80.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744532640/Triple_Schezwan_Rice_lq8phm.webp",
        categoryId: 12,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Chilli Mushroom",
        description: "Mushrooms cooked in a spicy tangy Chinese sauce.",
        price: 95.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744532633/Chilli_Mushroom_g1ftrx.jpg",
        categoryId: 12,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
   
        name: "Cheese Chilli",
        description: "Paneer and cheese tossed in spicy Chinese sauces.",
        price: 100.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744532635/Cheese_Chilli_g3geth.jpg",
        categoryId: 12,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Veg Lollipop",
        description: "Crispy deep-fried spiced veg balls served with dip.",
        price: 75.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744532639/Veg_Lollipop_durtmc.jpg",
        categoryId: 12,
        type: "Veg",
        createdAt:now,
        updatedAt:now,
      },
      {
       
        name: "Triple Schezwan Rice",
        description: "Fried rice with noodles and Manchurian in spicy sauce.",
        price: 110.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744532640/Triple_Schezwan_Rice_lq8phm.webp",
        categoryId: 12,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Hot & Sour Soup",
        description: "Spicy and tangy soup with vegetables and soy flavors.",
        price: 55.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744532641/Hot_Sour_Soup_zeagyw.jpg",
        categoryId: 12,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Steamed Veg Momos",
        description:
          "Soft dumplings filled with seasoned veggies, served with chutney.",
        price: 60.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744532643/Steamed_Veg_Momos_yvscse.jpg",
        categoryId: 12,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Veg Dimsums",
        description: "Delicate and light Chinese-style steamed dumplings.",
        price: 65.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744532646/Veg_Dimsums_d1gv07.webp",
        categoryId: 12,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Margherita Pizza",
        description: "Classic Neapolitan pizza with mozzarella and basil.",
        price: 130.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744532647/Margherita_Pizza_u02yhp.jpg",
        categoryId: 13,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Garlic Bread Supreme",
        description: "Crusty garlic bread topped with herbs and cheese.",
        price: 80.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744532649/Garlic_Bread_Supreme_cgyzrv.jpg",
        categoryId: 13,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Bruschetta",
        description: "Grilled bread with tomato, garlic, and olive oil.",
        price: 90.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744532652/Bruschetta_gdmrus.jpg",
        categoryId: 13,
        type: "Veg",
        createdAt:now,
        updatedAt:now,
      },
      {
        
        name: "Veg Calzone",
        description: "Folded pizza stuffed with veggies, cheese, and herbs.",
        price: 140.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744532653/Veg_Calzone_ytkesz.jpg",
        categoryId: 13,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
      
        name: "Mushroom Risotto",
        description: "Creamy Italian rice dish with sautéed mushrooms.",
        price: 160.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744532655/Mushroom_Risotto_zhivva.jpg",
        categoryId: 13,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Italian Cheese Balls",
        description: "Crispy cheese-filled balls with Italian herbs.",
        price: 110.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744532658/Italian_Cheese_Balls_bu4lgc.jpg",
        categoryId: 13,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Zucchini Fritters",
        description: "Crispy pan-fried zucchini with Italian seasoning.",
        price: 100.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744532660/Zucchini_Fritters_teqfbs.jpg",
        categoryId: 13,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Stuffed Bell Peppers",
        description: "Italian-style baked bell peppers with rice and cheese.",
        price: 130.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744533403/Stuffed_Bell_Peppers_g7i7fe.jpg",
        categoryId: 13,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Cheese Arancini",
        description: "Deep-fried risotto balls stuffed with cheese.",
        price: 120.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744533403/Cheese_Arancini_kqqfp7.jpg",
        categoryId: 13,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Tiramisu Cups",
        description: "Mini versions of the classic coffee-flavored dessert.",
        price: 95.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744533406/tiramisu_cups_elwz7p.webp",
        categoryId: 13,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Veg Tacos",
        description: "Crispy taco shells filled with spicy veggies and cheese.",
        price: 120.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744533408/Veg_Tacos_mpvymf.jpg",
        categoryId: 14,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Cheesy Nachos",
        description: "Crunchy nachos topped with cheese, beans, and salsa.",
        price: 110.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744533410/Cheesy_Nachos_krtmpp.jpg",
        categoryId: 14,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Mexican Burrito",
        description: "Stuffed tortilla roll with rice, beans, and veggies.",
        price: 140.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744533414/Mexican_Burrito_obhgcv.jpg",
        categoryId: 14,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Quesadilla",
        description: "Grilled tortilla stuffed with melted cheese and peppers.",
        price: 130.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744533414/Quesadilla_bffyae.jpg",
        categoryId: 14,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Mexican Rice Bowl",
        description: "Flavored rice bowl with beans, veggies, and sour cream.",
        price: 150.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744533416/Mexican_Rice_Bowl_rnfgln.jpg",
        categoryId: 14,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Churros with Chocolate Dip",
        description: "Crispy fried dough sticks served with warm chocolate.",
        price: 100.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744533672/Churros_with_Chocolate_Dip_plklcv.jpg",
        categoryId: 14,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Mexican Corn on the Cob",
        description: "Grilled corn topped with chili, lemon, and cheese.",
        price: 90.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744533674/Mexican_Corn_on_the_Cob_fkzlvw.jpg",
        categoryId: 14,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Enchiladas",
        description: "Tortillas rolled with beans and cheese, baked in sauce.",
        price: 135.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744533674/Enchiladas_tk8iti.jpg",
        categoryId: 14,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Mexican Paneer Wrap",
        description: "Spicy paneer wrap with beans, salsa, and cheese.",
        price: 125.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744533678/Mexican_Paneer_Wrap_il8zla.jpg",
        categoryId: 14,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Spicy Salsa Fries",
        description: "Crispy fries topped with jalapeños, salsa, and cheese.",
        price: 105.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744533680/Spicy_Salsa_Fries_mbjcp5.jpg",
        categoryId: 14,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Paneer Butter Masala",
        description: "Rich tomato-based curry with soft paneer cubes.",
        price: 150.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535526/Paneer_Butter_Masala_lzkwpi.jpg",
        categoryId: 15,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Dal Makhani",
        description: "Creamy black lentil curry with butter and spices.",
        price: 130.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535528/Dal_Makhani_bwkesv.jpg",
        categoryId: 15,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Veg Biryani",
        description: "Fragrant basmati rice cooked with mixed vegetables.",
        price: 140.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535529/Veg_Biryani_aa77tc.jpg",
        categoryId: 15,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Chole Masala",
        description: "Spicy chickpea curry cooked with onion and tomato.",
        price: 120.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535531/Chole_Masala_bmvzku.jpg",
        categoryId: 15,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Aloo Gobi",
        description: "Potato and cauliflower cooked with Indian spices.",
        price: 110.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535533/Aloo_Gobi_cwknll.jpg",
        categoryId: 15,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Baingan Bharta",
        description: "Roasted mashed eggplant cooked with garlic and spices.",
        price: 115.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535537/Baingan_Bharta_hmfya7.jpg",
        categoryId: 15,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Butter Naan",
        description: "Soft leavened Indian bread topped with butter.",
        price: 40.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535538/Butter_Naan_jhqwn8.jpg",
        categoryId: 15,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Tandoori Roti",
        description: "Whole wheat flatbread cooked in a tandoor oven.",
        price: 30.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535540/Tandoori_Roti_df56iw.jpg",
        categoryId: 15,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Missi Roti",
        description: "Spiced gram flour flatbread with herbs.",
        price: 35.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535542/Missi_Roti_ultum6.jpg",
        categoryId: 15,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Stuffed Kulcha",
        description: "Soft bread stuffed with spiced potatoes and herbs.",
        price: 50.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535544/Stuffed_Kulcha_zqy0s5.jpg",
        categoryId: 15,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Lachha Paratha",
        description: "Layered crispy flatbread made with ghee.",
        price: 45.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535548/Lachha_Paratha_pcfc3l.jpg",
        categoryId: 15,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Masala Dosa",
        description: "South Indian rice crepe filled with spiced potatoes.",
        price: 110.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535550/Masala_Dosa_tvxtyj.jpg",
        categoryId: 15,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Rajma Chawal",
        description: "Red kidney beans curry served with steamed rice.",
        price: 100.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535551/Rajma_Chawal_pkbkyu.jpg",
        categoryId: 15,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Kadai Paneer",
        description: "Paneer cooked with capsicum and onion in spicy gravy.",
        price: 140.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535553/Kadai_Paneer_uobxri.jpg",
        categoryId: 15,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "Aloo Paratha with Curd",
        description: "Stuffed flatbread served with curd and pickle.",
        price: 80.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535557/Aloo_Paratha_with_Curd_wugsnj.jpg",
        categoryId: 15,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Jeera Rice with Curry",
        description: "Flavored cumin rice served with tangy Indian curry.",
        price: 100.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535559/Jeera_Rice_with_Curry_prz0ye.jpg",
        categoryId: 15,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "North Indian Thali",
        description: "Includes dal, paneer, roti, rice, salad & sweet.",
        price: 180.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535560/North_Indian_Thali_csrxgj.jpg",
        categoryId: 16,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
       
        name: "South Indian Thali",
        description: "Idli, dosa, sambar, rice, rasam, and sweet dish.",
        price: 170.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535563/South_Indian_Thali_mloiup.jpg",
        categoryId: 16,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Chinese Thali",
        description: "Noodles, manchurian, fried rice, and spring roll.",
        price: 190.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535567/chinese_thali_wgcoqc.jpg",
        categoryId: 16,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Mini Tandoor Platter",
        description: "Paneer tikka, veg kebabs, naan & mint chutney.",
        price: 255.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535568/Mini_Tandoor_Platter_elmjlv.jpg",
        categoryId: 16,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Punjabi Thali",
        description: "Chole, rajma, rice, roti, salad, and dessert.",
        price: 185.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535572/Punjabi_Thali_nt0kqv.jpg",
        categoryId: 16,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
      {
        
        name: "Tandoori Platter Deluxe",
        description: "Mix of grilled tandoori vegetables with naan.",
        price: 500.0,
        imageUrl:
          "https://res.cloudinary.com/dcaopuoo4/image/upload/v1744535573/Tandoori_Platter_Deluxe_rwcb6v.jpg",
        categoryId: 16,
        type: "Veg",
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Dishes", {
      categoryId: {
        [Sequelize.Op.in]: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
        ],
      },
    });
  },
};
