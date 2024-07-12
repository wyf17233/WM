<template>
  <div v-for="(item, index) in NavList" :key="index">
    <NavListItem :NavListItem="item" />
  </div>
</template>

<script setup>
import NavListItem from "./NavListItem.vue";
const props = defineProps(["NavList"]);
</script>

<style>
</style>