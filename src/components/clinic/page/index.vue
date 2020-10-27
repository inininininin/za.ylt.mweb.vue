<template>
  <div class="index">
    <div class="nav">
      <div class="nav_top">
        <div class="nav_top_left">
          <img src="../../../assets/xiaoxi.png" alt="">
          <div>2</div>
        </div>
        <div class="nav_top_center">
          <img src="../../../assets/sousuo@2x.png" alt="">
          <input type="search" placeholder="搜索病源"> 
        </div>
        <div class="nav_top_right" @click="conditionsData.screeningShow = true">
          <span>筛选</span>
          <img src="../../../assets/screen.png" alt="">
        </div>
      </div>
      <div ref="nav_type" class="nav_type">
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
    </div>
    <div style="height:86px"></div>
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
.nav{
  width: 100%;
  height: 86px;
  background: url("../../../assets/background.png") no-repeat;
  background-size: 100% 100%;
  position: fixed;
  top: 0;
  z-index: 99;
}
.nav_top{
  width: 100%;
  height: 42.5px;
  padding-top: 9px;
}
.nav_top_left{
  width: 52px;  
  text-align: center;
  float:left;
  position: relative;
  padding-top: 6px;
  box-sizing: border-box;
}
.nav_top_left>img{
  width: 19px;
  height: 24px;
  object-fit: cover;
}
.nav_top_left>div{
  width: 14px;
  height: 14px;
  position: absolute;
  display: block;
  top: 1px;
  right: 10px;
  background-color: #FF951B;
  color: #FFF;
  font-size: 11px;
  border-radius: 50%;
  text-align: center
}
.nav_top_center{
  width: calc(100% - 126px);
  float:left;
  position: relative;
}
.nav_top_center>img{
  width: 14px;
  height: 15px;
  position: absolute;
  top: 9.5px;
  left: 15px;
  object-fit: cover;
}
.nav_top_center>input{
  width: 100%;
  height: 34px;
  background: #FFF;
  border-radius: 17px;
  border: none;
  font-size: 15px;
  padding: 0px 15px 0px 39px
}
.nav_top_right{
  width: 74px;  
  text-align: center;
  float:left;
  height: 34px;
  line-height: 34px;
  box-sizing: border-box;
  position: relative;
}
.nav_top_right>span{
  color: #FFFFFF;
  font-size: 15px;
}
.nav_top_right>img{
  width: 13px;
  height: 13px;
  object-fit: cover;
  position: static;
  vertical-align: middle;
}
.nav_type{
  width: 100%;
  /* height: 52.6px; */
  /* line-height: 52.6px; */
  height: 35px;
  line-height: 35px;
  font-size: 0;
  position: relative;
}
.nav_type_add,.nav_type_noSee,.nav_type_yesSee{
  height: 21px;
  line-height: 21px;
  margin-top: 4px;
  width: 33.33%;
  text-align: center;
  display: inline-block;
}
.nav_type_add>h3,.nav_type_noSee>h3,.nav_type_yesSee>h3{
  font-size: 15px;
  color: #FFFFFF;
  margin-block-start: 0;
  margin-block-end: 0;
}
.navType_line{
	position: absolute;
  bottom: 3px;
  border-radius: 2px;
  left: 0;
  z-index: 1;
  height: 3px;
  width: 24px;
  background-color: #FFFFFF!important;
  border-radius: 3px;
  transition-duration: 0.3s;
}
</style>
