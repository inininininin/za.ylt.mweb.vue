<template>
    <div class="selectPort">
        <div class="navTitle">
            <h1>您有以下端口</h1>
            <p>请选择进入</p>
        </div>  
        <div class="optionList">
            <div  v-for="(item,inx) in optionList" :key="inx" >
                <div v-if="item.showValue" class="option" @click="goPath=item.pathValue">
                    <img :src="item.imgSrc" alt="">
                    <div class="optionName">
                        <h3>{{item.title}}</h3>
                        <p>{{item.brief}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="navBottom">
            <img src="../assets/go.png" alt="" @click="routerFn">
        </div>
    </div>
    
</template>
<script>
export default {
    name : 'selectPort',
    data (){
        return{
           optionList:[
               {
                   imgSrc: require('../assets/yy.png'),
                   title:'Hospital',
                   brief:'医院端',
                   showValue:0,
                   pathValue:'/hospital/index',
               },
               {
                   imgSrc: require('../assets/mz.png'),
                   title:'Outpatient',
                   brief:'门诊端',
                   showValue:0,
                   pathValue:'/clinic/index',
               },
               {
                   imgSrc: require('../assets/tgr.png'),
                   title:'Operation',
                   brief:'经理端',
                   showValue:0,
                   pathValue:'/operating/index',
               },
               {
                   imgSrc: require('../assets/yying.png'),
                   title:'HospitalOpe',
                   brief:'医院运营端',
                   showValue:0,
                   pathValue:'',
               },
           ],
           goPath:''
        }
    },
    mounted(){
        this.$common.loginRefreshFn(true)
        console.log(this.$store.state.user.loginRefreshData)
        if(this.$store.state.user.loginRefreshData){
            let _data = this.$store.state.user.loginRefreshData
            this.optionList[0].showValue = _data.hospitalIs
            this.optionList[1].showValue = _data.clinicIs
            this.optionList[2].showValue = _data.operateIs
            this.optionList[3].showValue = _data.hospitalOperateIs
        }
    },
    methods:{
        routerFn(){
            this.$router.push({path : this.goPath,query:{time: new Date().getTime().toString()}})
        }
    }
}
</script>
<style scoped>
.selectPort{
    height: 100%;
    width: 100%;
    padding: 0px 30px;
    box-sizing: border-box;
    overflow-y:scroll;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	touch-action: pan-y;
  	-webkit-overflow-scrolling: touch;
}
.navTitle{
    margin: 60px 0px 45px 0px;
}
.navTitle>h1{
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    margin-block-start: 0;
    margin-block-end: 10px;
}
.navTitle>p{
    font-size: 17px;
    font-weight: 400;
    color: #666666; 
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: 24px;
}
.optionList{
    margin-bottom: 45px;
}
.option{
    width: 100%;
    height: 86px;
    border: 2px solid #e2e2e2;
    border-radius: 15px;
    position: relative;
    margin-bottom: 20px;
    overflow: hidden;
}
.option:hover{
    color: #ED2828;
    border-color: #ED2828
}
.optionList>div:last-child{
    margin-bottom: 0px;
}
.option>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.optionName{
    width: 89px;
    position: absolute;
    left: 153px;
    top: 0;
    bottom: 0;
    margin: auto 0px;
    height: 53px; 
}
.optionName>h3{
    font-size: 23px;
    line-height: 32px;
    font-weight: 400;
    margin-block-start: 0;
    margin-block-end: 0;
}
.optionName>p{
    color: #333333!important;
    font-size: 15px;
    font-weight: 400;
    margin-block-start: 0;
    margin-block-end: 0;
}
.navBottom{
    width: 100%;
    height: 65px;
    text-align: center;
    margin-bottom: 55px;
}
.navBottom>img{
    height: 65px;
    width: 65px;
}
</style>