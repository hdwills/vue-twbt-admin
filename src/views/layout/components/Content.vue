<template>
  <maim class="col-md-9 ml-sm-auto col-lg-10 px-4 layout-content">
    <router-view></router-view>
  </maim>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style>
.layout-content {
  padding-top: 48px;
}
</style>
