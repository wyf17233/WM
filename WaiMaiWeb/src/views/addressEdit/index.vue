<template>
  <Header :title="address" />
  <van-address-edit
    :area-list="areaList"
    show-delete
    show-set-default
    show-search-result
    :address-info="addressInfo"
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave"
    @delete="onDelete"
  />
</template>

<script setup>
import Header from "../../components/Header.vue";
import { useCartListStore } from "../../stores/index";
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const store = useCartListStore();
const areaList = ref({
  province_list: {
    110000: "广东省",
    120000: "浙江省",
  },
  city_list: {
    110100: "广州市",
    110200: "深圳市",
    120100: "杭州市",
    120200: "宁波市",
  },
  county_list: {
    110101: "天河区",
    110102: "海珠区",
    120102: "上城区",
    130102: "下城区",
  },
});
const addressInfo = ref({});
const address = computed(() => {
  return route.query.type === "add" ? "地址新增" : "地址编辑";
});
const init = () => {
  store.userAddress.forEach((item) => {
    if (item.id === Number(route.query.id)) {
      addressInfo.value = item;
    }
  });
};
const onSave = (content) => {
  //新增or编辑
  if (route.query.type === "add") {
    store.addAddress(content);
  } else {
    store.editAddress(content);
  }
  showToast({ message: "保存成功" });
  setTimeout(() => {
    router.back();
  }, 1000);
};
const onDelete = (content) => {
  if (!content.id) {
    showToast({ message: "未选中正确的数据" });
    return;
  }
  store.deleteAddress(content);
  showToast({ message: "删除成功" });
  setTimeout(() => {
    router.back();
  }, 1000);
};
onMounted(() => {
  init();
});
</script>

<style lang='less' scoped>
:deep(.van-button--primary) {
  background-color: #ffc400;
  border-color: #ffc400;
}
:deep(.van-switch--on) {
  background-color: #ffc400;
}
</style>
