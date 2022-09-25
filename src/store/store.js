import { createApp } from 'vue'
import { createStore } from 'vuex'
import { db, fs } from '../firebase'
export default createStore({
  state:{
    cart: [],
    cartItemNumber:[],
    // favItem:[],
    newPhones:[
        {
            "id": 1,
            'type':'new',
            "model": "Google Pixel 3",
            "image": "https://enfield-bd.com/wp-content/uploads/2021/12/Google-Pixel-3XL-4GB-128GB-Original-4G-Android-6.38221-12.2MP-Dual-8MP-Octa-Core-Snapdragon-845-NFC.jpg",
            "price": 799,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 2,
            'type':'new',
            "model": "Samsung Note 9",
            "image": "https://www.gizmochina.com/wp-content/uploads/2018/07/Samsung-Galaxy-Note9-SD845-458x344.jpg",
            "price": 999,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 3,
            'type':'new',
            "model": "Apple iPhone XS",
            "image": "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-xs-max-gold.png?v=5",
            "price": 999,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 4,
            'type':'new',
            "model": "Samsung Galaxy S9+",
            "image": "https://computex2buy.com/wp-content/uploads/2020/08/samsung-galaxy-s9-purple.jpg",
            "price": 840,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 5,
            'type':'new',
            "model": "Xiaomi Pocophone F1",
            "image": "https://www.geekmall.eu/4937-thickbox_default/xiaomi-pocophone-f1-6gb-128gb-graphite-black.jpg",
            "price": 300,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 6,
            'type':'new',
            "model": "Xiaomi Mi 8",
            "image": "https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/p/w/pwb000246163.jpg",
            "price": 400,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 7,
            'type':'new',
            "model": "Huawei Mate 10 Pro",
            "image": "https://mobelat.com/wp-content/uploads/2017/10/huawei-mate10-pro-thumb-mobiylat.jpg",
            "price": 800,
            "cart": false,
            "quantity": 1,
            "discount":0
        }
        
    ],

    discount:[
        {
            "id": 101,
            'type':'discount',
            "model": "Samsung Galaxy Note 20 Ultra 5G",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71U1rKhe39L._AC_UY218_.jpg",
            "price": 1749,
            "cart": false,
            "quantity": 1,
            "discount":20
        },
        {
            "id": 102,
            'type':'discount',
            "model": "2 X.Vilitur Motorcycle",
            "image": "https://m.media-amazon.com/images/I/41g0I3JCcvL._AC_UY218_.jpg",
            "price": 175,
            "cart": false,
            "quantity": 1,
            "discount":10
        },
        {
            "id": 103,
            'type':'discount',
            "model": "Apple iPhone 11 Pro",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51cUdVn8N1L._AC_UL320_.jpg",
            "price": 1247,
            "cart": false,
            "quantity": 1,
            "discount":10
        },
        {
            "id":104,
            'type':'discount',
            "model": "SAMSUNG Galaxy S22 Ultra ",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61nhOdlKpDL._AC_SX466_.jpg",
            "price": 1869,
            "cart": false,
            "quantity": 1,
            "discount":25
        },
        {
            "id": 105,
            'type':'discount',
            "model": "Apple AirPods Pro",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71zny7BTRlL._AC_UY218_.jpg",
            "price": 80,
            "cart": false,
            "quantity": 1,
            "discount":15
        },
        {
            "id": 106,
            'type':'discount',
            "model": "Apple iPhone 6",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41gLxTGDHSL._AC_UL320_.jpg",
            "price": 700,
            "cart": false,
            "quantity": 1,
            "discount":25
        }
        
    ],

    handsfree:[
        {
            "id": 201,
            'type':'handsfree',
            "model": "Plantronics by Poly Voyager",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71VwcGhEeJL._AC_UY218_.jpg",
            "price": 36,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 202,
            'type':'handsfree',
            "model": "2 X.Vilitur Motorcycle",
            "image": "https://m.media-amazon.com/images/I/41g0I3JCcvL._AC_UY218_.jpg",
            "price": 175,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 203,
            'type':'handsfree',
            "model": "SAMSUNG Galaxy Buds 2 Pro",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Qqg+T8nsL._AC_UY218_.jpg",
            "price": 34,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 204,
            'type':'handsfree',
            "model": "Apple AirPods Max",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81NIpE9-5mL._AC_SX522_.jpg",
            "price": 45,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 205,
            'type':'handsfree',
            "model": "Apple AirPods Pro",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71zny7BTRlL._AC_UY218_.jpg",
            "price": 80,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 206,
            'type':'handsfree',
            "model": "Apple AirPods Pro",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71bhWgQK-cL._AC_SX522_.jpg",
            "price": 46,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        
    ],
    samsung:[
        {
            "id": 301,
            'type':'samsung',
            "model": "SAMSUNG Galaxy S22 Ultra ",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61nhOdlKpDL._AC_SX466_.jpg",
            "price": 1869,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 302,
            'type':'samsung',
            "model": "SAMSUNG Galaxy Z Fold 4",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71DhIuzEemL._AC_SX466_.jpg",
            "price": 959,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 303,
            'type':'samsung',
            "model": "Samsung Galaxy Note 20 Ultra 5G",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71U1rKhe39L._AC_UY218_.jpg",
            "price": 1749,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id":304,
            'type':'samsung',
            "model": "AMSUNG Galaxy Z Flip 3 5G",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51DhX1XpliL._AC_SX466_.jpg",
            "price": 1719,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 305,
            'type':'samsung',
            "model": "SAMSUNG Galaxy S21 Ultra 5G",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61bLefD79-L._AC_SX679_.jpg",
            "price": 1549,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 306,
            'type':'samsung',
            "model": "SAMSUNG Galaxy A53 5G",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71HN4P-pd5L._AC_UY218_.jpg",
            "price": 600,
            "cart": false,
            "quantity": 1,
            "discount":0
            
        },
        {
            "id": 307,
            'type':'samsung',
            "model": "SAMSUNG Galaxy S21 Ultra 5G",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61bLefD79-L._AC_SX679_.jpg",
            "price": 1549,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 308,
            'type':'samsung',
            "model": "SAMSUNG Galaxy A53 5G",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71HN4P-pd5L._AC_UY218_.jpg",
            "price": 600,
            "cart": false,
            "quantity": 1,
            "discount":0
        }
        
    ],
    apple:[
        {
            "id": 401,
            'type':'apple',
            "model": "Apple iPhone 12",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/710mNDEecxL._AC_UY218_.jpg",
            "price": 498,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 402,
            'type':'apple',
            "model": "Apple iPhone 13 Pro Max",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61OgrkMY4XL._AC_UY218_.jpg",
            "price": 1259,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 403,
            'type':'apple',
            "model": "2020 Apple iPad Pro",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81Pi4nhjlwL._AC_UY218_.jpg",
            "price": 1029,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 404,
            'type':'apple',
            "model": "iPhone SE 16GB",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81KMjBNIAbL._AC_UL320_.jpg",
            "price": 600,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 405,
            'type':'apple',
            "model": "Apple iPhone 6",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41gLxTGDHSL._AC_UL320_.jpg",
            "price": 700,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 406,
            'type':'apple',
            "model": "Apple iPhone 11 Pro",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51cUdVn8N1L._AC_UL320_.jpg",
            "price": 1247,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 407,
            'type':'apple',
            "model": "Apple iPhone 6",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41gLxTGDHSL._AC_UL320_.jpg",
            "price": 700,
            "cart": false,
            "quantity": 1,
            "discount":0
        },
        {
            "id": 408,
            'type':'apple',
            "model": "Apple iPhone 11 Pro",
            "image": "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51cUdVn8N1L._AC_UL320_.jpg",
            "price": 1247,
            "cart": false,
            "quantity": 1,
            "discount":0
        }
        
    ]
    
  },
//   End of state
// Getter---------
 getters:{
//     // return number of cartItem
//     // lenCart(){
//     //    return state.cartItemNumber.length;
//     // },
    cartItemNumber: (state) => state.cartItemNumber,
    getProducts: state => {
        return state.newPhones
      },
      getCart: state => {
        return state.cart
      },
      getNumberOfCart: state =>{
        return state.cart.length
      },
      getTotal: state => {
        let total = 0
        state.cart.map((p) => {
          total += p.price * p.quantity
        })
        return total
      },
 },
// Actions ---------------------------------------
actions:{
   //Add product To Cart in Firebase Firestore
    async addProduct({ commit }, product) {
      await db.collection('cart').doc(`${product.id}`).set(product, { merge: true })
      },
      // On mount load data from firebase into cart
      addAllProducts({commit} , productToCart){
      commit('addAllProducts',productToCart);
      },
      // Icrease quantity of product 
      increase({ commit }, id) {
      db.collection('cart').doc(`${id}`).update("quantity", fs.firestore.FieldValue.increment(1))
      },
      // Decrease quantity of product 
      decrease({ commit }, id) {
      db.collection('cart').doc(`${id}`).update("quantity", fs.firestore.FieldValue.increment(-1))
       },
      // Empty Cart
      cleanStore({commit}){
        commit('cleanStore');
      },
     
     
},
// Mutation ---------------------------------------
mutations:{
  //Add product To Cart in Firebase Firestore
    // addProduct(state, product) {
    //     // Reference messages collection
    //   },

    //Load  product To Cart in Firebase Firestore
    addAllProducts(state,productToCart){
      state.cart.push(productToCart);
      // console.log('ADD All');
      // let z= state.cart;
      // console.log(z.model);
    },
    // Clean Store
    cleanStore(state){
      state.cart=[];
    },

     
},
})



