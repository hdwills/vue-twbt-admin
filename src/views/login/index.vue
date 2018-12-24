<template>
  <form ref="signinForm" class="form-signin">
    <h1 class="h3 mb-3 font-weight-normal">管理中心</h1>
    <input type="text" id="inputEmail" class="form-control mb-3" placeholder="用户名" required autofocus>
    <div class="input-group mb-4">
      <input v-bind:type="pwdType" id="inputPassword" class="form-control" placeholder="密码" required>
      <div class="input-group-append">
        <span class="input-group-text" @click="showPwd">Eye</span>
      </div>
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="login">登录</button>
  </form>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      message: 'Hi',
      pwdType: 'password'
    }
  },
  methods: {
    showPwd () {
      if (this.pwdType === 'password') {
        this.pwdType = 'text'
      } else {
        this.pwdType = 'password'
      }
    },
    login () {
      console.log(this.$refs);
      // this.$refs.myButton.innerText = this.message
    }
  }
}
</script>

<style rel="stylesheet/css">
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
