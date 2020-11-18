<template>
    <div class="operatingCenterDetails">
        <topNavBottomBorder>
            <img draggable="false" slot="returnImg" src="../../../assets/shape@3x.png" alt=""  @click="$common.backFn" id="navback">
			<h1 slot="title">服务内容</h1>
        </topNavBottomBorder>
        <div class="contentBox" style="height: calc(100% - 50px);">
            <ul>
                <van-list
                    slot="listImg"
                    v-model="loading"
                    :finished="finished"
                    loading-text=""
                    finished-text=""
                    @load="nextPage"
                    >
                    <li v-for="(item,inx) in 99" :key="inx" >
                        <div class="contentBox_LineOne">
                            <div class="contentBox_LineOneBox">
                                <div class="contentBox_LineOneBox_left">
                                    <img draggable="false" src="../../../assets/beijing.png" alt="">
                                    <video src="../../../assets/1.mp4"></video>
                                </div>
                                
                                <div class="contentBox_LineOneBox_right">
                                    <van-icon name="ellipsis" />
                                </div>
                            </div>
                            <p class="line-1">你好</p>
                        </div>
                        <div class="contentBox_LineTwo">
                            <p>2020/01/18/15:26 高雯雯</p>
                        </div>
                    </li>
                </van-list>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'operatingCenterDetails',
    data(){
        return{
            query:'',
            loading: true,
            finished: false,
            page:1,
            serviceContentList:[]
        }
    },
    activated(){
        if(this.query != JSON.stringify(this.$route.query)){
            this.start()
        }
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
            this.loading = false;
            this.$publicRequest.serviceContentListData(res=>{
                if(res.data.rows.length>0){
                    if(this.page == 1){
                        this.serviceContentList = []
                    }
                    for(let i in res.data.rows){
                        this.serviceContentList.push(res.data.rows[i])
                    }
                }
                
                if(res.data.rows.length != 15){
                    this.finished = true;
                }
            },res=>{
                this.loading = false;
                this.finished = true;
                if(res.codeMsg){
                    this.$toast(res.codeMsg);
                }
            },{
                operatingManualSectionId: this.$route.query.operatingManualSectionId,
                pn: this.page,
                ps: 15  
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
.operatingCenterDetails{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #F5F5F5;
}
.contentBox{
    width: 100%;
    padding-top: 10px;
    box-sizing: border-box;
    touch-action: pan-y;
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
}
.contentBox>ul{
    width: 100%;
    height: auto;
}
.contentBox>ul li{
    width: 100%;
    padding: 0px 12px;
    box-sizing: border-box;
    background: #ffffff;
    margin-bottom: 23px;
}
.contentBox_LineOne,.contentBox_LineTwo{
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
}
.contentBox_LineOne{
    border-bottom: 1px solid #D8D8D8;
}
.contentBox_LineOneBox{
    display: flex;
    justify-content:flex-start;
    
}
.contentBox_LineOne>p{
    display: block;
    font-size: 15px;
    font-weight: 500;
    margin-block-start: 0;
    margin-block-end: 0;
}
.contentBox_LineOneBox_left>img,.contentBox_LineOneBox_left>video{
    width: 39px;
    height: 39px;
    margin-right: 13px;
    margin-bottom: 10px;
    object-fit: cover;
}
.contentBox_LineOneBox_right{
    width: 39px;
    height: 39px;
    line-height: 30px;
    margin-right: 13px;
    margin-bottom: 10px;
    display: inline-block;
    text-align: center;
}
.contentBox_LineOneBox_right>i{
    margin:6.3px 0px;
    cursor: pointer;
    font-weight: bolder;
    font-size: 27px;
}
.contentBox_LineTwo>p{
    color: #999999;
    font-size: 14px;
    margin-block-start: 0;
    margin-block-end: 0;
}
</style>