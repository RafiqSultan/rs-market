<template>
  <TheHeader />
  <div class="container checkout px-4 py-5 mx-auto" v-if="myorder.length > 0">
    <div class="row d-flex">
      <div class="cart">
        <div class="head">
          <div class="col-lg-2 col-md-4 col-sm-12 col-12">
            <h3 class="title">My Order</h3>
          </div>
          <div class="col-lg-2 col-md-2">
            <div class="model">Model</div>
          </div>
          <div class="col-lg-2 col-md-2">
            <div class="price">Price</div>
          </div>
          <div class="col-lg-2 col-md-2">
            <div class="quantity">Quantity</div>
          </div>
          <div class="col-lg-2 col-md-2">
            <div class="state">State</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Cart Order Buy -->

    <div class="row cartItem" v-for="(item, index) in myorder" :key="item.id">
      <div class="col-lg-2 col-md-2 col-sm-3 col-3">
        <div class="img">
          <span>{{ index + 1 }}-</span>
          <img :src="item.img" alt="" />
        </div>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-4 col-5">
        <h5 class="model">{{ item.model }}</h5>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-2 col-2">
        <h5 class="price"><span>$</span>{{ item.price }}</h5>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-1 col-2">
        <h5 class="price">{{ item.quantity }}</h5>
      </div>

      <div class="col-lg-2 col-md-2 col-sm-2 col-12">
        <h5 class="ok">OK</h5>
      </div>
    </div>
  </div>
  <div
    class="container"
    v-if="myorder.length <= 0"
    :class="{ noItem: myorder.length == 0 }"
  >
    <div class="noorder">
      <img src="../assets/cart.webp" alt="no order" />
      <h1>No Order Now</h1>
      <router-link tag="a" to="/products">Shop Now</router-link>
    </div>
  </div>
  <TheFooter />
</template>

<script>
import TheHeader from "../components/Layouts/TheHeader.vue";
import TheFooter from "../components/Layouts/TheFooter.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    return {
      myorder: computed(() => store.getters.getCart),
    };
  },

  // mounted() {
  //   // setTimeout(() => this.myorder.length > 0, 3000);

  //   fetch(
  //     "https://mobile-market-bf248-default-rtdb.firebaseio.com/CartOrder.json"
  //   )
  //     .then((Response) => {
  //       if (Response.ok) {
  //         return Response.json();
  //       }
  //     })
  //     .then((data) => {
  //       const results = [];
  //       for (const id in data) {
  //         results.push({
  //           id: id,
  //           phoneImg: data[id].img,
  //           phoneModel: data[id].model,
  //           phonePrice: data[id].price,
  //           phoneQuantity: data[id].quantity,
  //           totalPrice: data[id].total,
  //         });
  //       }
  //       this.myorder = results;
  //     });
  // },
  components: { TheHeader, TheFooter },
};
</script>


<style scoped>
.noItem {
  margin-top: 61.2vh !important ;
  animation: timeOut 5s linear;
}
.noorder {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: 500px;
  margin-top: -69vh !important;
}
@keyframes timeOut {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.noorder img {
  width: 200px;
  height: 200px;
}
.noorder h1 {
  font-size: 35px;
  margin: 1rem 0;
}
.noorder a {
  background-color: var(--red-color);
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
}
.noorder a:hover {
  background-color: var(--btn-color);
}
.checkout {
  margin-top: 168px;
}

.head {
  display: flex;
  align-items: center;
  justify-content: center !important;
  padding: 0.8rem;
  border-bottom: 1px solid var(--red-color);
  text-align: center;
}
.head .title {
  font-size: 30px;
  font-weight: 500;
  color: var(--red-color);
}
/* Style For Cart Order */
.cartItem {
  width: 100%;
  padding: 0.8rem 0;
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
.ok {
  color: var(--blue-dark-color);
}
.img {
  height: 50px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.img span {
  margin-left: 0 !important;
}
.img img {
  height: 100%;
  width: fit-content;
}
@media (max-width: 768px) {
  .head .model,
  .head .price,
  .head .quantity,
  .head .state {
    display: none !important;
  }

  .head {
    text-align: center;
  }
  .head .title {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media (max-width: 991px) {
  .head {
    justify-content: flex-end !important;
    text-align: center;
  }
  .head .title {
    font-size: 24px;
    text-align: left;
  }
  .head .model {
    text-align: left;
  }
}
@media (max-width: 576px) {
  .cartItem .model {
    font-size: 20px;
  }
}
</style>