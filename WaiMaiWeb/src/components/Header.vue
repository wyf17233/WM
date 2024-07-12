<template>
  <div class="header">
    <van-icon name="arrow-left" class="icon" @click="goBack" />
    <div>
      {{ title }}
    </div>
    <div class="edit" v-if="edit" @click="handleEdit">
      {{ store.isDelete||!store.cartList.length ? "编辑" : "完成" }}
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useCartListStore } from "../stores/index";
const store = useCartListStore();
const props = defineProps(["title", "edit"]);
const router = useRouter();
const goBack = () => {
  router.back();
};
const handleEdit = () => {
  if (store.cartList.length) {
    store.changeDelete();
  } else {
    showFailToast("购物车中什么都没有");
  }
};
</script>

<style lang="less" scoped>
.header {
  background-color: #fff;
  height: 40px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d7d7d7;
  .icon {
    position: absolute;
    left: 10px;
    transform: translate(0, 1px);
  }
  .edit {
    position: absolute;
    right: 10px;
    font-size: 15px;
  }
}
</style>