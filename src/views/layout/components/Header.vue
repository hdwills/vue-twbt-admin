<template>
  <header>
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">{{ title }}</a>
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
