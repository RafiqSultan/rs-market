<template>
  <div class="container">
    <Carousel
      :settings="settings"
      :breakpoints="breakpoints"
      class="carousel"
      v-if="ContentOfCarousel === 'newProduct'"
    >
      <CardProduct
        v-for="newphone in newPhones"
        :key="newphone"
        :phoneId="newphone.id"
        :type="newphone.type"
        :phoneModel="newphone.model"
        :phonePrice="newphone.price"
        :phoneImg="newphone.image"
        :cart="newphone.cart"
        :quantity="newphone.quantity"
        :phoneDiscount="newphone.discount"
      />

      <template #addons>
        <Navigation />
      </template>
    </Carousel>

    <!-- Discount -->
    <Carousel
      :settings="settings"
      :breakpoints="breakpoints"
      class="carousel"
      v-if="ContentOfCarousel === 'discount'"
    >
      <CardProduct
        v-for="discount in productDiscount"
        :key="discount"
        :phoneId="discount.id"
        :type="discount.type"
        :phoneModel="discount.model"
        :phonePrice="discount.price"
        :phoneImg="discount.image"
        :cart="discount.cart"
        :quantity="discount.quantity"
        :phoneDiscount="discount.discount"
      />

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>
  
  <script>
// import { defineComponent } from "vue";
import { Carousel, Navigation } from "vue3-carousel";
import CardProduct from "../components/CardProduct.vue";
import "vue3-carousel/dist/carousel.css";
// import { computed, ref } from "vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  name: "Breakpoints",
  props: {
    ContentOfCarousel: String,
  },
  components: {
    Carousel,
    CardProduct,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    },
  }),
  // computed: {
  //   newPhones() {
  //     return this.$store.state.newPhones;
  //   },
  //   productDiscount() {
  //     return this.$store.state.discount;
  //   },
  // },
  setup() {
    const store = useStore();
    // function addProduct(p) {
    //   let product = { ...p };
    //   console.log('click')
    //   product.timestamp=new Date().getTime()
    //   store.dispatch("addProduct", product);
    // }
    // function removeProduct(id) {
    //   store.dispatch("removeProduct", id);
    // }
    // function increaseQ(id) {
    //   store.dispatch("increase", id);
    // }
    // function decreaseQ(id) {
    //   store.dispatch("decrease", id);
    // }

    return {
      // addProduct,
      // increaseQ,
      // removeProduct,
      // decreaseQ,
      // cart: computed(() => store.getters.getCart),
      newPhones: computed(() => store.state.newPhones),
      productDiscount: computed(() => store.state.discount),
      // total: computed(() => store.getters.getTotal),
    };
  },
};
</script>
<style scoped>
.carousel {
  margin: 50px 0 !important;
  background-color: rgba(91, 175, 229, 0.3);
}
</style>