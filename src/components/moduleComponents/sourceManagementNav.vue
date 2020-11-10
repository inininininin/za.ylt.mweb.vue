<template>
    <div class="sourceManagementNav">
        <div class="nav">
            <div class="nav_top">
              <div class="nav_top_left">
                <slot name="nav_top_left"></slot>
                <!-- <img draggable="false" src="../../assets/xiaoxi.png" alt=""> -->
                <!-- <div>2</div> -->
              </div>
              <div class="nav_top_center">
                <slot name="nav_top_center"></slot>
                <!-- <img draggable="false" src="../../assets/sousuo@2x.png" alt=""> -->
                <!-- <input type="search" placeholder="搜索病源">  -->
              </div> 
              <div class="nav_top_right" >
                <slot name="nav_top_right"></slot>
                <!-- <span @click="conditionsData.screeningShow = true">筛选</span> -->
                <!-- <img @click="conditionsData.screeningShow = true" draggable="false" src="../../assets/screen.png" alt=""> -->
              </div>
            </div>
            <slot name="nav_type"></slot>
            <!-- <div ref="nav_type" class="nav_type">
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
            </div> -->
        </div>
        <div style="height:86px"></div>
    </div>
</template>
<script>
export default {
    name:'sourceManagementNav'
    
}
</script>
<style scoped>
.sourceManagementNav{

}
.nav{
  width: 100%;
  height: 86px;
  background: url("../../assets/background.png") no-repeat;
  background-size: 100% 100%;
  position: fixed;
  box-shadow: rgba(217, 211, 211, 0.5) 0px 1px 2px 0px;
  top: 0;
  z-index: 99;
}
.nav_top{
  width: 100%;
  height: 42.5px;
  padding-top: 9px;
  display: flex;
  justify-content:space-between;
}
.nav_top_left{
  width: 52px;  
  height: 34px;
  line-height: 34px;
  text-align: center;
  /* float:left; */
  /* position: relative; */
  /* padding-top: 6px; */
  /* box-sizing: border-box; */
  /* vertical-align: middle */
}
.nav_top_left>img{
  width: 19px;
  height: 24px;
  object-fit: cover;
  vertical-align: middle
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
  /* float:left; */
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
  /* float:left; */
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
  margin-left: 3px
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