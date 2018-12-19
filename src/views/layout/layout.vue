<template>
  <div>
    <Header title="Admin"></Header>
    <div class="container-fluid">
      <div class="row">
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
    </div>
  </div>
</template>

<script>
import { Header, Sidebar, Content } from './components'

export default {
  name: 'Layout',
  components: {
    Header,
    Sidebar,
    Content
  }
}
</script>
