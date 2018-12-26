<template>
  <header>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap shadow">
      <a class="navbar-brand mr-0" href="#">{{ title }}</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#">Sign out</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>
