<template>
  <div class="cart">
    <Header title="购物车" :edit="true"/>
    <Empty v-if="store.cartList.length === 0" />
    <CartDetail v-else/>
  </div>
</template>

<script setup>
import { useCartListStore } from "../../stores";
import Empty from "../../components/Empty.vue";
import Header from "../../components/Header.vue"
import CartDetail from "./components/CartDetail.vue"
const store = useCartListStore();
// console.log(store.cartList);
</script>

<style lang="less" scoped>
.cart {
  height: 100%;
  display: flex;
  flex-flow: column;
  flex: 1;
  .content {
    height: 100%;
    flex: 1;
    overflow-y: auto;
  }
}
</style>>