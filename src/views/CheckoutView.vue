<template>
  <TheHeader />
  <div class="container checkout px-4 py-5 mx-auto">
    <div class="row d-flex">
      <div class="cart">
        <div class="head">
          <div class="col-lg-2 col-md-2">
            <h3>Shopping Cart</h3>
          </div>
          <div class="col-lg-2 col-md-2">
            <div id="price">Model</div>
          </div>
          <div class="col-lg-2 col-md-2">
            <div id="price">Price</div>
          </div>
          <div class="col-lg-2 col-md-2">
            <div id="quantity">Quantity</div>
          </div>
          <div class="col-lg-2 col-md-2">
            <div id="total">Total</div>
          </div>
          <div class="col-lg-2 col-md-2">
            <div id="total">Delete</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Cart Order Buy -->

    <div
      class="row cartItem"
      v-for="(item, index) in resultCartItem"
      :key="item.id"
    >
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">
        <div class="img">
          <img :src="item.phoneImg" alt="" />
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-3 col-3">
        <h5 class="model">{{ item.phoneModel }}</h5>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">
        <h5 class="price"><span>$</span>{{ item.phonePrice }}</h5>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-5 col-5">
        <div class="quantity">
          <div @click="minusQuantity(item)">
            <i class="fas fa-circle-minus"></i>
          </div>
          <span>{{ item.phoneQuantity }}</span>
          <div @click="plusQuantity(item)">
            <i class="fas fa-circle-plus"></i>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-6 col-6">
        <h5 class="price"><span>$</span>{{ item.totalPrice }}</h5>
      </div>
      <div
        class="trash col-lg-2 col-md-2 col-sm-6 col-6"
        title="delete"
        @click="removeCart(item)"
      >
        <i class="fas fa-trash"></i>
      </div>

      <!-- Pyment Method -->
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-12">
        <div class="card">
          <div class="row">
            <div class="col-lg-3 radio-group">
              <div class="row d-flex px-3 radio">
                <img
                  class="pay"
                  src="https://thumbs.dreamstime.com/z/credit-card-icon-vector-isolated-white-background-your-web-mobile-app-design-credit-card-logo-concept-credit-card-icon-134165664.jpg"
                />
                <p class="my-auto">Credit Card</p>
              </div>
              <div class="row d-flex px-3 radio gray">
                <img
                  class="pay"
                  src="https://icon-library.com/images/debit-card-icon/debit-card-icon-4.jpg"
                />
                <p class="my-auto">Debit Card</p>
              </div>
              <div class="row d-flex px-3 radio gray mb-3">
                <img
                  class="pay"
                  src="https://images.squarespace-cdn.com/content/v1/5e1c37cf9b245f360f07ee55/1620883887546-H8C6WEA322YT6DUZJ4TL/EmailMidImage_500x500_A+-+Shopper%402x.png"
                />
                <p class="my-auto">PayPal</p>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="row px-2">
                <div class="form-group col-md-6">
                  <label class="form-control-label">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cname"
                    placeholder="Johnny Doe"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label class="form-control-label">Card Number</label>
                  <input
                    type="text"
                    id="cnum"
                    name="cnum"
                    placeholder="1111 2222 3333 4444"
                  />
                </div>
              </div>
              <div class="row px-2">
                <div class="form-group col-md-6">
                  <label class="form-control-label">Expiration Date</label>
                  <input
                    type="text"
                    id="exp"
                    name="exp"
                    placeholder="MM/YYYY"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label class="form-control-label">CVV</label>
                  <input type="text" id="cvv" name="cvv" placeholder="***" />
                </div>
              </div>
            </div>
            <div class="col-lg-4 mt-2">
              <div class="row d-flex justify-content-between px-4">
                <p class="mb-1 text-left">Subtotal</p>
                <h6 class="mb-1 text-right">{{ totalOfProduct }}</h6>
              </div>
              <div class="row d-flex justify-content-between px-4">
                <p class="mb-1 text-left">discount Code</p>
                <h6 class="mb-1 text-right">$0.00</h6>
              </div>
              <div class="row d-flex justify-content-between px-4" id="tax">
                <p class="mb-1 text-left">Total Price :</p>
                <h6 class="mb-4 text-right">{{ totalOfProduct }}</h6>
              </div>
              <router-link
                tag="button"
                to="/my-order"
                class="btn-blue"
                @click="saveOrder()"
              >
                Checkout
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <TheFooter />
</template>
<script>
import TheFooter from "../components/Layouts/TheFooter.vue";
import TheHeader from "../components/Layouts/TheHeader.vue";
export default {
  data() {
    return {
      resultCartItem: [],
    };
  },
  components: { TheFooter, TheHeader },
  //   computed: {
  //     numberOfQuantity(index) {
  //       return index;
  //     },
  //   },
  //   computed: {
  //     plusQuantity(order) {
  //       order.phoneQuantity++;
  //       order.totalPrice = order.phoneQuantity * order.totalPrice;
  //       index = this.resultCartItem.findIndex((obj) => obj.id == order.id);
  //       this.resultCartItem[index].push(order);
  //     },
  //   },
  computed: {
    // Sum of Toala Price
    totalOfProduct() {
      let sum = 0;
      this.resultCartItem.forEach((item) => {
        sum += item.totalPrice;
      });
      return sum;
    },
  },
  methods: {
    // Increse the Quantity
    plusQuantity(order) {
      order.phoneQuantity++;
      order.totalPrice = order.phoneQuantity * order.phonePrice;
      index = this.resultCartItem.findIndex((obj) => obj.id == order.id);
      this.resultCartItem[index].push(order);

      console.log(typeof this.resultCartItem);
    },
    // Decrese the Quantity
    minusQuantity(order) {
      if (order.phoneQuantity <= 1) {
        order.phoneQuantity = 1;
      } else {
        order.phoneQuantity--;
      }
      order.totalPrice = order.phoneQuantity * order.phonePrice;
      index = this.resultCartItem.findIndex((obj) => obj.id == order.id);
      this.resultCartItem[index].push(order);
    },
    // Remove item from Cart
    removeCart(order) {
      this.resultCartItem = this.resultCartItem.filter(
        (obj) => obj.id !== order.id
      );
    },
    // Save data order into firebase
    saveOrder() {
      this.resultCartItem.forEach((item) => {
        fetch(
          "https://mobile-market-bf248-default-rtdb.firebaseio.com/CartOrder.json",
          {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              model: item.phoneModel,
              img: item.phoneImg,
              price: item.phonePrice,
              quantity: item.phoneQuantity,
              total: item.totalPrice,
            }),
          }
        );
      });
    },

    // // Sum of Toala Price
    // totalOfProduct() {
    //   let sum = 0;
    //   this.resultCartItem.forEach((item) => {
    //     sum += item.totalPrice;
    //   });
    //   return sum;
    // },
  },

  mounted() {
    fetch(
      "https://mobile-market-bf248-default-rtdb.firebaseio.com/itemCart.json"
    )
      .then((Response) => {
        if (Response.ok) {
          return Response.json();
        }
      })
      .then((data) => {
        const results = [];
        for (const id in data) {
          results.push({
            id: id,
            phoneImg: data[id].img,
            phoneModel: data[id].model,
            phonePrice: data[id].price,
            phoneQuantity: data[id].quantity,
            totalPrice: data[id].total,
          });
        }
        this.resultCartItem = results;
        console.log(typeof this.resultCartItem);
      });
  },
};
</script>
  
<style scoped>
.checkout {
  margin-top: 120px;
}
.head {
  display: flex;
  align-items: center;
  justify-content: center !important;
  padding: 0.8rem;
  border-bottom: 1px solid #f00;
  text-align: center;
}
/* Style For Cart Order */
.cartItem {
  width: 100%;
  padding: 0.8rem;
  background-color: #fff;
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center !important;
  border-radius: 10px;
  margin: 0.8rem 0;
  border: none;
  text-align: center;
  font-size: 20px;
  overflow: hidden;
}
.img {
  height: 50px;
  overflow: hidden;
  text-align: center;
}
.img img {
  height: 100%;
}
.quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.quantity span {
  margin: 0 10px;
}
.quantity .fa-circle-minus,
.quantity .fa-circle-plus {
  color: #311b92;
  cursor: pointer;
}

.price span {
  color: #311b92;
}
.fa-trash {
  color: #f00;
  cursor: pointer;
}
/* Style For Pyment Method */
.card {
  margin: 40px 0px;
  padding: 40px 50px;
  border-radius: 20px;
  border: none;
  box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.2);
}

input,
textarea {
  background-color: #f3e5f5;
  padding: 8px 15px 8px 15px;
  width: 100%;
  border-radius: 5px !important;
  box-sizing: border-box;
  border: 1px solid #f3e5f5;
  font-size: 15px !important;
  color: #000 !important;
  font-weight: 300;
}

input:focus,
textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #9fa8da;
  outline-width: 0;
  font-weight: 400;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}

.pay {
  width: 80px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #673ab7;
  margin: 10px 20px 10px 0px;
  cursor: pointer;
  box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.2);
}

.gray .pay {
  box-shadow: none;
}

#tax {
  border-top: 1px lightgray solid;
  margin-top: 10px;
  padding-top: 10px;
}

.btn-blue {
  border: none;
  border-radius: 10px;
  background-color: #673ab7;
  color: #fff;
  padding: 10px 20px;
  margin: 20px 0 0 0 !important;
  cursor: pointer;
}

.btn-blue:hover {
  background-color: #311b92;
  color: #fff;
}

#check-amt {
  float: right;
}

@media screen and (max-width: 768px) {
  .book,
  .book-img {
    width: 100px;
    height: 150px;
  }

  .card {
    padding-left: 15px;
    padding-right: 15px;
  }

  .mob-text {
    font-size: 13px;
  }

  .pad-left {
    padding-left: 20px;
  }
}
@media screen and (max-width: 576px) {
  .trash {
    text-align: right;
  }
}
</style>