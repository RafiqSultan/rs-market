<template>
  <div class="container">
    <div class="cart">
      <div class="row">
        <div class="cartItem" v-for="(item, index) in cartItem" :key="item.id">
          <template v-if="index < 3">
            <div class="img">
              <img :src="item.phoneImg" alt="imgcart" />
            </div>

            <div class="details">
              <sapn>{{ item.phoneModel }}</sapn>
              <span>${{ item.phonePrice }}</span>
            </div>
          </template>
        </div>
        <!-- Btn Checkout -->
        <div class="btn_checkout">
          <router-link tag="a" to="/checkout"> Checkout</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["cartItem"],
};
</script>

<style scoped>
.cart {
  width: 250px;
  max-height: 400px;
  position: absolute;
  top: 4rem !important;
  right: 6%;
  background-color: #fff;
  box-shadow: 0 0 5px #000;
  z-index: 1000;
  padding: 0.3rem;
  overflow: hidden !important;
  padding-bottom: 0 !important;
}
.cartItem {
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 0 2px #333;
  margin: auto;
  border: none !important;
  outline: none !important;
  margin-bottom: 5px !important;
}
.cartItem .img {
  width: 30%;
  height: 70px;
  overflow: hidden;
}
.cartItem .img img {
  width: 100%;
  height: 100%;
}
.cartItem .details {
  color: #000;
  margin: 0 10px;
}
.btn_checkout {
  background-color: blue;
  text-align: center;
  padding: 0.3rem;
}
.btn_checkout a {
  color: #fff;
}
</style>