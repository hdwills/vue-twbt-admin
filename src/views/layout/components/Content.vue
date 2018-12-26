<template>
  <div class="col-md-9 ml-sm-auto col-lg-10 px-4 layout-wrapper">
    <div class="layout-fluid pt-4">
      <Breadcrumb></Breadcrumb>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'Content',
  components: {
    Breadcrumb
  }
}
</script>

<style>
.layout-wrapper {
  padding-top: 56px;
}
</style>
