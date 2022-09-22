<template>
  <TheHeader />
  <div class="container">
    <!-- Samsung Product -->
    <div class="row">
      <div class="title col-lg-12">
        <div class="img">
          <img src="../assets/samsung-logo.png" alt="samsung" />
        </div>
        <div class="showAll">
          <a href=""> Show All</a>
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
          <img src="../assets/apple_logo.png" alt="apple" />
        </div>
        <div class="showAll">
          <a href=""> Show All</a>
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
          <img src="../assets/handsfree.png" alt="handfree" />
          <h5 class="handfree">HandsFree</h5>
        </div>
        <div class="showAll">
          <a href=""> Show All</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="handsfree">
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
  margin-top: 5.5rem;
  text-align: center;
  margin-bottom: 2rem;
  background: rgba($color: #5bafe5, $alpha: 0.5);
  height: 90px;
  overflow: hidden;
  border-radius: 10px;

  .img {
    width: auto;
    height: 60px;
    text-align: center;
    display: flex;
    margin-top: 1%;
    img {
      height: auto;
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
    margin: auto;
    margin-right: 5%;
    padding: 0.3rem 0.7rem;
    background-color: var(--red-color);
    border-radius: 5px;
  }
  .showAll:hover {
    background-color: var(--btn-color);
  }
  a {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
  }
}
.samsungCard,
.handsfree,
.appleCard {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
}
@media (max-width: 991px) {
  .title {
    margin-top: 7.5rem;
  }
  .img {
    width: 35% !important;
    // height: fit-content;
  }
  img {
    width: 100%;
    height: auto;
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
  .title img {
    width: auto;
    display: flex;
    margin-top: 10%;
  }
  .handfree {
    font-size: 1.5rem !important;
    font-weight: bold;
    display: flex;
  }
  .handfree h5 {
    text-align: center;
    margin-top: 25px !important;
  }

  // img {
  //   height: auto;
  // }
}

@media (max-width: 576px) {
  .img {
    width: auto;
    height: 60px;
    margin: auto;
  }

  .handfree img {
    display: none;
  }
  .handfree h5 {
    margin-left: 0 !important;
  }
}
@media (max-width: 550px) {
  .appleCard,
  .samsungCard,
  .handsfree {
    margin-left: 20% !important;
    text-align: center;
  }
}
</style>