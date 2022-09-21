<template>
  <TheHeader />
  <div class="container">
    <!-- Samsung Product -->
    <div class="row">
      <div class="title">
        <div class="img">
          <img
            src="../assets/samsung-logo.png"
            alt="samsung"
            width="400"
            height="120"
          />
        </div>
        <div class="showAll">
          <a href=""> Show more</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="samsungCard">
          <CardProduct
            v-for="phone in samsung"
            :key="phone.id"
            :phoneTitle="phone.model"
            :phonePrice="phone.price"
            :phoneImg="phone.image"
          />
        </div>
      </div>
    </div>
    <!-- Apple Product -->
    <div class="row">
      <div class="title">
        <div class="img">
          <img
            src="../assets/apple_logo.png"
            alt="samsung"
            width="350"
            height="120"
          />
        </div>
        <div class="showAll">
          <a href=""> Show more</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="appleCard">
          <CardProduct
            v-for="phone in apple"
            :key="phone.id"
            :phoneTitle="phone.model"
            :phonePrice="phone.price"
            :phoneImg="phone.image"
          />
        </div>
      </div>
    </div>
    <!-- Handfree Product  -->
    <div class="row">
      <div class="title">
        <div class="img handfree">
          <img
            src="../assets/handsfree.png"
            alt="samsung"
            width="200"
            height="120"
          />
          <h5 class="handfree">HandsFree</h5>
        </div>
        <div class="showAll">
          <a href=""> Show more</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="appleCard">
          <CardProduct
            v-for="handfree in handsfree"
            :key="handfree.id"
            :phoneTitle="handfree.model"
            :phonePrice="handfree.price"
            :phoneImg="handfree.image"
          />
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
.title {
  display: flex !important;
  text-align: center !important;
  justify-content: space-evenly !important;
  margin-top: 6rem;
  text-align: center;
  margin-bottom: 2rem;
  background: #ddd;
  height: 90px;
  overflow: hidden;

  .img {
    text-align: center;
    display: flex;
    img {
      height: 100%;
    }
    .handfree {
      color: #000;
      z-index: 100;
      margin: auto;
      font-size: 2.5rem;
      font-weight: bold;
    }
  }
  .showAll {
    background: #ccc;
    margin: auto;
    margin-right: 5%;
    padding: 0.3rem;
  }
}
.samsungCard,
.appleCard {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1rem;
}
</style>