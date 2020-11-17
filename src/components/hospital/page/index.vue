<template>
  <div class="index">
    <div class="title">
      <h3>— 医院端 —</h3>
      <!-- <button @click="$common.reloadWebview">ssss</button> -->
    </div>
    <div class="content" style="height: calc(100% - 50px);">
      <div class="shufflingNav">
        <div style="height:42.85px"></div> 
        <div class="shuffling_nav">
          <van-swipe class="shuffling_nav_banner" :autoplay="300000" indicator-color="white">
            <van-swipe-item v-for="(item,inx) in bannerList" :key="inx">
              <div class="shuffling_nav_banner_imgBox">
                <img draggable="false" :src="item.cover" alt="">
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="typeNav">
        <ul>
          <li v-for="(typeItem,inx) in typeNavList" :key="inx" @click="$common.typeRouterFn(typeItem.routerUrl,'')">
            <img draggable="false" :src="typeItem.imgUrl" alt="">
            <p>{{typeItem.name}}</p>
          </li>
        </ul>
      </div>
      <moduleList>
        <img slot="operationTitle_left" draggable="false" src="../../../assets/CombinedShape@2x.png" alt="">
        <h4 slot="operationTitle_left">运营精选</h4>
        <van-list
          slot="ul"
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="nextPage"
          >
          <li v-for="(item,inx) in articleList" :key="inx">
            <div class="operationTitle_content" :style="{width:item.cover?'calc(100% - 135px)':'100%'}">
              <p class="line-2">{{item.title}}</p>
              <div>
                <img draggable="false" src="../../../assets/time@2x.png" alt="">
                <span>{{item.addTime? $moment(item.addTime).format('YYYY-MM-DD HH:mm'):''}}</span>
              </div>
            </div>
            <img draggable="false" :src="item.cover" alt="">
          </li>
        </van-list>
      </moduleList>
      
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
      query:'',
      bannerList:[],
      typeNavList:[
        {name:'渠道门诊',imgUrl:require('../../../assets/qudaomenzhen@2x.png'),routerUrl:'/hospital/channelsClinic'},
        {name:'病源管理',imgUrl:require('../../../assets/bingyuanguanli@2x.png'),routerUrl:'/hospital/sourceManagement'},
        {name:'器械集采',imgUrl:require('../../../assets/qixiejicai@2x.png'),routerUrl:''},
        {name:'运营中心',imgUrl:require('../../../assets/yunyingzhongxin@2x.png'),routerUrl:'/hospital/operatingCenter'},
        {name:'基因检测',imgUrl:require('../../../assets/jiyinjiance@2x.png'),routerUrl:''},
        {name:'医疗资源',imgUrl:require('../../../assets/yiliaoziyuan@2x.png'),routerUrl:''},
        {name:'医院活动',imgUrl:require('../../../assets/yiyuanhuodong@2x.png'),routerUrl:''},
        {name:'其他项目',imgUrl:require('../../../assets/qita@2x.png'),routerUrl:''},
      ],
      articleList:[],
      loading: true,
      finished: false,
      page:1
    }
  },
  activated(){
    if(this.query != JSON.stringify(this.$route.query)){
      this.start()
    }
  },
  components:{
    bottomNav
  },
  methods:{
    start(){
      Object.assign(this.$data, this.$options.data());
      this.query = JSON.stringify(this.$route.query);
      this.$common.loginRefreshFn(true,()=>{
        this.getData()
      },()=>{
          return
      })
      
    },
    getData(){
      this.$publicRequest.getAdsData(res=>{
        this.bannerList = res.data.rows
      },res=>{
        if(res.codeMsg){
          this.$toast(res.codeMsg);
        }
      })
      this.getArticle();
    },
    getArticle(){
      this.$publicRequest.getArticleData(res=>{
        if(res.data.items.length>0){
          for(let i in res.data.items)
            this.articleList.push(res.data.items[i])
        }
        this.loading = false;
        if(res.data.items.length != 15){
          this.finished = true;
        }
        // console.log(res)
      },res=>{
        if(res.codeMsg){
          this.$toast(res.codeMsg);
          this.loading = false;
          this.finished = true;
        }
      },{
          pn: this.page,
          hospitalId: this.$store.state.user.loginRefreshData.hospitalId,
          ps: 15,
          sorts: 'addTime',
          orders: 'desc',
      })
    },
    nextPage(){
      this.page++
      this.getArticle()
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
.shufflingNav{
  height: 238.55px; 
  background: url("../../../assets/bj.png") no-repeat;
  background-size: 100% 137.15px;
}
.title{
  width: 100%;
  text-align: center;
  position: fixed;
  top: 0;
  z-index: 99;
  background: url("../../../assets/bj.png") no-repeat;
  background-size: 100% 137.15px;
}
.title>h3{ 
  font-size: 18px;
  font-weight: bold;
  color: #FFFFFF;
  letter-spacing: 1px;
  line-height: 25px;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-top: 12px;
  padding-bottom: 5.5px;
}

.content{
  
  /* height: 100%; */
  width: 100%;
  overflow-y: scroll;
  touch-action: pan-y;
  -webkit-overflow-scrolling: touch; 
}
.shuffling_nav{
  height: 196px;
  width: 100%;
}
.shuffling_nav_banner{
  width: 100%;
  height: 196px;
  padding: 0px 8px;
  box-sizing: border-box;
}
.shuffling_nav_banner_imgBox{
  height: calc(100% - 10px);
  width: calc(100% - 32px);
  margin: 0px 8px;
  box-shadow: #dadada 0px 0px 10px 0px;
}
.shuffling_nav_banner_imgBox img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.typeNav{
  width: 100%;
  height: 155.5px;
  padding: 0px 32px;
  box-sizing: border-box;
  margin: 18px 0px 25px;
}
.typeNav>ul{
  width: 100%;
  height: 100%;
}
.typeNav>ul>li{
  display: inline-block;
  width: 25%;
  text-align: center;
}
.typeNav>ul>li img{
  width: 30px;
  height: 60px;
  object-fit: cover;
}
.typeNav>ul>li p{
  font-size: 14px;
  margin-block-start: -21px;
  margin-block-end: 25px;
}
.typeNav>ul>li:nth-child(5) p,.typeNav>ul>li:nth-child(6) p,.typeNav>ul>li:nth-child(7) p.typeNav>ul>li:nth-child(8) p{
  margin-block-end:0;
}

</style>
