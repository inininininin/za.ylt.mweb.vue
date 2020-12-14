<template>
    <div class="operatingCenter">
        <topNavBottomBorder>
            <img draggable="false" slot="returnImg" src="../../../assets/shape@3x.png" alt=""  @click="$common.backFn" id="navback">
			<h1 slot="title">运营中心</h1>
            <!-- <img draggable="false" slot="rightNav" src="../../../assets/jilu@2x.png" alt=""> -->
        </topNavBottomBorder>
        <div class="content" style="height:calc(100% - 47px)">
            <ul>
                <listImg>
                    <li slot="listImg" v-for="(item,inx) in optionsList" :key="inx" @click="$common.typeRouterFn(item.url,{time : new Date().getTime().toString()})">
                        <div class="chooseOptions_left">
                            <h4>{{item.name}}</h4>
                        </div>
                        <div class="chooseOptions_right">
                            <img draggable="false" src="../../../assets/ChevronCopy2@2x.png" alt="">
                        </div>
                    </li>
                </listImg>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'operatingCenter',
    data(){
        return{
            query:'',
            optionsList:[
                {name:"发布推送",url:''},
                {name:"短信群发",url:''},
                {name:"投放精准活动",url:''},
                {name:"运营文章",url:''},
                {name:"运营成果手册架构",url:'/hospital/operatingManual'},
            ]


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

        },
        resetFn(){
            
        },
    }
}
</script>
<style scoped>
.operatingCenter{
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
</style>