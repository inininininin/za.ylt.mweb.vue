<template>
  <div class="index">
    <div class="navBox">
      <topNavSearchScreening>
        <img draggable="false" slot="search" src="../../../assets/sousuo@2x.png" alt="">
        <input slot="search" type="text" placeholder="搜索医院">
        <span slot="screening" @click="hospitalData.screeningShow = true">筛选</span>
        <img draggable="false" slot="screening" src="../../../assets/shaixuan.png" alt="">
        <h3 slot="index_title_left" >合作医院</h3> -->
        <span slot="index_title_left" > {{hospitalSum}}</span>
        <span slot="index_title_right">新增医院</span>
        <img slot="index_title_right" draggable="false" src="../../../assets/right@2x.png" alt="">
      </topNavSearchScreening>
      
    </div>
    <div style="height:99px"></div>

    <div class="hospitalList" style="height:calc(100% - 149px)">
      <ul>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="nextPage"
          >
        <li v-for="(item,inx) in hospitalList" :key="inx">
          <div class="hospitalMember_tile">
            <div class="hospitalMember_tile_left">
              <img draggable="false" src="../../../assets/small-logo@2x.png" alt="">
              <span>{{item.hospitalName}}</span>
            </div>
            <div class="hospitalMember_tile_right">
              <img draggable="false" src="../../../assets/yirenzheng.svg" alt="">
              <!-- <img draggable="false" src="../../../assets/weirenzheng.svg" alt=""> --> 
            </div>
          </div>
          <div class="hospitalMember_content">
            <p>创建时间：{{item.addTime? $moment(item.addTime).format('YYYY.MM.DD HH:mm'):''}}</p>
            <p>门诊数：{{item.clinicCount}}</p>
            <p>病源数：{{item.patientCount}}</p>
          </div>
        </li>
        </van-list>
      </ul>
    </div>
    <keep-alive>
      <screening @childFn="parentFn" :hospitalData="hospitalData" v-if="hospitalData.screeningShow"></screening>
    </keep-alive>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
import bottomNav from '../functionPage/bottomNav'
import screening from '../functionPage/screening'

export default {
  name: 'index',
  data () {
    return {
      query:'',
      hospitalData:{
        pn:1,
        kw:'',
        sorts:'',
        orders:'',
        screeningShow:false,
        axiosData:1
      },
      loading: false,
      finished: false,
      hospitalList:[],
      hospitalSum:0
    }
  },
  components:{
    bottomNav,screening
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
        this.getData()
      },()=>{
          return
      })
    },
    getData(){
      this.loading = false;
      this.$publicRequest.getHospitalData(res=>{
        if(res.data.items.length>0){
          if(this.page == 1){
            this.hospitalList = []
          }
          for(let i in res.data.items)
            this.hospitalList.push(res.data.items[i])
        }
        if(res.data.items.length != 15){
            this.finished = true;
        } 
        this.hospitalSum = res.data.sum.map.totalItemCount
      },res=>{
        if(res.codeMsg){
          // this.$toast(res.codeMsg);
          this.loading = false;
          this.finished = true;
        }
      },{
        pn: this.hospitalData.pn,
        ps: 15,
        kw: this.hospitalData.kw,
        sorts: this.hospitalData.sorts,
        orders: this.hospitalData.orders,
      })
    },
    getAllData(){
      this.loading = false;
      this.$publicRequest.getAllHospitalData(res=>{
        if(res.data.items.length>0){
          if(this.page == 1){
            this.hospitalList = []
          }
          for(let i in res.data.items)
            this.hospitalList.push(res.data.items[i])
        }
        if(res.data.items.length != 15){
            this.finished = true;
        } 
      },res=>{
        if(res.codeMsg){
          this.$toast(res.codeMsg);
          this.loading = false;
          this.finished = true;
        }
      },{
        pn: this.hospitalData.pn,
        ps: 15,
        kw: this.hospitalData.kw,
        sorts: this.hospitalData.sorts,
        orders: this.hospitalData.orders,
      })
    },
    nextPage(){
      this.page++
      if(this.hospitalData.axiosData){
        this.getData()
      }else{
        this.getAllData()
      }
      
    },
    parentFn(_value){
      console.log(_value)
      this.hospitalData.axiosData = _value.axiosData;
      this.hospitalData.sorts = _value.sorts;
      this.hospitalData.orders = _value.orders;
      this.page = 1;
      this.loading = false,
      this.finished = false,
      this.hospitalList = []
      // this.nextPage()
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
  background: #f5f5f5;
}
.navBox{
  width: 100%;
  height: auto;
  background: #f5f5f5;
  z-index: 9;
  position: fixed;
  box-shadow: rgba(217, 211, 211, 0.5) 0px 1px 2px 0px;
  top: 0;
  height: 99px;
}

.hospitalList{
  width: 100%;
  overflow-y: scroll;
  touch-action: pan-y;
	-webkit-overflow-scrolling: touch;
}
.hospitalList>ul{
  width: 100%;
  padding: 0px 12px;
  box-sizing: border-box;
}
.hospitalList>ul li{
  width: 100%;
  height: 141px;
  border-radius: 3px;
  background: #ffffff;
  margin-bottom: 12px;
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
