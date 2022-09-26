<template>
  <TheHeader />
  <div class="container-fluid title-brand">
    <div class="container">
      <!-- Samsung Product -->
      <div class="row">
        <div class="title">
          <div class="img">
            <img src="../assets/samsung-logo.png" alt="samsung" />
          </div>
          <div class="showAll">
            <router-link tag="a" to="/products"> Show All</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid back-grid">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="samsungCard">
            <CardProduct
              v-for="phone in samsung"
              :key="phone.id"
              :phoneId="phone.id"
              :type="phone.type"
              :phoneModel="phone.model"
              :phonePrice="phone.price"
              :phoneImg="phone.image"
              :cart="phone.cart"
              :quantity="phone.quantity"
              :phoneDiscount="phone.discount"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Apple Product -->
  <div class="container-fluid title-brand">
    <div class="container">
      <div class="row">
        <div class="title">
          <div class="img">
            <img src="../assets/apple_logo.png" alt="apple" />
          </div>
          <div class="showAll">
            <router-link tag="a" to="/products"> Show All</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid back-grid">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="appleCard">
            <CardProduct
              v-for="phone in apple"
              :key="phone.id"
              :phoneId="phone.id"
              :type="phone.type"
              :phoneModel="phone.model"
              :phonePrice="phone.price"
              :phoneImg="phone.image"
              :cart="phone.cart"
              :quantity="phone.quantity"
              :phoneDiscount="phone.discount"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Handfree Product  -->
  <div class="container-fluid title-brand">
    <div class="container">
      <div class="row">
        <div class="title">
          <div class="img handfree">
            <img src="../assets/handsfree.png" alt="handfree" />
            <h5 class="handfree">HandsFree</h5>
          </div>
          <div class="showAll">
            <router-link tag="a" to="/products"> Show All</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid back-grid">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="handsfree">
            <CardProduct
              v-for="handfree in handsfree"
              :key="handfree.id"
              :phoneId="handfree.id"
              :type="handfree.type"
              :phoneModel="handfree.model"
              :phonePrice="handfree.price"
              :phoneImg="handfree.image"
              :cart="handfree.cart"
              :quantity="handfree.quantity"
              :phoneDiscount="handfree.discount"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <TheFooter />
</template>

<script>
import TheHeader from "../components/Layouts/TheHeader.vue";
import CardProduct from "../components/CardProduct.vue";
import TheFooter from "../components/Layouts/TheFooter.vue";
export default {
  components: { TheHeader, CardProduct, TheFooter },
  computed: {
    samsung() {
      return this.$store.state.samsung;
    },
    apple() {
      return this.$store.state.apple;
    },
    handsfree() {
      return this.$store.state.handsfree;
    },
  },
};
</script>

<style lang="scss" scoped>
.title-brand {
  background: rgba($color: #5bafe5, $alpha: 0.5);
  height: fit-content;
  max-height: 80px;
  margin-top: 5.5rem;
  margin-bottom: 2rem;
  display: flex !important;
  align-items: center !important;
  justify-content: space-evenly !important;
  overflow: hidden;
  position: relative;
}
.title {
  display: flex;
  background: rgba($color: #5bafe5, $alpha: 0.5);
  height: 100%;
  border-radius: 10px;
  text-align: center;
  margin: auto;
  .img {
    width: auto;
    height: 60px;
    text-align: center;
    display: flex;
    margin-top: 0;
    img {
      height: auto;
    }
  }
  .handfree {
    color: #000;
    z-index: 100;
    margin-top: auto;
    font-size: 2.5rem;
    font-weight: bold;
  }
  .showAll {
    margin: auto;
    margin-right: 5%;
    padding: 0.3rem 0.7rem;
    background-color: var(--red-color);
    border-radius: 5px;
  }
  showAll:hover {
    background-color: var(--btn-color);
  }
  a {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
  }
}

.back-grid {
  background-color: #fff;
  border-radius: 20px;
}
.samsungCard,
.handsfree,
.appleCard {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
}
@media (max-width: 991px) {
  .title-brand {
    margin-top: 7.5rem;
  }
}
@media (max-width: 768px) {
  .samsungCard,
  .handsfree,
  .appleCard {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
  }
}

@media (max-width: 576px) {
  .handfree img {
    display: none;
  }
  .handfree h5 {
    margin-left: 0 !important;
    font-size: 30px !important;
  }
}
@media (max-width: 550px) {
  .appleCard,
  .samsungCard,
  .handsfree {
    margin-left: 10% !important;
    text-align: center;
  }
}
@media (max-width: 380px) {
  .title .img {
    width: 60% !important;
    height: fit-content;
    max-height: 60px;
  }
  img {
    width: 100%;
    height: auto;
  }
  .showAll {
    margin: auto;
    margin-right: 3%;
    padding: 0.2rem 0.5rem !important;
  }
  .handfree {
    text-align: center;

    margin-left: 0 !important;
  }
  .handfree h5 {
    font-size: 25px !important;
    margin-top: 5px !important;
  }
}
</style>