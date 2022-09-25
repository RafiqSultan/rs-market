
<template>
  <TheHeader />
  <LandingScreen />
  <NewProduct />
  <CartDetails />
  <TheFooter />
</template>

<script>
import TheHeader from "../components/Layouts/TheHeader.vue";
import LandingScreen from "../components/LandingScreen.vue";
import NewProduct from "../views/NewProduct.vue";
import TheFooter from "../components/Layouts/TheFooter.vue";
import CartDetails from "../components/CartDetails.vue";
export default {
  components: {
    TheHeader,
    LandingScreen,
    NewProduct,
    TheFooter,
    CartDetails,
  },
};
</script>
