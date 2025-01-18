<template>
  <div>
    <DWInfoHeader />
  </div>
</template>

<script>
import DWInfoHeader from './components/Header.vue'

export default {
  name: 'App',
  components: {
    DWInfoHeader
  }
}
</script>

<style>
  html, body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
