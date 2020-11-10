<template>
  <div class="index">
    <sourceManagementNav>
      <img slot="nav_top_left" draggable="false" src="../../../assets/xiaoxi.png" alt="">
      <div slot="nav_top_left">2</div>
      <img slot="nav_top_center" draggable="false" src="../../../assets/sousuo@2x.png" alt="">
      <input slot="nav_top_center" type="search" placeholder="搜索病源">
      <span slot="nav_top_right" @click="conditionsData.screeningShow = true">筛选</span>
      <img slot="nav_top_right" @click="conditionsData.screeningShow = true" draggable="false" src="../../../assets/screen.png" alt="">
      <div slot="nav_type" ref="nav_type" class="nav_type">
        <div class="nav_type_add" @click="typeFn(0)">
          <h3>新增病源</h3>
        </div>
        <div class="nav_type_noSee" @click="typeFn(1)">
          <h3>未就诊</h3>
        </div>
        <div class="nav_type_yesSee" @click="typeFn(2)">
          <h3>确认就诊</h3>
        </div>
        <div ref="xiahuaxian" class="navType_line"></div> 
      </div>
    </sourceManagementNav>
    <keep-alive>
      <screening @childFn="parentFn" :conditionsData="conditionsData" v-if="conditionsData.screeningShow"></screening>
    </keep-alive>
    <keep-alive>
      <component :is="componentName" ref="componentRef" :conditionsData="conditionsData" style="height:calc(100% - 154.5px);touch-action: pan-y;-webkit-overflow-scrolling: touch;overflow-y: scroll;"></component>
    </keep-alive>
    <div style="height:50px;"></div>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
import addClinic from '../functionPage/addClinic'
import clinicNo from '../functionPage/clinicNo'
import clinicYes from '../functionPage/clinicYes'
import screening from '../functionPage/screening'

import bottomNav from '../functionPage/bottomNav'

export default {
  name: 'index',
  data () {
    return {
      query:'',
      // 组件切换值
      componentName :'addClinic',
      conditionsData:{
        screeningShow:false,
        kw:'',
        status:'',
        pushTimeStart:'',
        pushTimeEnd:'',
        hospitalConfirmTimeStart:'',
        hospitalConfirmTimeEnd:'',
      },
    }
  },
  components:{
    addClinic,
    clinicNo,
    clinicYes,
    screening,
    bottomNav
  },
  activated(){
    if(this.query != JSON.stringify(this.$route.query)){
      Object.assign(this.$data, this.$options.data());
      this.start()
    }
  },
  methods:{
    start(){
      this.$common.loginRefreshFn(true,()=>{
        this.query = JSON.stringify(this.$route.query);
        let width = this.$refs.nav_type.getBoundingClientRect().width/6
        this.$refs.xiahuaxian.style.webkitTransform = "translateX("+(width)+"px) translateX(-50%)"
      },()=>{})
    },
    typeFn(_value){
      let width = this.$refs.nav_type.getBoundingClientRect().width/6
      switch(_value){
        case 0 :
          this.componentName = 'addClinic';
          this.$refs.xiahuaxian.style.webkitTransform = "translateX("+(width)+"px) translateX(-50%)"
          break;
        case 1 :
          this.componentName = 'clinicNo';
          this.$refs.xiahuaxian.style.webkitTransform = "translateX("+(width)*3+"px) translateX(-50%)"
          this.$nextTick(()=>{
            this.$refs.componentRef.start()
          })
          break;
        case 2 :
          this.componentName = 'clinicYes';
          this.$refs.xiahuaxian.style.webkitTransform = "translateX("+(width)*5+"px) translateX(-50%)"
          this.$nextTick(()=>{
            this.$refs.componentRef.start()
          })
          break;
      }
    },
    parentFn(_value){
      let width = this.$refs.nav_type.getBoundingClientRect().width/6
      this.conditionsData.pushTimeStart =_value.pushTimeStart? this.$moment(_value.pushTimeStart).valueOf():'';
      this.conditionsData.pushTimeEnd =_value.pushTimeEnd? this.$moment(_value.pushTimeEnd).valueOf()+(1000*60*60*24-1):'';
      this.conditionsData.hospitalConfirmTimeStart =_value.hospitalConfirmTimeStart? this.$moment(_value.hospitalConfirmTimeStart).valueOf():'';
      this.conditionsData.hospitalConfirmTimeEnd =_value.hospitalConfirmTimeEnd? this.$moment(_value.hospitalConfirmTimeEnd).valueOf()+(1000*60*60*24-1):'';
      this.conditionsData.screeningShow = _value.screeningShow;
      // console.log('this.conditionsData.pushTimeStart'+this.$moment(this.conditionsData.pushTimeStart).format('YYYY-MM-DD HH:mm:ss'))
      // console.log('this.conditionsData.pushTimeEnd'+this.$moment(this.conditionsData.pushTimeEnd).format('YYYY-MM-DD HH:mm:ss'))
      // console.log('this.conditionsData.hospitalConfirmTimeStart'+this.$moment(this.conditionsData.hospitalConfirmTimeStart).format('YYYY-MM-DD HH:mm:ss'))
      // console.log('this.conditionsData.hospitalConfirmTimeEnd'+this.$moment(this.conditionsData.hospitalConfirmTimeEnd).format('YYYY-MM-DD HH:mm:ss'))
      if(_value.status == 1){
        this.componentName = 'clinicNo';
        this.$refs.xiahuaxian.style.webkitTransform = "translateX("+(width)*3+"px) translateX(-50%)"
        this.$nextTick(()=>{
          this.$refs.componentRef.start()
        })
        return
      }else if(_value.status == 4){
        this.componentName = 'clinicYes';
        this.$refs.xiahuaxian.style.webkitTransform = "translateX("+(width)*5+"px) translateX(-50%)"
        this.$nextTick(()=>{
          this.$refs.componentRef.start()
        })
        return
      }
      if(this.componentNamem != 'addClinic'){
        this.$nextTick(()=>{
          this.$refs.componentRef.start()
        })
      }
      console.log(_value)
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  width: 100%;
  height: 100%;
  overflow: hidden;
}

</style>
