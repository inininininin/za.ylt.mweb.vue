<template>
    <div class="clinicNo">
        <div class="personnelList">   
            <ul>
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="nextPage"
                    >
                <li v-for="(item,inx) in personnelList" :key="inx">
                    <div class="li_top">
                        <div class="li_top_left">
                            <span>{{item.realname}}</span>
                        </div>
                        <div class="li_top_right">
                            <img src="../../../assets/weijiuzhen@2x.png" alt="">
                            <span>未就诊</span>
                        </div>
                    </div>  
                    <div class="li_time">
                        <span>推送时间：{{item.pushTime? $moment(item.pushTime).format('YYYY-MM-DD HH:mm:ss'):''}}</span>
                    </div>
                </li>
                </van-list>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'clinicNo',
    data(){
        return{
            query:'',
            personnelList:[],
            page:1,
            pushTimeStart:'',
            loading: false,
            finished: false,
            pushTimeEnd:'',
            hospitalConfirmTimeStart:'',
            hospitalConfirmTimeEnd:''
        }
    },
    props:['conditionsData'],
    activated(){
        if(this.query != JSON.stringify(this.$route.query)){
            this.start()
            console.log(this.$store.state.user.loginRefreshData)
        }
    },
    methods:{
        start(){
            Object.assign(this.$data, this.$options.data());
            this.query = JSON.stringify(this.$route.query);
            this.getData()
        },
        getData(){
            let _this = this;
            this.$publicRequest.getPathogenicData(res=>{
                if(res.data.items.length>0){
                    for(let i in res.data.items)
                    this.personnelList.push(res.data.items[i])
                }
                this.loading = false;
                if(res.data.items.length != 15){
                    this.finished = true;
                }
            },res=>{
                if(res.codeMsg){
                    _this.$toast(res.codeMsg);
                }
            },{
                clinicId:this.$store.state.user.loginRefreshData.clinicId,
                pn: _this.page,
                ps: 15,
                status: 1,
                pushTimeStart: _this.conditionsData.pushTimeStart,
                pushTimeEnd: _this.conditionsData.pushTimeEnd,
                hospitalConfirmTimeStart: _this.conditionsData.hospitalConfirmTimeStart,
                hospitalConfirmTimeEnd: _this.conditionsData.hospitalConfirmTimeEnd,
            })
        },
        nextPage(){
            this.page++
            this.getData()
        }
    }
}
</script>
<style scoped>
.clinicNo{
    width: 100%;
    padding: 12px  16px 0px;
    box-sizing: border-box; 
    background: #F5F5F5;
}
.personnelList{
    width: 100%;
    height: auto;
}
.personnelList>ul{
    width: 100%;
    height: auto;
}
.personnelList>ul li{
    width: 100%;
    height: 101px;
    background: #FFFFFF;
    border-radius: 3px;
    margin-bottom: 12px;
}
.li_top{
    font-size: 0;
    border-bottom: 1px solid #E5E5E5;
}
.li_top,.li_time{
    width: 100%;
    height: 50px;
    padding: 0px 15px;
    box-sizing: border-box;
}
.li_time{
    line-height: 50px;
}
.li_time>span{
    color: #768892;
}
.li_top_left{
    font-weight: bold;
    font-size: 15px;
}
.li_top_right{
    text-align: right;
}
.li_top_right>img{
    width: 11px;
    height: 12px;
    object-fit: cover;
    position: static;
    vertical-align: middle;
    margin-right: 5px;
}
.li_top_right>span{
    font-size: 13px;
    color: #2B77EF;
    position: static;
    vertical-align: middle;
}
.li_top_left,.li_top_right{
    height: 50px;
    line-height: 50px;  
    width: 50%;
    display: inline-block;
    vertical-align:top
}
</style>