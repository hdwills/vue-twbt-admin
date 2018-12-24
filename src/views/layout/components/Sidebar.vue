<template>
  <nav class="col-md-2 d-none d-md-block bg-light layout-sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link class="nav-link" to="/" exact>Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/test" exact>test</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/test/test">test</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Sidebar'
}

</script>
<style lang="scss">
.layout-sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 48px 0 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);

  .nav-link {
    font-weight: 500;
    color: #333;
  }

  .nav-link .feather {
    margin-right: 4px;
    color: #999;
  }

  .nav-link.active,
  .nav-link.router-link-active {
    color: #007bff;
  }

  .nav-link:hover .feather,
  .nav-link.active .feather {
    color: inherit;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto;
  /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

</style>
