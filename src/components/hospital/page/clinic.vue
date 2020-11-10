<template>
    <div class="clinic">
        <topNavTypeChoose :sum="sum"></topNavTypeChoose>
        <div style="height:197px"></div>
        <clinicList style="height: calc(100% - 247px);">
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
    name:'clinic',
    data(){
        return{
            query:'',
            page:1,
            loading: true,
            finished: false,
            clinicList:[],
            sum:{
                clinicSum:'',
                patientSum:'',
            }
            
        }
    },
    // watch:{
    //     $route(to,from){
    //         if(to.path.split('/')[1] == 'hospital'){
    //             this.typeValue = true
    //             console.log(to.path);
    //         }
    //     }
    // },
    components:{
        bottomNav,
        // hospitalList
    },
    activated(){    
        if(this.query != JSON.stringify(this.$route.query)){
            this.start()
        }
    },
    methods:{
        start(){
            this.$common.loginRefreshFn(true,()=>{
                Object.assign(this.$data, this.$options.data());
                this.getPatientSum();
                this.getClinicSum();
                this.getClinicData();
            },()=>{
                return
            })
        },
        getPatientSum(){
            this.$publicRequest.getPatientPushSumData(res=>{
                this.sum.patientSum = res.data.newPatientCount
            },res=>{

            },{
                hospitalId: this.$store.state.user.loginRefreshData.hospitalId
            })
        },
        getClinicSum(){
            this.$publicRequest.getClinicSumData(res=>{
                this.sum.clinicSum = res.data.rowCount
            },res=>{

            })
        },
        getClinicData(){
            this.$publicRequest.getClinicListData(res=>{
                if(res.data.rows.length>0){
                    for(let i in res.data.rows)
                    this.clinicList.push(res.data.rows[i])
                }
                this.loading = false;
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
<style scoped>
.clinic{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #f5f5f5
}
</style>