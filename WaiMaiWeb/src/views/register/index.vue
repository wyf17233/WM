<template>
  <div class="login">
    <Header title="注册" />
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
          注册
        </van-button>
        <van-button
          round
          block
          type="info"
          color="#ffc400"
          class="register"
          @click="toLogin"
        >
          去登录
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
const toLogin = () => {
  router.push("/login");
};
const register = (value) => {
  localStorage.setItem("userInfo", JSON.stringify(value));
  showToast("注册成功")
  router.push('/login')
};
const onSubmit = (value) => {
  if (localStorage.userInfo) {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo.name === value.name) {
      showToast("用户名已存在");
      return
    } else {
      register(value);
    }
  }
  register(value);
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
