<template>
  <Header title="账号管理" />
  <div>
    <van-field v-model="name" label="昵称" placeholder="请输入昵称" />
    <van-field v-model="sign" label="个性签名" placeholder="请输入个性签名" />
    <van-field v-model="pass" label="密码" placeholder="请输入密码" />
  </div>
  <van-button
    type="primary"
    color="#ffc400"
    round
    block
    class="save-btn"
    @click="save"
    >保存</van-button
  >
  <van-button
    type="primary"
    color="#ffc400"
    round
    block
    class="save-btn"
    @click="logOut"
    >退出登录</van-button
  >
</template>

<script setup>
import Header from "../../components/Header.vue";
import { ref } from "vue";
import {useRouter} from "vue-router"
const router = useRouter()
const name = ref("");
const sign = ref("我行四方，以日以年。");
const pass = ref("");
const save = () => {
    if(name && pass){
        let userInfo = JSON.parse(localStorage.userInfo)
        let newUserInfo  = {
            name:name.value||userInfo.name,
            pass:pass.value||userInfo.pass
        }
        localStorage.setItem('userInfo',JSON.stringify(newUserInfo))
        showToast("修改成功")
        router.push('/mine')
    }else{
        showToast("请不要为空")
    }
};
const logOut = () => {
  showToast("退出成功");
  localStorage.removeItem("isLogin");
  router.push('/login')
};
</script>

<style lang='less' scoped>
.save-btn {
  width: 80%;
  margin: 20px auto 0;
}
</style>
