<template>
    <div class="channelsClinic">
        <topNavSearchReturn>
            <img slot="searchleft" draggable="false" src="../../../assets/shape@3x.png" alt="" @click="$common.backFn">
            <img slot="searchRight" draggable="false" src="../../../assets/sousuo@2x.png" alt="">
            <input slot="searchRight" type="text" v-model="kw" placeholder="搜索门诊名" @keydown="searchFn">
            <h3 slot="index_title_left">合作门诊</h3>
            <span slot="index_title_left">({{clinicsum}})</span>
            <span slot="index_title_right" style="color:#333333">新增</span>
            <img slot="index_title_right" style="height: 19px;width: 19px;" draggable="false" src="../../../assets/xinzeng@2x.png" alt="">
        </topNavSearchReturn>
        <div style="height:98px"></div>
        <clinicList style="height: calc(100% - 98px);">
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
    </div>
</template>
<script>
export default {
    name:'channelsClinic',
    data(){
        return{
            query:'',
            page:1,
            loading: true,
            finished: false,
            clinicList:[],
            clinicsum:0,
            kw:''
        }
    },
    activated(){    
        if(this.query != JSON.stringify(this.$route.query)){
            this.start()
        }
    },
    methods:{
        searchFn(){
            this.page = 0;
            this.loading = true,
            this.finished = false,
            this.clinicList = []
            this.nextPage()
            this.getClinicSum()
        },
        start(){
            this.$common.loginRefreshFn(true,()=>{
                Object.assign(this.$data, this.$options.data());
                this.getClinicData()
                this.getClinicSum()
            },()=>{
                return
            })
        },
        resetFn(){

        },
        getClinicSum(){
            this.$publicRequest.getClinicSumData(res=>{
                this.clinicsum = res.data.rowCount
            },res=>{

            },{
                kw:this.kw,
            })
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
                kw: this.kw,
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
<style scoped>
.channelsClinic{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #F8F8F8
}

</style>