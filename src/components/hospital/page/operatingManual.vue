<template>
    <div class="operatingManual">
        <topNavBottomBorder>
            <img draggable="false" slot="returnImg" src="../../../assets/shape@3x.png" alt=""  @click="$common.backFn" id="navback">
			<h1 slot="title">运营手册</h1>
            <img draggable="false" slot="rightNav" src="../../../assets/jilu@2x.png" alt="">
        </topNavBottomBorder>
        <div class="content" style="height:calc(100% - 47px)">
            <ul>
                <listImg>
                    <van-list
                        slot="listImg"
                        v-model="loading"
                        :finished="finished"
                        finished-text=""
                        loading-text=""
                        @load="nextPage"
                        >
                        <li v-for="(item,inx) in operatingManualList" :key="inx" @click="$common.typeRouterFn(item.url,item)">
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
    name:'operatingManual',
    data(){
        return{
            query:'',
            operatingManualList:[],
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
            this.loading = false;
            this.$publicRequest.getOperatingManualFatherData(res=>{
                if(res.data.rows.length>0){
                    if(this.page == 1){
                        this.operatingManualList = []
                    }
                    for(let i in res.data.rows){
                        this.operatingManualList.push(res.data.rows[i])
                        this.getChildernData(res.data.rows[i])
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
                hospitalId: this.$store.state.user.loginRefreshData.hospitalId,
                pn: this.page,
                ps: 15  
            })  
            
        },
        getChildernData(_value){
            this.$publicRequest.getOperatingManualChildernData(_res=>{
                if(_res.data.rows.length>0){
                    _value.childernList = []
                    for(let i in _res.data.rows){
                        _value.childernList.push(_res.data.rows[i])
                    }
                    if(_res.data.rows.length){
                        _value.operatingManualId = _value.operatingManualId
                        _value.url='/hospital/operatingManualChildern'
                    }else{  
                        _value.url='/hospital/operatingCenterDetails'
                    }
                    // console.log('/*******_value：*******/')
                    // console.l 1og(_value)
                    // console.log('/*******this.operatingManualList： *******/')
                    console.log(this.operatingManualList)
                }
            },_res=>{
                if(_res.codeMsg){
                    this.$toast(_res.codeMsg);
                }
            },{
                operatingManualId: _value.operatingManualId,
                pn: 1,
                ps: 15
            }) 
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
.operatingManual{
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