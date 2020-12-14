<template>
  <div class="hospital">
    <transitions>
        <keep-alive slot="title">
          <router-view class="routreView"/>
        </keep-alive>      
    </transitions>
    <bottomNav v-if="$store.state.common.bottomNav"></bottomNav>
  </div>
</template>

<script>
import bottomNav from './functionPage/bottomNav'
export default {
  name: 'hospital',
  data () {
      return {
      }
      
  },
  components:{
    bottomNav
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hospital{
  height: 100%;
  width: 100%;
  touch-action: pan-y;
  -webkit-overflow-scrolling: touch;
}
</style>
