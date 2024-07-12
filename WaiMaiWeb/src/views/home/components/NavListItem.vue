<template>
  <!-- 加入后端后可通过id获取数据 -->
  <router-link :to="'/store' + '/' + NavListItem.title">
    <div class="item">
      <img :src="NavListItem.pic" alt="" />
      <div class="item-right">
        <div class="title">{{ NavListItem.title }}</div>
        <div class="sales">{{ NavListItem.sales }}</div>
        <div class="price">{{ NavListItem.price }}</div>
        <div class="label">
          <div v-for="(i, index) in NavListItem.label" :key="index">
            {{ i }}
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps(["NavListItem"]);
// import { useRouter } from "vue-router";
// const router = useRouter();
// const toStore = () => {
//   router.push("/store");
// };
</script>

<style lang="less" scoped>
.item {
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  padding: 10px;
  img {
    width: 120px;
    height: 120px;
    border-radius: 10px;
    margin-right: 20px;
  }
  .item-right {
    display: flex;
    flex-flow: column;
    justify-content: center;
    .sales,
    .price {
      font-size: 16px;
      color: #565555;
    }
    .title {
      font-size: 18px;
    }
    .label {
      display: flex;
      div {
        background-color: #ffc400;
        padding: 2px 5px;
        border-radius: 5px;
        font-size: 14px;
      }
      div:not(:first-child) {
        margin-left: 5px;
      }
    }
  }
}
.item:not(:first-child) {
  margin-top: 10px;
}
</style>