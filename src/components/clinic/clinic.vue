<template>

  <div class="clinic">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'clinic',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clinic{
  height: 100%;
  width: 100%;
  touch-action: pan-y;
	-webkit-overflow-scrolling: touch;
}
</style>
