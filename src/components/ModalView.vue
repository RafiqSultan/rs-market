<template>
  <div class="textmodal">
    <h1>hellllo</h1>
    <p>Lorem ipsum dolor sit amet.</p>
    <button @click="closeModal()">Close</button>
  </div>
</template>

<script>
// import { defineEmit } from "vue";
// defineEmit("close");
export default {
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.textmodal {
  background-color: aqua;
}
</style>