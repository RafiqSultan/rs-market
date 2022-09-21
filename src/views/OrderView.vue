<template>
  <TheHeader />
  <div
    class="container checkout px-4 py-5 mx-auto"
    v-if="this.myorder.length > 0"
  >
    <div class="row d-flex">
      <div class="cart">
        <div class="head">
          <div class="col-lg-2 col-md-2">
            <h3>My Order</h3>
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
            <div id="total">State</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Cart Order Buy -->

    <div class="row cartItem" v-for="item in myorder" :key="item.id">
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
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">
        <h5 class="price">{{ item.phoneQuantity }}</h5>
      </div>

      <div class="col-lg-2 col-md-2 col-sm-6 col-6">
        <h5 class="price">OK</h5>
      </div>
    </div>
  </div>
  <div
    class="container"
    v-if="this.myorder.length <= 0"
    :class="{ noItem: myorder.length == 0 }"
  >
    <div class="noorder">
      <img src="../assets/cart.webp" alt="no order" />
      <h1>No Order Now</h1>
      <router-link tag="a" to="/product">Shop Now</router-link>
    </div>
  </div>
  <TheFooter />
</template>

<script>
import TheHeader from "../components/Layouts/TheHeader.vue";
import TheFooter from "../components/Layouts/TheFooter.vue";
export default {
  data() {
    return {
      myorder: [],
    };
  },

  mounted() {
    console.log(this.myorder.length);

    fetch(
      "https://mobile-market-bf248-default-rtdb.firebaseio.com/CartOrder.json"
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
        this.myorder = results;
      });
  },
  components: { TheHeader, TheFooter },
};
</script>


<style scoped>
.noItem {
  margin-top: 58vh !important ;
}
.noorder {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: 500px;
  margin-top: -69vh !important;
}
.noorder img {
  width: 200px;
  height: 200px;
}
.noorder a {
  background-color: #f00;
  color: #fff;
  padding: 5px 15px;
  border-radius: 10px;
}
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
</style>