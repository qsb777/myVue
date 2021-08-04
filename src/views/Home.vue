<template>
  <div class="home">
    <q-from :model="userInfo" :rules="rules" ref="loginFrom">
      <q-from-item label="用户名" prop="username">
        <q-input  v-model="userInfo.username" placeholder="请输入用户名" />
      </q-from-item>
      <q-from-item label="密码" prop="password">
        <q-input type="password" v-model="userInfo.password" placeholder="请输入密码" />
      </q-from-item>
      <q-from-item>
        <button @click="login">登录</button>
      </q-from-item>
    </q-from>
  </div>
</template>

<script>


export default {
  name: "Home",

  components: {
 
  },
  data() {
    return {
      userInfo: {
        username: '',
        password: ''
      },
      rules: {
        username: {required: true, message: '请输入用户名'},
        password: {required: true, message: '请输入密码'},
      }
    }
  },
  methods: {
    login() {
      this.$refs.loginFrom.validate(valid => {
        this.$notice('这是一个提示')
        if (valid) {
          console.log('请求登录')
        } else {
          console.log('校验失败')
        }
      })
    }
  },

};
</script>

<style lang="sass" scoped>
.home 
  color: red;

</style>
