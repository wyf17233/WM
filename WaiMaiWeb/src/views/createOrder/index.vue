<template>
  <div class="create-order">
    <Header title="生成订单" />
    <van-contact-card type="edit" :tel="tel" :name="name" @click="onEdit" />
    <div class="content">
      <div v-for="(item, index) in store.orderList">
        <van-card
          :num="item.num"
          :price="item.price"
          :desc="item.name"
          :title="item.name"
          :thumb="item.pic"
        />
      </div>
    </div>
    <div class="pay-wrap">
      <div class="price">
        <span>商品金额</span>
        <span>{{ price }}元</span>
      </div>
      <van-button
        type="primary"
        class="pay-btn"
        block
        color="ffc400"
        @click="handleCreateOrder"
        >生成订单</van-button
      >
    </div>
  </div>
</template>
<script setup>
import Header from "../../components/Header.vue";
import { useCartListStore } from "../../stores/index";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const store = useCartListStore();
const tel = ref("18951326690");
const name = ref("lzi");
const price = ref(0);
const onEdit = () => {
  router.push("/address")
};
const initPrice = () => {
  if (store.orderList.length) {
    store.orderList.forEach((i) => {
      price.value += i.price * i.num;
    });
  }
};
const initUser = () => {
  store.userAddress.forEach((item) => {
    if (item.isDefault) {
      tel.value = item.tel;
      name.value = item.name;
    }
  });
};
const handleCreateOrder = () => {
  showDialog({
    title: "提示",
    message: "成功生成订单",
  }).then(() => {
    //购物车中还剩下的商品
    // console.log(route.query.list);
    let newList = store.cartList.filter((i) => {
      return !route.query.list.includes(i.id + "");
    });
    store.delete(newList);
    store.orderListEd()
    router.push("/order");
  });
};
onMounted(() => {
  initPrice();
  initUser();
});
</script>
<style lang="less" scoped>
.create-order {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
  .pay-wrap {
    padding: 10px 0;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #e9e9e9;
    > div {
      display: flex;
      justify-content: space-between;
      padding: 0 5px;
      margin: 10px 0;
      font-size: 14px;
      span:nth-child(2) {
        color: red;
        font-size: 18px;
      }
    }
    .pay-btn {
      width: 90%;
      margin: 0 auto;
    }
  }
}
</style>