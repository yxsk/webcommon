<template>
  <div id="app">
    <router-view class="sidebar"/>
    <router-view class="home" name="home"/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  .sidebar,.home{
    display:inline-block;
    height:100%;
  }
  .sidebar{
    width:30%;
  }
  .home{
    width:70%;
  }
}
</style>
