<template>
  <div class="footer" v-if="active">
    <div class="item">
      <router-link
        to="/home"
        class="nav-item"
        size="30"
        active-class="nav-color"
      >
        <van-icon name="wap-home-o" />
        首页
      </router-link>
    </div>
    <div class="item">
      <router-link
        to="/cart"
        class="nav-item"
        size="30"
        active-class="nav-color"
      >
        <van-icon name="shopping-cart-o" />
        购物车
      </router-link>
    </div>
    <div class="item">
      <router-link
        to="/order"
        class="nav-item"
        size="30"
        active-class="nav-color"
      >
        <van-icon name="shop-o" />
        订单
      </router-link>
    </div>
    <div class="item">
      <router-link
        to="/mine"
        class="nav-item"
        size="30"
        active-class="nav-color"
      >
        <van-icon name="manager-o" />
        我的
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, watchEffect } from "vue";
const route = useRoute();
const noFooterPath = ["store", "login", "register"];
const active = ref(true);

watchEffect(() => {
  active.value = !noFooterPath.includes(
    route.path.split("/")[1] ? route.path.split("/")[1] : ""
  );
});
// watch(
//   () => route.path,
//   (newVal, oldVal) => {
//     const pathArray = newVal.split("/");
//     const secondLevelPath = pathArray[1] ? pathArray[1] : ""; // 获取第二级路径
//     active.value = !noFooterPath.includes(secondLevelPath);
//   }
// );
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  background-color: #fff;
  border-top: 0.5px solid #eee;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 21px;
  .item {
    flex: 1;
    .nav-color {
      color: #ffc400;
    }
    .nav-item {
      display: flex;
      flex-flow: column;
      align-items: center;
    }
  }
}
</style>