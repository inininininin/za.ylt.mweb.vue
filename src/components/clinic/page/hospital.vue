<template>
    <div class="hospital">
        <topNavTypeChoose :sum="sum"></topNavTypeChoose>
        <div style="height:191.5px"></div>
        <moduleList class="moduleList" style="height:calc(100% - 241.5px);touch-action: pan-y;-webkit-overflow-scrolling: touch;overflow-y: scroll;">
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
        <bottomNav></bottomNav>
    </div>
</template>
<script>
import bottomNav from '../functionPage/bottomNav'
export default {
    data(){
        return{
            query:'',
            sum:{
                clinicSum:'',
                patientSum:'',
            },
            articleList:[],
            loading: true,
            finished: false,
            page:1
        }
    },
    components:{
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
                this.getData()
            },()=>{})
        },
        getData(){
            this.loading = false;
            this.$publicRequest.getArticleData(res=>{
                if(res.data.items.length>0){
                    if(this.page == 1){
                        this.articleList = []
                    }
                    for(let i in res.data.items)
                        this.articleList.push(res.data.items[i])
                    }
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
            this.getData()
        }
    }
}
</script>
<style scoped>
.hospital{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>