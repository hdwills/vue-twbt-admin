<template>
  <aside class="col-12 col-md-3 col-xl-2 layout-sidebar">
    <ul class="layout-sidebar-nav">
      <li><router-link to="/">Dashboard</router-link></li>
      <li><router-link to="/test">test</router-link></li>
      <li><router-link to="/test/test">test</router-link></li>
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Dashboard</a></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss">
  .layout-sidebar {
    height: 100vh;
    border-right: 1px solid rgba(0,0,0,.1);
    .layout-sidebar-nav {
      list-style: none;
      margin: 0 -15px;
      padding: 0;
      > li {
        > a {
          display: block;
          padding: .25rem 1.5rem;
          font-size: 90%;
          color: rgba(0, 0, 0, .65);
          &:hover {
            color: rgba(0, 0, 0, .85);
            text-decoration: none;
            background-color: transparent;
          }
        }
        &.active > a,
        &.active:hover a {
          font-weight: 500;
          color: rgba(0, 0, 0, .85);
          background-color: transparent;
        }
      }
    }
  }
</style>
