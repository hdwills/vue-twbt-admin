<template>
  <div class="bg-dark">
    <form ref="loginForm" class="form-login" :model="loginForm">
      <h1 class="h3 mb-3 font-weight-normal">管理中心</h1>
      <input v-model="loginForm.username" type="text" id="username" name="username" class="form-control mb-3" placeholder="用户名" autofocus>
      <div class="input-group mb-4">
        <input v-model="loginForm.password" :type="pwdType" id="password" name="password" class="form-control" placeholder="密码">
        <div class="input-group-append">
          <span class="input-group-text" v-on:click="showPwd">Eye</span>
        </div>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click.prevent="login">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      pwdType: 'password'
    }
  },
  watch: {
    $route: {
      handler (route) {
        this.redirect = route.query && route.query.redirect
      }
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
      // this.$store.dispatch('Login', this.loginForm).then(() => {
        this.$router.push({ path: this.redirect || '/' })
      // })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .bg-dark {
    position: fixed;
    height: 100%;
    width: 100%;
  }
  .form-login {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }
</style>
