<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
html,body {
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  display: block;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
