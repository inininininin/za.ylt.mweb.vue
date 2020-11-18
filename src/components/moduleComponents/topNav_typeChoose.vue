<template>
    <div class="topNavTypeChoose">
        <div class="nav">
            <div class="nav_search">
                <div class="nav_search_left">
                    <img draggable="false" src="../../assets/sousuo@2x.png" alt="">
                    <input type="search" placeholder="搜索门诊名">
                </div>
                <div class="nav_search_right">
                    <img draggable="false" src="../../assets/xiaoxi@2x.png" alt="">
                    <div>{{sum.clinicSum}}</div>
                </div>
            </div>
            <div class="nav_title" v-if="typeValue=='clinic'">
                <h3>共享医联体</h3
            ></div>
            <div class="nav_type">
                <ul>
                    <li>
                        <img draggable="false" src="../../assets/yiyuanxingxiang@2x.png" alt="">
                        <div>医院形象</div>
                    </li>
                    <li>
                        <img draggable="false" src="../../assets/youzhianli@2x.png" alt="">
                        <div>优质案例</div>
                    </li>
                    <li>
                        <img draggable="false" src="../../assets/zhuanjia@2x.png" alt="">
                        <div>专家介绍</div>
                    </li>
                    <li>
                        <img draggable="false" src="../../assets/huodongfabu@2x.png" alt="">
                        <div>活动发布</div>
                    </li>
                </ul>
            </div>
            <div class="clinicTitle" v-if="typeValue=='hospital'">
                <div class="clinicTitle_left">
                    <h3>合作门诊（{{sum.clinicSum}}）</h3>
                </div>
                <div class="clinicTitle_right">
                    <div>新增</div>
                    <img draggable="false" src="../../assets/xinzeng@2x.png" alt="">
                </div>
            </div>
            <div style="height:10px" v-if="typeValue=='clinic'"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'topNavTypeChoose',
    data(){
        return{
            typeValue : false
        }
    },
    props:['sum'],
    
    components:{
    },
    activated(){
        //  console.log(this.$route.path);
        // if(this.$route.path.split('/')[1] == 'hospital'){
        //     this.typeValue = true
        //     console.log(this.$route.path);
        // }
    },
    mounted(){
        console.log(this.$route.path);
        if(this.$route.path.split('/')[1]){
            this.typeValue = this.$route.path.split('/')[1]
            console.log(this.$route.path);
        }
    },
    methods:{

    }
}
</script>
<style scoped>
.topNavTypeChoose{
    width: 100%;
    height: auto;
    background: #FFFFFF;
    position: fixed;
    top: 0;
    box-shadow: rgba(217, 211, 211, 0.5) 0px 1px 2px 0px;
}
.nav{
    width: 100%;
    height: auto;
}
.nav_search{
    width: 100%;
    height: 52px;
    font-size: 0px;
    vertical-align: middle
}
.nav_search_left,.nav_search_right{
    display: inline-block;
    vertical-align: middle
}
.nav_search_left{
    height: 52px;
    width:calc(100% - 52px);
    padding-left: 16px;
    position: relative;
    box-sizing: border-box;
}
.nav_search_left>img{
    width: 14px;
    height: 15px;
    position: absolute;
    top: 18.5px;
    left: 31px;
}
.nav_search_left>input{
    width: 100%;
    height: 34px;
    font-size: 15px;
    background: rgba(0, 0, 0, 0.04);
    border-radius: 17px;
    border: none;
    padding: 0px 15px 0px 39px;
    margin-top: 8px;
}
.nav_search_right{
    height: 52px;
    width: 52px;
    text-align: center;
    position: relative;
}
.nav_search_right>img{
    width: 19px;
    height: 24px;
    margin: 14px 0px;
    cursor: pointer;
}
.nav_search_right>div{
    min-width:14px;
    max-width: 27px;
    height: 14px;
    line-height: 14px;
    border-radius: 50%;
    text-align: center;
    background: #FF951B;
    color: #FFFFFF;
    font-size: 11px;
    position: absolute;
    top: 10px;
    left: 26px;
}
.nav_title{
    width: 100%;
    height: 26.5px;
    line-height: 26.5px;
    padding: 0px 18px;
    box-sizing: border-box; 
    margin:20px 0 8px;
}
.nav_title>h3{
    font-size: 19px;
    font-weight: 600;
    margin-block-start: 0;
    margin-block-end: 0;
}
.nav_type{
    width: 100%;
    height: 66px;
    margin-top: 17px;
}
.nav_type>ul{
    width: 100%;
    height: 66px;
    font-size: 0px;
    display: flex;
    justify-content: space-between;
    padding: 0px 28px;
    box-sizing: border-box;
}
.nav_type>ul>li{
    width: 60px;
    height: 66px;
    display: inline-block;
    text-align: center;
}
.nav_type>ul>li>img{
    width: 46px;
    height: 35px;
}
.nav_type>ul>li>div{
    margin-top: 10px;
    font-size: 15px;
}
.clinicTitle{
    width: 100%;
    height: 27px;
    line-height: 27px;
    font-size: 0px;
    vertical-align: middle;
    padding: 0px 18px;
    box-sizing: border-box;
    margin: 25px 0px 10px 0px;  
}
.clinicTitle_left,.clinicTitle_right{
    width: 50%;
    height: 27px;
    display: inline-block;
    vertical-align: middle;
}
.clinicTitle_left>h3{
    font-size: 19px;
    margin-block-start: 0;
    margin-block-end: 0;
    
}
.clinicTitle_right{
    text-align: right;
}
.clinicTitle_right>div{
    font-size: 16px;
    height: 27px;
    display: inline-block;
    vertical-align: middle;
}
.clinicTitle_right>img{
    width: 19px;
    height: 19px;
    display: inline-block;
    vertical-align: middle;
    margin-left:5px;
}
</style>