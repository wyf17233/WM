<template>
  <div class="content-item">
    <div class="left">
      <van-checkbox
        :name="item.id"
        v-if="props.showCheckBox"
        checked-color="#ffc400"
      />
      <img :src="item.pic" alt="" />
      <div class="text">
        <div class="title">{{ item.name }}</div>
        <van-stepper v-if="!item.add || item.num !== 0" v-model="item.num" />
        <van-icon name="add-o" v-else @click="item.add = !item.add" />
      </div>
    </div>
    <div class="price">¥{{ item.price * (item.num ? item.num : 1) }}</div>
  </div>
</template>
<script setup>
import { useCartListStore } from "../stores/index";
import { onMounted, watch } from "vue";
const store = useCartListStore();
const props = defineProps(["item", "showCheckBox"]);
const init = () => {
  store.cartList.map((i) => {
    if (i.id === props.item.id) {
      props.item.num = i.num;
    }
  });
};
onMounted(() => {
  init();
});
watch(
  () => props.item.id,
  () => {
    init();
  }
);
</script>
<style lang="less" scoped>
.content-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .price {
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
  .left {
    display: flex;
    align-items: center;
    flex: 1;
    img {
      margin-left: 10px;
      width: 60px;
      height: 60px;
      margin-right: 10px;
      border-radius: 10px;
    }
    .text {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      height: 100%;
      position: relative;
      flex: 1;
      .title {
        font-size: 16px;
      }
      .van-icon {
        color: red;
        font-size: 20px;
        position: absolute;
        left: 95px;
        bottom: 4px;
      }
    }
  }
}
</style>