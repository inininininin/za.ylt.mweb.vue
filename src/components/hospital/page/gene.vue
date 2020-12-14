<template>
    <div class="gene">
        <topNav>
            <img draggable="false" slot="leftImg" src="../../../assets/sousuo@2x.png" alt="" style="width:14px;height:15px">
            <h1 slot="title">基因检测</h1>
            <van-dropdown-menu slot="rightNav" active-color="#2B77EF" >
                <van-dropdown-item v-model="geneTypeValue" :options="geneTypeOption" @change="typeGeneFn"/>
            </van-dropdown-menu>
        </topNav>
        <div class="centent" style="height:calc(100% - 98px)">
            <div class="centent_summary">
                <div class="centent_summary_left">
                    <span>分配检测盒</span>
                </div>
                <div class="centent_summary_right">
                    <div>剩余 20 个</div>
                    <img draggable="false" src="../../../assets/ChevronCopy2@2x.png" alt="">
                </div>
            </div>
            <ul>
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="nextPage"
                    >
                    <li v-for="(item,inx) in geneList" :key="inx">
                        <div class="centent_ItemTop">
                            <div class="centent_ItemTop_left">
                                <img draggable="false" src="../../../assets/small-logo@2x.png" alt="">
                                
                                <h3>{{item.hospital}}</h3>
                            </div>
                            <div class="centent_ItemTop_right">
                                <img draggable="false" v-if="item.status==3" src="../../../assets/yes@2x.png" alt="">
                                <div v-if="item.status==3" style="color:#FF951B">已出报告</div>
                                <img draggable="false" v-if="item.status==0" src="../../../assets/no@2x.png" alt="">
                                <div v-if="item.status==0" style="color:#2B77EF">未采样本</div>
                                <img draggable="false" v-if="item.status==1||item.status==2" src="../../../assets/wait@2x.png" alt="">
                                <div v-if="item.status==1||item.status==2" style="color:#1ECAC6">未出报告</div>
                            </div>
                        </div>
                        <div class="centent_ItemBottom">
                            <p>编号：{{item.geneTestSamplePackId}}</p>
                        </div>
                    </li>
                </van-list>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'gene',
    data(){
        return{
            geneTypeValue:0,
            geneTypeOption: [
                { text: '全部', value: 0 },
                { text: '未采样本', value: 1 },
                { text: '未出报告', value: 2 },
                { text: '已出报告', value: 3 },
            ],
            loading: true,
            finished: false,
            page:1,
            geneList:[]
        }
    },
    components:{
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
                this.getData();
            },()=>{
                return
            })
        },
        resetDataFn(){
            this.loading =  true;
            this.finished = false;
            this.geneList = [];
            this.page = 1;
            this.getData()
        },
        getData(){
            let status = ''
            switch(this.geneTypeValue){
                case 0:
                    status = '';
                break;
                case 1:
                    status = 0;
                break;
                case 2:
                    status = '1,2';
                break;
                case 3:
                    status = 3;
                break;

            }
            this.loading = false;
            this.$publicRequest.getGeneListData(res=>{
                if(res.data.items.length>0){
                    if(this.page == 1){
                        this.geneList = []
                    }
                    for(let i in res.data.items)
                    this.geneList.push(res.data.items[i])
                }
                if(res.data.items.length != 15){
                    this.finished = true;
                }
            },res=>{
                if(res.codeMsg){
                    _this.$toast(res.codeMsg);
                    this.loading = false;
                    this.finished = true;
                }
            },{
                pn: this.page,
                ps: 15,
                status: status,
                sorts: 'addTime',
                orders: 'desc',
                hospitalId: this.$store.state.user.loginRefreshData.hospitalId,
            })
        },
        nextPage(){
            this.page++;
            this.getData()
        },
        typeGeneFn(){
            this.resetDataFn()
        }
    }
}
</script>
<style scoped>
.gene{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #F5F5F5
}
.centent{
    width: 100%;
    overflow-y: scroll;
    touch-action: pan-y;
    -webkit-overflow-scrolling: touch;
    padding: 12px;
    box-sizing: border-box;
}
.centent_summary{
    width: 100%;
    height: 49px;
    line-height: 49px;
    display: flex;
    justify-content:space-between;
    background: #ffffff;
    padding: 0px 15px;
    box-sizing: border-box;
}
.centent_summary_left{
}
.centent_summary_left>span{
    font-size: 15px;
    font-weight: 400;
    color: #2B77EF;
}
.centent_summary_right{
    height: 49px;
}
.centent_summary_right>div{
    color: #666666;
    font-size: 14px;
    font-weight: 400;
    display: inline-block;
}
.centent_summary_right>img{
    width: 7px;
    height: 12px;
    position: static;
    vertical-align: middle;
}
.centent>ul{
    width: 100%;
    height: auto;
    margin-top: 12px;
}
.centent>ul li{
    width: 100%;
    height: 94px;
    background: #FFFFFF;
    margin-bottom: 12px;
    border-radius: 3px;
}
.centent>ul li:last-child{
    margin-bottom:0px;
}
.centent_ItemTop{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #E5E5E5;
    display: flex;
    justify-content:space-between;
    padding: 0px 15px;
    box-sizing: border-box;
}
.centent_ItemTop_left{
    height: 50px;
    line-height: 50px;
}
.centent_ItemTop_left>img{
    width: 23px;
    height: 17px;
    object-fit: cover;
    vertical-align: middle;
    display: inline-block;
    margin-right: 5px;
}
.centent_ItemTop_left>h3{
    font-size: 15px;
    font-weight: 500;
    margin-block-start: 0;
    margin-block-end: 0;
    display: inline-block;
}
.centent_ItemTop_right{
    height: 50px;
    line-height: 50px;
}
.centent_ItemTop_right>div{
    font-size: 13px;
    display: inline-block;
}
.centent_ItemTop_right>img{
    width: 11px;
    height: 11px;
    object-fit: cover;
    vertical-align: middle;
    display: inline-block;
}
.centent_ItemBottom{
    width: 100%;
    height: 42px;
    line-height: 42px;
    padding: 0px 15px;
    box-sizing: border-box;
}
.centent_ItemBottom>p{
    color: #768892;
    font-size: 13px;
    margin-block-start: 0;
    margin-block-end: 0;
}
</style>