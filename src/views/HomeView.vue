
<template>
  <TheHeader />
  <LandingScreen />
  <NewProduct />
  <TheFooter />
</template>

<script>
import TheHeader from "../components/Layouts/TheHeader.vue";
import LandingScreen from "../components/LandingScreen.vue";
import NewProduct from "../views/NewProduct.vue";
import TheFooter from "../components/Layouts/TheFooter.vue";

export default {
  components: {
    TheHeader,
    LandingScreen,
    NewProduct,
    TheFooter,
  },
};
</script>
