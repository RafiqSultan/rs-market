import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
 const store = createStore({
  state:{
    cartItemNumber:[],
    newPhones:[
        {
            "id": 1,
            "model": "Google Pixel 3",
            "image": "https://enfield-bd.com/wp-content/uploads/2021/12/Google-Pixel-3XL-4GB-128GB-Original-4G-Android-6.38221-12.2MP-Dual-8MP-Octa-Core-Snapdragon-845-NFC.jpg",
            "price": 799
        },
        {
            "id": 2,
            "model": "Samsung Note 9",
            "image": "https://www.gizmochina.com/wp-content/uploads/2018/07/Samsung-Galaxy-Note9-SD845-458x344.jpg",
            "price": 999
        },
        {
            "id": 3,
            "model": "Apple iPhone XS",
            "image": "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-xs-max-gold.png?v=5",
            "price": 999
        },
        {
            "id": 4,
            "model": "Samsung Galaxy S9+",
            "image": "https://computex2buy.com/wp-content/uploads/2020/08/samsung-galaxy-s9-purple.jpg",
            "price": 840
        },
        {
            "id": 5,
            "model": "Xiaomi Pocophone F1",
            "image": "https://www.geekmall.eu/4937-thickbox_default/xiaomi-pocophone-f1-6gb-128gb-graphite-black.jpg",
            "price": 300
        },
        {
            "id": 6,
            "model": "Xiaomi Mi 8",
            "image": "https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/p/w/pwb000246163.jpg",
            "price": 400
        },
        {
            "id": 7,
            "model": "Huawei Mate 10 Pro",
            "image": "https://mobelat.com/wp-content/uploads/2017/10/huawei-mate10-pro-thumb-mobiylat.jpg",
            "price": 800
        }
        
    ],

    discount:[
        {
            "id": 1,
            "model": "Samsung Galaxy Note 20 Ultra 5G",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71U1rKhe39L._AC_UY218_.jpg",
            "price": 1749,
            'disc':20
        },
        {
            "id": 2,
            "model": "2 X.Vilitur Motorcycle",
            "image": "https://m.media-amazon.com/images/I/41g0I3JCcvL._AC_UY218_.jpg",
            "price": 175,
            'disc':10
        },
        {
            "id": 3,
            "model": "Apple iPhone 11 Pro",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51cUdVn8N1L._AC_UL320_.jpg",
            "price": 1247,
            'disc':15
        },
        {
            "id": 4,
            "model": "SAMSUNG Galaxy S22 Ultra ",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61nhOdlKpDL._AC_SX466_.jpg",
            "price": 1869,
            'disc':25
        },
        {
            "id": 5,
            "model": "Apple AirPods Pro",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71zny7BTRlL._AC_UY218_.jpg",
            "price": 80,
            'disc':15
        },
        {
            "id": 5,
            "model": "Apple iPhone 6",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41gLxTGDHSL._AC_UL320_.jpg",
            "price": 700,
            'disc':20
        }
        
    ],

    handsfree:[
        {
            "id": 1,
            "model": "Plantronics by Poly Voyager",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71VwcGhEeJL._AC_UY218_.jpg",
            "price": 36
        },
        {
            "id": 2,
            "model": "2 X.Vilitur Motorcycle",
            "image": "https://m.media-amazon.com/images/I/41g0I3JCcvL._AC_UY218_.jpg",
            "price": 175
        },
        {
            "id": 3,
            "model": "SAMSUNG Galaxy Buds 2 Pro",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Qqg+T8nsL._AC_UY218_.jpg",
            "price": 34
        },
        {
            "id": 4,
            "model": "Apple AirPods Max",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81NIpE9-5mL._AC_SX522_.jpg",
            "price": 45
        },
        {
            "id": 5,
            "model": "Apple AirPods Pro",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71zny7BTRlL._AC_UY218_.jpg",
            "price": 80
        },
        {
            "id": 6,
            "model": "Apple AirPods Pro",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71bhWgQK-cL._AC_SX522_.jpg",
            "price": 46
        },
        
    ],
    samsung:[
        {
            "id": 1,
            "model": "SAMSUNG Galaxy S22 Ultra ",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61nhOdlKpDL._AC_SX466_.jpg",
            "price": 1869
        },
        {
            "id": 2,
            "model": "SAMSUNG Galaxy Z Fold 4",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71DhIuzEemL._AC_SX466_.jpg",
            "price": 959
        },
        {
            "id": 3,
            "model": "Samsung Galaxy Note 20 Ultra 5G",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71U1rKhe39L._AC_UY218_.jpg",
            "price": 1749
        },
        {
            "id": 4,
            "model": "AMSUNG Galaxy Z Flip 3 5G",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51DhX1XpliL._AC_SX466_.jpg",
            "price": 1719
        },
        {
            "id": 5,
            "model": "SAMSUNG Galaxy S21 Ultra 5G",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61bLefD79-L._AC_SX679_.jpg",
            "price": 1549
        },
        {
            "id": 6,
            "model": "SAMSUNG Galaxy A53 5G",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71HN4P-pd5L._AC_UY218_.jpg",
            "price": 600
        },
        
    ],
    apple:[
        {
            "id": 1,
            "model": "Apple iPhone 12",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/710mNDEecxL._AC_UY218_.jpg",
            "price": 498
        },
        {
            "id": 2,
            "model": "Apple iPhone 13 Pro Max",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61OgrkMY4XL._AC_UY218_.jpg",
            "price": 1259
        },
        {
            "id": 3,
            "model": "2020 Apple iPad Pro",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81Pi4nhjlwL._AC_UY218_.jpg",
            "price": 1029
        },
        {
            "id": 4,
            "model": "iPhone SE 16GB",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81KMjBNIAbL._AC_UL320_.jpg",
            "price": 600
        },
        {
            "id": 5,
            "model": "Apple iPhone 6",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41gLxTGDHSL._AC_UL320_.jpg",
            "price": 700
        },
        {
            "id": 6,
            "model": "Apple iPhone 11 Pro",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51cUdVn8N1L._AC_UL320_.jpg",
            "price": 1247
        },
        
    ],
   
    
  },
//   End of state
// Getter---------
getters:{
    // return number of cartItem
    numberOfCart(state){
       return state.cartItemNumber.length;
    },
},
// Mutation
mutations:{
    inCart(state, n) { 
        return state.cartItemNumber.push(n);
      },
 },
})



export default store;
