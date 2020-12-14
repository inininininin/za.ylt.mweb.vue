<template>
    <div class="operatingManualChildern">
        <topNavBottomBorder>
            <img draggable="false" slot="returnImg" src="../../../assets/shape@3x.png" alt=""  @click="$common.backFn" id="navback">
			<h1 slot="title">{{this.$route.query.name? this.$route.query.name:''}}</h1>
            <!-- <img draggable="false" slot="rightNav" src="../../../assets/jilu@2x.png" alt=""> -->
        </topNavBottomBorder>
        <div class="content" style="height:calc(100% - 47px)">
            <ul>
                <listImg>
                    <van-list
                        slot="listImg"
                        v-model="loading"
                        :finished="finished"
                        loading-text=""
                        finished-text=""
                        @load="nextPage"
                        >
                        <li v-for="(item,inx) in operatingManualChildernList" :key="inx" @click="$common.typeRouterFn(item.url,{name:item.name,'operatingManualId':item.operatingManualId,'operatingManualSectionId':item.operatingManualSectionId,upperId:item.upperId,time : new Date().getTime().toString()})">
                            <div class="chooseOptions_left">
                                <h4>{{item.name}}</h4>
                            </div>
                            <div class="chooseOptions_right">
                                <img draggable="false" src="../../../assets/ChevronCopy2@2x.png" alt="">
                            </div>
                        </li>
                    </van-list>
                </listImg>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'operatingManualChildern',
    data(){
        return{
            query:'',
            operatingManualChildernList:[],
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
        
    },
    methods:{
        start(){
            Object.assign(this.$data, this.$options.data());
            this.query = JSON.stringify(this.$route.query);
            this.$common.loginRefreshFn(true,()=>{
                this.getFatherData()
            },()=>{
                return
            })
        
        },
        getFatherData(){
            let _data ={}
            // console.log(this.$route.query)
            try {
                if(!this.$route.query.operatingManualSectionId){
                    _data={
                        operatingManualId: this.$route.query.operatingManualId,
                        pn: this.page,
                        ps: 15  
                    }
                }else{
                    _data={
                        operatingManualId: this.$route.query.operatingManualId,
                        upperId: this.$route.query.operatingManualSectionId,
                        pn: this.page,
                        ps: 15  
                    }
                }
            } catch (error) {
                
            }
            this.loading = false;
            this.$publicRequest.getOperatingManualChildernData(res=>{
                if(res.data.rows.length>0){
                    if(this.page == 1){
                        this.operatingManualChildernList = []
                    }
                    for(let i in res.data.rows){
                        this.operatingManualChildernList.push(res.data.rows[i])
                        if(res.data.rows[i].lowerCount){
                            if(this.$route.query.operatingManualId){
                                this.operatingManualChildernList[i].operatingManualId = this.$route.query.operatingManualId
                            }
                            this.operatingManualChildernList[i].url = '/hospital/operatingManualChildern'
                        }else{
                            this.operatingManualChildernList[i].url = '/hospital/operatingCenterDetails'
                        }
                        // console.log(this.operatingManualChildernList)
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
            },_data)  
            
        },
        resetFn(){
            
        },
        nextPage(){
            this.page++
            this.getFatherData()
        }
    }
}
</script>
<style scoped>
.operatingManualChildern{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #F5F5F5
}
.content{
    width: 100%;
    touch-action: pan-y;
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
    /* margin-top: 10px; */
    padding-top: 10px;
    box-sizing: border-box;
}
.content>ul{
    width: 100%;
    padding: 0px 0px 0px 16px;
    box-sizing: border-box;
    background: #FFFFFF;
}
>>>.van-loading{
    display: none
}
</style>