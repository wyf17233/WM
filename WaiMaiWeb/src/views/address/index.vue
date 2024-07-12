<template>
  <Header title="地址管理" />
  <van-address-list
    :list="list"
    default-tag-text="默认"
    @add="onAdd"
    @edit="onEdit"
  />
</template>

<script setup>
import Header from "../../components/Header.vue";
import { ref, onMounted } from "vue";
import { useCartListStore } from "../../stores/index";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useCartListStore();
const list = ref([]);
const init = () => {
  list.value = store.userAddress.map((item) => {
    return {
      id: item.id,
      name: item.name,
      tel: item.tel,
      address: item.province + item.city + item.county + item.addressDetail,
      isDefault: item.isDefault,
    };
  });
};
const onAdd = () => {
  router.push({
    path: "/addressEdit",
    query: {
      type: "add",
    },
  });
};
const onEdit = (item) => {
  router.push({
    path: "/addressEdit",
    query: {
      id: item.id,
      type: "edit",
    },
  });
};
onMounted(() => {
  init();
});
</script>

<style lang='less' scoped>
:deep(.van-button--normal) {
  background-color: #ffc400;
  border-color: #ffc400;
}
:deep(.van-switch--on) {
  background-color: #ffc400;
}
:deep(.van-radio__icon) {
  display: none;
}
</style>
