<template>
  <HomeView />
  <RouterView />
</template>

<script >
import { RouterLink, RouterView } from "vue-router";
import HomeView from "../src/views/HomeView.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
import { db } from "./firebase";

export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      db.collection("cart")
        .orderBy("timestamp")
        .onSnapshot((querySnapshot) => {
          store.dispatch("cleanStore");
          querySnapshot.forEach((doc) => {
            store.dispatch("addAllProducts", doc.data());
          });
        });
    });
    return {};
  },
};
</script>


