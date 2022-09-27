<template>
  <div class="container">
    <div class="cart">
      <div class="row">
        <div
          class="cartItem"
          v-for="(item, index) in cartItem"
          :key="item.index"
        >
          <template v-if="index < 3">
            <div class="img">
              <img :src="item.img" alt="imgcart" />
            </div>

            <div class="details">
              <sapn>{{ item.model }}</sapn>
              <span>${{ item.price }}</span>
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
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  // props: ["cartItem"],

  setup() {
    const store = useStore();

    return {
      cartItem: computed(() => store.getters.getCart),
    };
  },
};
</script>

<style scoped>
.cart {
  width: 250px;
  height: auto;
  max-height: 300px;
  position: absolute;
  top: 4rem !important;
  right: 6%;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  z-index: 1000 !important;
  padding: 0.3rem;
  overflow: hidden !important;
  padding-bottom: 0 !important;
  border: none !important;
}
.cartItem {
  width: 90%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0) 0px 8px 24px;
  margin: auto;
  border-bottom: 1px solid var(--red-color);
  margin-bottom: 5px !important;
  padding: 0.2rem;
  overflow: hidden !important;
  /* background: #f00; */
}
.cartItem .img {
  width: 80%;
  height: 60px;
  overflow: hidden;
}
.cartItem .img img {
  width: 100%;
  height: 100%;
}
.cartItem .details {
  height: 100%;
  width: 100%;
  color: #000;
  margin: 0 10px;
  font-size: 14px;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cartItem .details span:first-child {
  width: 100%;
}
.cartItem .details span:last-child {
  color: var(--red-color);
  font-size: 16px;
}

.btn_checkout {
  position: sticky;
  bottom: 0;
  right: 0;
  background-color: var(--red-color);
  text-align: center;
  padding: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  z-index: 1000 !important;
}
.btn_checkout:hover {
  background-color: var(--btn-color);
}
.btn_checkout a {
  color: #fff;
}
@media (max-width: 991px) {
  .cart {
    width: 250px;
    max-height: 290px;
    position: absolute;
    top: 6.5rem !important;
    right: calc(5% + 1%);
  }
}
@media (max-width: 576px) {
  .cart {
    width: 200px;
    max-height: 290px;
    position: absolute;
    top: 6.5rem !important;
    right: calc(5% + 1%);
  }
}
@media (max-width: 460px) {
  .cart {
    width: 200px;
    max-height: 290px;
    position: absolute;
    top: 6.2rem !important;
    right: calc(5% + 1%);
  }
}
</style>