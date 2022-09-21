<template>
  <Carousel
    :settings="settings"
    :breakpoints="breakpoints"
    class="carousel"
    v-if="ContentOfCarousel === 'newProduct'"
  >
    <CardProduct
      v-for="newphone in newPhones"
      :key="newphone"
      :phoneTitle="newphone.model"
      :phonePrice="newphone.price"
      :phoneImg="newphone.image"
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
      :phoneTitle="discount.model"
      :phonePrice="discount.price"
      :phoneImg="discount.image"
      :disc="discount.disc"
    />

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
  
  <script>
// import { defineComponent } from "vue";
import { Carousel, Navigation } from "vue3-carousel";
import CardProduct from "../components/CardProduct.vue";
import "vue3-carousel/dist/carousel.css";

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
  computed: {
    newPhones() {
      return this.$store.state.newPhones;
    },
    productDiscount() {
      return this.$store.state.discount;
    },
  },
};
</script>
<style scoped>
.carousel {
  margin: 50px 0 !important;
}
</style>