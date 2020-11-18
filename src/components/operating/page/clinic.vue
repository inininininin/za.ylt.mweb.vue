<template>
  <div class="clinic">
    <div class="navBox">
      <topNavSearchScreening>
        <img draggable="false" slot="search" src="../../../assets/sousuo@2x.png" alt="">
        <input slot="search" type="text" placeholder="搜索门诊" style="background:#f5f5f5">
        <span slot="screening" @click="hospitalData.screeningShow = true">排序</span>
        <img draggable="false" slot="screening" src="../../../assets/shaixuan.png" alt="">
        <h3 slot="index_title_left" >合作医院</h3> -->
        <!-- <span slot="index_title_left" > {{hospitalSum}}</span> -->
      </topNavSearchScreening>
    </div>
    <div style="height:99px"></div>
    <clinicList style="height: calc(100% - 149px);">
      <van-list
      slot="clinicList"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="nextPage"
      >
          <li v-for="(item,inx) in clinicList" :key="inx">
              <h3 class="line-1">{{item.name}}</h3>
              <p class="line-1">推广：{{item.hospitalUserName}}</p>
              <button>{{item.patientCount}}</button>
          </li>
      </van-list>
    </clinicList>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
import bottomNav from '../functionPage/bottomNav'

export default {
  name: ' clinic',
  data () {
    return {
      query:'',
      page:1,
      loading: true,
      finished: false,
      clinicList:[],

    }
  },
  components:{
    bottomNav,
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
        this.getData();
        this.getClinicData();
      },()=>{
          return
      })
    },
    getData(){
    },
    getClinicData(){
      this.loading = false;
      this.$publicRequest.getClinicListData(res=>{
          if(res.data.rows.length>0){
            if(this.page == 1){
              this.clinicList = []
            }
            for(let i in res.data.rows)
              this.clinicList.push(res.data.rows[i])
          }
          if(res.data.rows.length != 15){
              this.finished = true;
          }
      },res=>{
          if(res.codeMsg){
              this.$toast(res.codeMsg);
              this.loading = false;
              this.finished = true;
          }
      },{
          pn: this.page,
          ps: 15,
          kw: '',
          sorts: 'addTime',
          orders: 'desc',
      })
    },
    nextPage(){
      this.page++
      this.getClinicData()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clinic{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #ffffff;
}
.navBox{
  width: 100%;
  height: auto;
  z-index: 9;
  position: fixed;
  box-shadow: rgba(217, 211, 211, 0.5) 0px 1px 2px 0px;
  top: 0;
  height: 99px;
}
</style>
