<template>
  <div class="cartDetail">
    <div class="content">
      <van-checkbox-group v-model="checked" @change="groupChange">
        <div v-for="(item, index) in store.cartList">
          <LestItem :item="item" :showCheckBox="true" />
        </div>
      </van-checkbox-group>
      <van-submit-bar
        :price="price"
        button-text="结算"
        @submit="onSubmit"
        class="submit-all"
        button-color="#ffc400"
        v-if="store.isDelete"
      >
        <van-checkbox
          v-model="submitChecked"
          checked-color="#ffc400"
          @click="choseAll"
          >全选</van-checkbox
        >
      </van-submit-bar>

      <div class="buy" v-else>
        <div class="left">
          <van-checkbox
            v-model="submitChecked"
            checked-color="#ffc400"
            @click="choseAll"
            >全选</van-checkbox
          >
        </div>
        <div class="delete" @click="handleDelete">删除</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useCartListStore } from "../../../stores/index";
import { useRouter } from "vue-router";
import LestItem from "../../../components/ListItem.vue";
const router = useRouter();
const store = useCartListStore();
const checked = ref([]);
const submitChecked = ref(true);
//保存到pinia 订单列表中
const onSubmit = () => {
  if (checked.value.length !== 0) {
    store.pay(updateData());
    router.push({
      path: "/createOrder",
      query: {
        list: checked.value,
      },
    });
  } else {
    showFailToast("请选择想结算的商品");
  }
};
const choseAll = () => {
  if (submitChecked.value === true) {
    if (checked.value.length !== store.cartList.length) {
      // store.cartList.forEach((i) => {
      //   if (!checked.value.includes(i.id)) {
      //     checked.value.push(i.id);
      //   }
      // });
      init();
    }
  } else {
    checked.value = [];
  }
};
//单个
const groupChange = (result) => {
  // console.log(result);
  // console.log(checked.value);
  if (result.length === store.cartList.length) {
    submitChecked.value = true;
  } else {
    submitChecked.value = false;
  }
};
//价格
const price = computed(() => {
  let sum = 0;
  let choseItem = updateData();
  choseItem.forEach((i) => {
    sum += i.num * i.price;
  });
  return sum * 100;
});

const updateData = (type) => {
  return store.cartList.filter((i) => {
    return type === "delete"
      ? !checked.value.includes(i.id)
      : checked.value.includes(i.id);
  });
};
//删除
const handleDelete = () => {
  if (checked.value.length) {
    store.delete(updateData("delete"));
    checked.value = [];
  } else {
    showFailToast("请选择删除的对象");
  }
};
const init = () => {
  //初始化,选中全部
  checked.value = store.cartList.map((item) => item.id);
};
onMounted(() => {
  init();
});
</script>
<style lang="less" scoped>
.cartDetail {
  font-size: 14px;
  flex: 1;
  position: relative;
  overflow-y: auto;
  padding: 20px 20px 50px;
  .content {
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
  }
  .submit-all {
    position: fixed;
    bottom: 48px;
  }
  .buy {
    position: fixed;
    bottom: 48px;
    right: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    height: 50px;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
    .left {
      display: flex;
      align-items: center;
    }
    .delete {
      color: #fff;
      background-color: #ffc400;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      width: 110px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
  }
}
</style>