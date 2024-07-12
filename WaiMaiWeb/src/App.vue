<template>
  <router-view class="body" />
  <Footer />
</template>
<script setup>
import Footer from "./components/Footer.vue";
</script>
<style scoped>
.body::after {
  content: "";
  display: inline-block;
  width: 50px;
  height: 50px;
  opacity: 0;
}
</style>
