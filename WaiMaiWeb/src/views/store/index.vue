<template>
  <div class="storeDetails">
    <Header title="店铺" />
    <div class="content">
      <!-- 背景图 -->
      <div class="img"></div>
      <div class="foodSort">
        <div class="name">
          {{ title }}
          <img :src="img" alt="" class="store-img" />
        </div>
        <van-tabs v-model:active="active" color="#ffc400">
          <van-tab
            v-for="(item, index) in storeData"
            :key="index"
            :title="item.name"
          >
            <FoodList :index="index" :foodData="item.data" />
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" />
      <router-link to="/cart">
        <van-action-bar-icon
          icon="cart-o"
          text="购物车"
          :badge="store.cartList.length"
      /></router-link>
      <van-action-bar-button
        type="warning"
        text="加入购物车"
        @click="handleAddCart"
      />
      <van-action-bar-button type="danger" text="立即购买" @click="goBuy" />
    </van-action-bar>
  </div>
</template>

<script setup>
import Header from "../../components/Header.vue";
import FoodList from "./components/foodList.vue";
import { reactive, ref, toRefs } from "vue";
import { useCartListStore } from "../../stores/index";
import { useRouter } from "vue-router";
const store = useCartListStore();
const active = ref(0);
const router = useRouter();
let { title, img, storeData } = toRefs(
  reactive({
    title: "酸菜鱼",
    img: "https://ts1.cn.mm.bing.net/th/id/R-C.e6dc17dcee250ac7f6eb08cdc0bf94dc?rik=SVj6HHTsaRxlwg&riu=http%3a%2f%2fi3.meishichina.com%2fattachment%2frecipe%2f2016%2f06%2f26%2fp800_2016062614669287518116591561.jpg&ehk=yjQ7M72MkUi0Pyq7Ww1JFQqO50tIvNxCBx5W0%2fm8L0w%3d&risl=&pid=ImgRaw&r=0",
    storeData: [
      {
        name: "点菜",
        data: {
          content: "点菜",
          items: [
            {
              text: "热销套餐",
              children: [
                {
                  pic: "https://ts1.cn.mm.bing.net/th?id=OSK.be02eb560647e44c1b479381bcab6ac2&w=612&h=408&c=7&rs=1&qlt=80&o=6&cdv=1&pid=16.1",
                  name: "招牌酸菜鱼",
                  price: 200,
                  id: 0,
                  add: true,
                  num: 0,
                },
                {
                  pic: "https://ts2.cn.mm.bing.net/th?id=OSK.abcdd64f9bb2c21013dee95bb6ba13ac&w=217&h=217&rs=2&qlt=80&o=6&cdv=1&pid=16.1",
                  name: "特辣酸菜鱼",
                  price: 300,
                  id: 1,
                  add: true,
                  num: 0,
                },
              ],
            },
            {
              text: "折扣套餐",
              children: [
                {
                  pic: "https://ts1.cn.mm.bing.net/th?id=OSK.be02eb560647e44c1b479381bcab6ac2&w=612&h=408&c=7&rs=1&qlt=80&o=6&cdv=1&pid=16.1",
                  name: "招牌酸菜鱼",
                  price: 150,
                  id: 2,
                  add: true,
                  num: 0,
                },
                {
                  pic: "https://ts2.cn.mm.bing.net/th?id=OSK.abcdd64f9bb2c21013dee95bb6ba13ac&w=217&h=217&rs=2&qlt=80&o=6&cdv=1&pid=16.1",
                  name: "特辣酸菜鱼",
                  price: 250,
                  id: 3,
                  add: true,
                  num: 0,
                },
              ],
            },
            {
              text: "儿童套餐",
              children: [
                {
                  pic: "https://ts1.cn.mm.bing.net/th?id=OSK.be02eb560647e44c1b479381bcab6ac2&w=612&h=408&c=7&rs=1&qlt=80&o=6&cdv=1&pid=16.1",
                  name: "招牌小酸菜鱼",
                  price: 50,
                  id: 4,
                  add: true,
                  num: 0,
                },
                {
                  pic: "https://ts2.cn.mm.bing.net/th?id=OSK.abcdd64f9bb2c21013dee95bb6ba13ac&w=217&h=217&rs=2&qlt=80&o=6&cdv=1&pid=16.1",
                  name: "特不辣酸菜鱼",
                  price: 100,
                  id: 5,
                  add: true,
                  num: 0,
                },
              ],
            },
          ],
        },
      },
      {
        name: "评价",
        // 可加上用户名,用户头像,评价
        data: {
          content: "好吃捏~(￣▽￣)~*",
        },
      },
      {
        name: "商家",
        data: {
          content: "好吃的商家~(￣▽￣)~*",
        },
      },
    ],
  })
);

//加入购物车
const handleAddCart = (type) => {
  const newList = store.cartList;
  storeData.value.forEach((item) => {
    item.data.items?.forEach((item) => {
      item.children.forEach((item) => {
        if (item.num > 0) {
          //1.pinia库中有相应数据(id相同)
          store.cartList.forEach((i) => {
            if (i.id === item.id) {
              i.num = item.num;
            }
          });
          //2.无相关数据
          if (!store.cartList.map((i) => i.id).includes(item.id)) {
            newList.push(item);
          }
        }
      });
    });
  });
  // console.log(newList);
  //
  //加入购物车但无商品
  if (newList.length === 0) {
    showToast("请选择商品");
    return;
  }
  if (newList.length !== 0) {
    store.addCart(newList);
  }
  // console.log(store.cartList);
  //分辨是否是立即购买
  type === "buy" && store.cartList.length !== 0 ? router.push("/cart") : "";
};

//立即购买
//将物品放入购物车,跳转到购物车
const goBuy = () => {
  handleAddCart("buy");
};
</script>

<style lang="less" scoped>
.storeDetails {
  height: 100%;
  display: flex;
  flex-flow: column;
  .content {
    flex: 1;
    overflow-y: auto;
    .img {
      background: url("https://bpic.588ku.com/back_origin_min_pic/21/03/15/a98dd831a97c4074cd2926928d0ad23c.jpg!/fw/750/quality/99/unsharp/true/compress/true")
        no-repeat center/cover;
      width: 100%;
      height: 150px;
    }
    .foodSort {
      height: 500px;
      background-color: #fff;
      margin-top: -30px;
      border-radius: 20px 20px 0 0;
      .name {
        display: flex;
        padding: 20px;
        justify-content: space-between;
        .store-img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
          margin-top: -30px;
        }
      }
    }
  }
}
</style>