<template>
  <div class="login">
    <Header title="登录" />
    <div class="img">团</div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="name"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="pass"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="primary"
          color="#ffc400"
          native-type="submit"
        >
          登录
        </van-button>
        <van-button
          round
          block
          type="info"
          color="#ffc400"
          class="register"
          @click="toRegister"
        >
          去注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import Header from "../../components/Header.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const username = ref("");
const password = ref("");
const toRegister = () => {
  router.push("/register");
};
const onSubmit = (value) => {
  if (!localStorage.userInfo) {
    showToast("账号未注册");
    return;
  } else {
    let userInfo = JSON.parse(localStorage.userInfo);
    if (userInfo.name === value.name && userInfo.pass === value.pass) {
      localStorage.setItem("isLogin", "login");
      showToast("登陆成功");
      router.push("/");
    } else {
      showToast("用户名/密码错误");
    }
  }
};
</script>

<style lang='less' scoped>
.login {
  .img {
    width: 200px;
    height: 200px;
    background-color: #ffc400;
    font-size: 80px;
    line-height: 200px;
    text-align: center;
    border-radius: 40px;
    margin: 20px auto;
  }
  .register {
    margin-top: 20px;
    border: 0;
  }
}
</style>
