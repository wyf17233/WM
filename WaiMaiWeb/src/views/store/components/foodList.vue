<template>
  <div class="food-list" v-if="props.index === 0">
    <van-tree-select
      v-model:main-active-index="activeIndex"
      height="88vw"
      :items="items"
    >
      <template #content>
        <div class="item-bg" v-for="(item,index) in props.foodData?.items[activeIndex]?.children">
          <ListItem :item="item"  />
        </div>
      </template>
    </van-tree-select>

  </div>

  <div v-else>
    {{ props.foodData.content }}
  </div>
</template>
<script setup>
import { reactive, toRefs, onMounted } from "vue";
import ListItem from "../../../components/ListItem.vue";
const props = defineProps(["index", "foodData"]);

let data = reactive({
  activeIndex: 0,
  items: [],
});

const { activeIndex, items } = toRefs(data);

//初始化
const initData = () => {
  props.foodData?.items?.forEach((item, index) => {
    items.value.push({
      text: item.text,
    });
  });
};
onMounted(() => {
  initData();
});
</script>

<style scoped lang="less">
.food-list {
  margin-top: 20px;
  .item-bg {
    padding: 10px;
  }
}
:deep(.van-sidebar-item--select) {
  color: #ffc400;
}
:deep(.van-sidebar-item--select::before) {
  background-color: #ffc400;
}
</style>