<template>
  <div class="index">
    <div class="index">
      <topNavSearchScreening>
        <img slot="search" src="../../../assets/sousuo@2x.png" alt="">
        <input slot="search" type="text" placeholder="搜索医院">
        <span slot="screening">筛选</span>
        <img slot="screening" src="../../../assets/shaixuan.png" alt="">
      </topNavSearchScreening>
      <div class="index_title">
        <div class="index_title_left">
          <h3>合作医院</h3>
          <span> 473</span>
        </div>
        <div class="index_title_right">
          <span>新增医院</span>
          <img src="../../../assets/right@2x.png" alt="">
        </div>
      </div>
      <div>
      <div class="hospitalList">
        <ul>
          <li>
            <div class="hospitalMember_tile">
              <div class="hospitalMember_tile_left">
                <img src="../../../assets/small-logo@2x.png" alt="">
                <span>江苏省人民医院</span>
              </div>
              <div class="hospitalMember_tile_right">
                <img src="../../../assets/yirenzheng.svg" alt="">
                <!-- <img src="../../../assets/weirenzheng.svg" alt=""> -->
              </div>
            </div>
            <div class="hospitalMember_content">
              <p>创建时间：2019.02.09 18:00</p>
              <p>门诊数：289</p>
              <p>病源数：4824</p>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </div>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
import bottomNav from '../functionPage/bottomNav'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components:{
    bottomNav
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f5f5f5;
}
.index_title{
  width: 100%;
  height: 27px;
  line-height: 27px;
  font-size: 0px;
  margin-top: 11px;
  margin-bottom: 15px;
  padding: 0px 16px;
  box-sizing: border-box;
}
.index_title_left,.index_title_right{
  width: 50%;
  height: 27px;
  line-height: 27px;
  display: inline-block;
  vertical-align: middle;
}
.index_title_left>h3{
  font-size: 19px;
  margin-block-start: 0;
  margin-block-end: 0;
  display: inline-block;
}
.index_title_left>span{
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  margin-left: 7px;
}
.index_title_right{
  text-align: right;
}
.index_title_right>span{
  font-size: 16px;
  vertical-align: middle;
  color: #2B77EF;
}
.index_title_right>img{
  width: 8px;
  height: 13px;
  vertical-align: middle;
  margin-left: 5px;
}
.hospitalList{
  width: 100%;
}
.hospitalList>ul{
  width: 100%;
  padding: 0px 12px;
  box-sizing: border-box;
}
.hospitalList>ul>li{
  width: 100%;
  height: 141px;
  border-radius: 3px;
  background: #ffffff;
}
.hospitalMember_tile{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #E5E5E5;
  font-size: 0px;
  padding: 0px 15px;
  box-sizing: border-box;
  position: relative;
}
.hospitalMember_tile_left,.hospitalMember_tile_right{
  font-size: 15px;
  display: inline-block;
  vertical-align: middle;
}
.hospitalMember_tile_left>img{
  width: 23px;
  height: 17px;
  object-fit: cover;
  vertical-align: middle;
  margin-right: 10px;
}
.hospitalMember_tile_left>span{
  vertical-align: middle;
}
.hospitalMember_tile_right{
  position: absolute;
  right: -4px;
  top: 8px;
}
.hospitalMember_tile_right>img{
  width: 72px;
  height: 21px;
  object-fit: cover;
}
.hospitalMember_content{
  width: 100%;
  height: 90px;
  padding: 12px 15px;
  box-sizing: border-box;
}
.hospitalMember_content>p{
  margin-block-start: 0;
  margin-block-end: 5px;
  font-size: 13px;
  color: #768892;
  letter-spacing: .5px;
}
.hospitalMember_content>p:last-child{
  margin-block-end: 0px;
}
</style>
