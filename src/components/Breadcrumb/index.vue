<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item" v-for="(item, index) in levelList" v-bind:key="item.path">{{ item.name }}</li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {

      let matched = this.$route.matched.filter(item => {
        if (item.name) {
          return true
        }
      })
      const first = matched[0]
      if (first && first.name !== 'dashboard') {
        matched = [{path: '/dashboard'}].concat(matched)
      }
      this.levelList = matched
    }
  }
}
</script>
