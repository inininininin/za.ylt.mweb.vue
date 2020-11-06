<template>
  <div id="app">
    <keep-alive>
      <router-view/>

    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html{
  height: 100%;
  width: 100%;
}
body{
  height: 100%;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: #333333;
  user-select: none;
}

</style>