<template>
  <div class="order">
    <Header title="订单" />
    <div class="content">
      <van-tabs color="#ffc400">
        <van-tab v-for="(item, index) in navData" :title="item">
          <div
            v-for="(i, index) in store.orderListEnd"
            v-if="store.orderListEnd.length && item === '全部'"
          >
            <van-card
              :num="i.num"
              :price="i.price"
              :desc="i.name"
              :title="i.name"
              :thumb="i.pic"
            />
          </div>
          <Empty v-else />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script setup>
import Header from "../../components/Header.vue";
import Empty from "../../components/Empty.vue";
import { ref } from "vue";
import { useCartListStore } from "../../stores/index";
const store = useCartListStore();
const navData = ["全部", "交易完成", "待付款", "待发货", "已发货"];
</script>

<style lang="less" scoped>
.order {
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