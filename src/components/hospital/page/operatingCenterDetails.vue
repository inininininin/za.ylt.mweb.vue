<template>
    <div class="operatingCenterDetails">
        <topNavBottomBorder  >
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
        <div class="addServiceButton" :class="[!addserviceData.state? 'amplification':'']">
            <img draggable="false" src="../../../assets/addcopy@2x.png" alt="" @click="addShowFn">
        </div>
        <div class="addService" :class="[addserviceData.state? 'rightMove':'']">
            <div class="inputBox">
                <div class="inputBox_left">
                    <input type="text" v-model="addserviceData.kw">
                    <img src="../../../assets/XCopy@2x.png" alt="" v-if="addserviceData.kw" @click="addserviceData.kw = ''">
                </div>
                <div class="inputBox_right">
                    <button :style="{'background': addserviceData.kw? '#33f2f2':'#aeffff'}" @click="submitFn">
                        {{addserviceData.kw? '发送':'关闭'}}
                        
                    </button>
                </div>
            </div>
            <div class="functionBox">
                <img draggable="false" src="../../../assets/photo.png" alt="">
                <img draggable="false" src="../../../assets/video.png" alt="">
            </div>
            
            <div class="previewBoxScroll" @scroll="scrollFn()">
                <div v-for="(item,inx) in addserviceData.previewBox" :key="inx" >
                    <div>
                        <img :src="item.url" alt="" :style="{'opacity':item.show? '1':'0'}" :ref="'old'+inx" @touchstart="touchstartFn($event,'old'+inx,item)" @touchmove="touchmoveFn($event,'old'+inx,item)" @touchend="touchendFn($event,'old'+inx,item)" draggable="false"> 
                        
                    </div>
                </div>
                <img :src="addserviceData.nowMoveUrl" alt="" ref="replaceImgRef" v-if='addserviceData.nowMoveIimgShowValue'>
            </div>
            
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
            serviceContentList:[],
            addserviceData:{
                kw:'',
                state:false,
                previewBox:[
                    {url:require('../../../assets/beijing.png'),show:true},
                    {url:require('../../../assets/background.png'),show:true},
                    {url:require('../../../assets/bj.png'),show:true},
                    {url:require('../../../assets/yiyuanxingxiang@2x.png'),show:true},
                    {url:require('../../../assets/zhuanjia@2x.png'),show:true},
                ],
                nowMoveUrl:'',
                nowMoveIimgShowValue:false,
            }
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
        },
        addShowFn(){
            this.addserviceData.state = true
        },
        submitFn(){
            if(this.addserviceData.state){
                if(this.addserviceData.kw){
                    this.$toast('操作成功')
                    this.addserviceData.state = false;
                }else{
                    this.addserviceData.state = false;
                }

            }else{
                this.$toast('操作失败')
            }
        },
        touchstartFn(_event,_ref,_value){
            
            // console.log('----------touchstartFn----------')
            // console.log('_event.screenX:'+_event.touches[0].clientX)
            // console.log(this.$refs[_ref][0].offsetLeft)
            // console.log('_event.offsetX:'+_event.touches[0].pageX)
            // console.log('_event.pageX:'+_event.touches[0].screenX)
            // console.log('_event.pageY:'+_event.touches[0].pageY)
            // console.log('_event.offsetY:'+_event.touches[0].offsetY)
            // console.dir(_event.touches[0])
            // console.log(document.body.clientHeight-_event.offsetY)
            
            // this.addserviceData.nowMoveIimgShowValue = true
            // let _x = _event.touches[0].screenX-_event.touches[0].clientX;
            // this.addserviceData.nowMoveUrl = _value.url;
            // for(let i in this.addserviceData.previewBox){
            //     if(this.addserviceData.previewBox[i].show == false){
            //         this.addserviceData.previewBox[i].show = true
            //     }
            // }
            // _value.show = false
            // this.$nextTick(()=>{
            //     this.$refs.replaceImgRef.style.left = this.$refs[_ref][0].offsetLeft+'px'
            // })
        },
        touchmoveFn(_event,_ref,_value){
            // console.dir(document.body.offsetHeight)
            console.log('----------touchmoveFn----------')
            console.dir(_event)
            console.log('_ref.screenY:'+_event.touches[0].screenX)
            // console.log('_ref.offsetY:'+_ref.offsetY)
            // console.log('_ref.pageY:'+_ref.pageY)
            // this.$refs.replaceImgRef.style.top = _ref.offsetY+'px'
           if(document.body.offsetHeight - _event.touches[0].pageY>80){
               this.addserviceData.nowMoveIimgShowValue = true
                // let _x = _event.touches[0].screenX-_event.touches[0].clientX;
                this.addserviceData.nowMoveUrl = _value.url;
                for(let i in this.addserviceData.previewBox){
                    if(this.addserviceData.previewBox[i].show == false){
                        this.addserviceData.previewBox[i].show = true
                    }
                }
                _value.show = false
                this.$nextTick(()=>{                    
                    this.$refs.replaceImgRef.style.left = this.$refs[_ref][0].screenX +'px'
                    this.$refs.replaceImgRef.style.bottom = document.body.offsetHeight - _event.touches[0].pageY - 80+'px'
                
                })
            }
        },
        touchendFn(_event,_ref,_value){
            let _num = Math.round(this.$refs.replaceImgRef.style.bottom.replace('px',''))
            if(_num){
                if(_num>150){
                    this.$toast('操作成功')
                    this.$nextTick(()=>{
                        this.$refs.replaceImgRef.style.opacity = '1'
                    })
                }else{
                    this.$toast('取消操作')
                    while(_num != 0 && _num>-1){
                        this.$nextTick(()=>{
                            this.$refs.replaceImgRef.style.bottom = _num +'px'
                        })
                        _num--
                    }
                }
                
                for(let i in this.addserviceData.previewBox){
                    if(this.addserviceData.previewBox[i].show == false){
                        this.addserviceData.previewBox[i].show = true
                    }
                }
                this.addserviceData.nowMoveIimgShowValue = false
            }
        },
        scrollFn(_value){
            this.addserviceData.nowMoveIimgShowValue = false;
            this.addserviceData.nowMoveUrl = '';
            for(let i in this.addserviceData.previewBox){
                if(this.addserviceData.previewBox[i].show == false){
                    this.addserviceData.previewBox[i].show = true
                }
            }
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
.addServiceButton{
    width: 0px;
    height: 0px;
    position: fixed;
    bottom: 42px;
    right: 40px;
    z-index: 9;
    opacity:0;
    -webkit-transition: all .5s ease;  
    -moz-transition: all .5s ease;  
    transition: all .5s ease;
}
.addServiceButton>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.amplification{
    width: 44px;
    height: 44px;
    bottom: 20px;
    right: 18px;
    opacity:1;
}
.addService{
    width: 100%;
    height: auto;
    opacity:0;
    background: #F5F5F5;
    position: fixed;
    right: -100%;
    bottom: 0;
    padding: 8px 0px 5px;
    box-sizing: border-box;
    -webkit-transition: all .5s ease;  
    -moz-transition: all .5s ease;  
    transition: all .5s ease;
    z-index: 10;
}

.rightMove{  
    right: 0px;  
    opacity: 1;  
} 
.inputBox{
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
    box-sizing: border-box;
}
.inputBox_left,.inputBox_right{
    height: 100%;
}
.inputBox_left{
    width: calc(100% - 60px);
    padding-right: 5px;
    box-sizing: border-box;
    position: relative;
}
.inputBox_left>img{
    width: 10px;
    height: 10px;
    object-fit: cover;
    position: absolute;
    right: 15px;
    top: 7.5px;
}
.inputBox_left>input{
    width: 100%;
    height: 23px;
    border: none;
    border-radius: 50px;
    vertical-align: middle;
    padding: 0px 25px 0px 10px;
    box-sizing: border-box;
}
.inputBox_right{
    width: 60px;
    height: 25px;
    text-align: center;
}
.inputBox_right>button{
    border: none;
    color: #FFF;
    font-size: 13px;
    width: 50px;
    height: 25px;
    border-radius: 50px;
}
.functionBox{
    height: 40px;
    line-height: 40px;
    width: 100%;
    justify-content: left;
    padding: 7px 5px 10px;
    box-sizing: border-box;
}
.functionBox>img{
    width: 30px;
    height: 20px;
    object-fit: cover;
    margin-right: 8px;
    cursor: pointer;
}
.previewBox{
    width: 100%;
    height: auto;
    position: relative;
}
.previewBoxScroll{
    width: 100%;
    height: auto;
    overflow-x: scroll;
    justify-content: flex-start;
    display: flex;
    touch-action: pan-x;
    -webkit-overflow-scrolling: touch;
    
}
.previewBoxScroll::-webkit-scrollbar {
    display:none
}
.previewBoxScroll>div{
    height: 90px;
    width: auto;
    padding: 1px;
    box-sizing: border-box;
    background: #ffffff;
}
.previewBoxScroll>img{
    height: 90px;
    width: auto;
    object-fit: cover;
    position: absolute;
    left: 0px;
}
.previewBoxScroll>div>div{
    height: 100%;
    width: auto;
    background: #e3e3e3;
}
.previewBoxScroll>div>div>img{
    height: 100%;
    width: auto;
    object-fit: cover;
}
</style>