<template>
  <div class="home">
    <div class="content">
      <!-- 头部 -->
      <div class="header">
        <div class="text">外卖</div>
        <div class="location">
          <van-icon name="location-o" />
          <span>这里放地址</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <!-- 主体 -->
      <div class="main">
        <div class="main-bg">
          <div class="search">
            <input type="text" />
            <div class="search-text">搜索</div>
          </div>
          <div class="sort">
            <div class="big-sort">
              <div v-for="(item, index) in bigSort" :key="index">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                {{ item.msg }}
              </div>
            </div>
            <div class="small-sort">
              <div v-for="(item, index) in smallSort" :key="index">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                {{ item.msg }}
              </div>
            </div>
          </div>
          <van-tabs v-model:active="active" class="van-tabs">
            <van-tab
              v-for="(item, index) in navList"
              :title="item.tab"
              :key="index"
            >
              <NavList :NavList="item.data" />
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs, onMounted, ref, onUpdated } from "vue";
import { getBigSorts, getSmallSorts } from "../../api/getSorts.js";
import { getNavList } from "../../api/getNavList";
import NavList from "./components/NavList.vue";
const bigSort = ref([]);
const smallSort = ref([]);
const navList = ref([]);
const active = ref(0);
const load = async () => {
  let bigResult = await getBigSorts();
  let smallResult = await getSmallSorts();
  let NavListResult = await getNavList();
  bigSort.value = bigResult;
  smallSort.value = smallResult;
  navList.value = NavListResult;
};

onMounted(async () => {
  await load();
});
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  display: flex;
  flex-flow: column;
  flex: 1;
  .content {
    height: 100%;
    flex: 1;
    overflow-y: auto;
    .header {
      background: linear-gradient(#ffc400, #fff);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 20px 40px 20px;
      .text {
        font-size: 20px;
        font-weight: 600;
      }
      .location {
        span {
          margin: 0 5px;
        }
        font-size: 14px;
      }
    }
    .main {
      margin-top: -30px;
      .main-bg {
        background: linear-gradient(#fff, #f5f5f5);
        padding: 10px 20px 0px 20px;
        border-radius: 30px 30px 0 0;
        .search {
          position: relative;

          input {
            width: 100%;
            padding: 0 55px 0 20px;
            box-sizing: border-box;
            border: 1px solid #ffc400;
            border-radius: 20px;
            height: 32px;
            font-size: 20px;
          }
          .search-text {
            position: absolute;
            right: -0.5px;
            top: 0.5px;
            background-color: #ffc400;
            border-radius: 16px;
            width: 50px;
            height: 32px;
            line-height: 32px;
            font-size: 14px;
            text-align: center;
          }
        }
        .sort {
          font-size: 16px;
          padding: 20px 0;
          .big-sort {
            display: flex;
            div {
              flex: 1;
              display: flex;
              justify-content: center;
              flex-flow: column;
              align-items: center;
              .icon {
                width: 40px;
                height: 40px;
                margin-bottom: 5px;
              }
            }
          }
          .small-sort {
            font-size: 14px;
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;
            div {
              display: flex;
              justify-content: center;
              flex-flow: column;
              align-items: center;
              width: 20%;
            }
            .icon {
              width: 30px;
              height: 30px;
              margin: 10px;
            }
          }
        }
      }
      .van-tabs {
        padding: 0 20px 10px;
      }
      :deep(.van-tabs__wrap) {
        border-radius: 10px;
      }
    }
  }
}
</style>>