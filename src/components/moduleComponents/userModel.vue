<template>
    <div class="userModel">
        <div class="nav">
            <div class="setUp">
                <slot name="setUp"></slot>
                <!-- <img draggable="false" src="../../assets/set_up@2x.png" alt=""> -->
            </div>
            <div class="navContent">
                <div class="navLeft">
                    <slot name="navLeft"></slot>
                    <!-- <img draggable="false" src="../../assets/logo.png" alt=""> -->
                    <!-- <span>已认证</span> -->
                </div>
                <div class="navCenter">
                    <slot name="navCenter"></slot>
                    <!-- <h3 class="line-1">医院名称</h3>
                    <p class="line-1">账号：18651622928</p> -->
                </div>
                <div class="navRight">
                    <slot name="navRight"></slot>
                    <!-- <span>营业执照</span>
                    <img draggable="false" src="../../assets/ChevronCopy2@2x.png" alt=""> -->
                </div>
            </div>
        </div>
        <div style="height:149px;"></div>
        <div class="chooseList">
            <ul>
                
                <listImg>
                    <div slot="listImg">
                        <slot name="chooseOptions"></slot>
                    </div>
                </listImg>
                <!-- <li>
                    <div class="chooseOptions_left">
                        <h4>积分兑换</h4>
                    </div>
                    <div class="chooseOptions_right">
                        <img src="../../assets/ChevronCopy2@2x.png" alt="">
                    </div>
                </li> -->
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'userModel',
    data(){
        return{

        }
    },
    activity(){

    },
    methods:{

    }
}
</script>
<style scoped>
.userModel{
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    touch-action: pan-y;
    -webkit-overflow-scrolling: touch;
}
.nav{
    width: 100%;
    height: 149px;
    overflow: hidden;
    background: #ffffff;
    position: fixed;
    box-shadow: rgba(217, 211, 211, 0.5) 0px 1px 2px 0px;
    top: 0;
}
.setUp{
    width: 100%;
    height: 20px;
    line-height: 20px;
    margin-top: 15.5px;
    text-align: right;
    padding: 0px 16px;
    box-sizing: border-box;
}
.setUp>img{
    width: 21.5px;
    height: 20px;
    object-fit: cover;
    /* vertical-align: text-bottom */
}
.navContent{
    width: 100%;
    height: 75px;
    margin: 23.5px 0px 15px;
    padding: 0px 18px 0px 28px;
    box-sizing: border-box;
    font-size: 0px;
}
.navLeft,.navCenter,.navRight{
    display: inline-block;
    vertical-align: middle;
}
.navLeft{
    width: 86px;
    height: 100%;
    font-size: 11px;
    position: relative;
}
.navLeft>img{
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 50%;
}
.navLeft>span{
    width: 53px;
    height: 20px;
    color: #FFFFFF;
    line-height: 20px;
    text-align: center;
    font-size: 11px;
    display: inline-block;
    position: absolute;
    right: 0;
    bottom: 0px;
    background: linear-gradient(180deg,#ffd34a, #ff8844);
    border-radius: 25px;
}
.navCenter{
    height: 46px;
    width: calc(100% - 150px);
    margin: 14.5px 0px;
    padding: 0px 18px;
    box-sizing: border-box;
}
.navCenter>h3{
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 21px;
    font-weight: bold;
    margin-block-start: 0;
    margin-block-end: 0;
}
.navCenter>p{
    width: 100%;
    font-size: 12px;
    color: #666666;
    margin-block-start: 0;
    margin-block-end: 0;
}
.navRight{
    width: 64px;
    height: 17px;
    
}
.navRight>span{
    color: #999999;
    font-size: 12px;
    vertical-align: middle;
}
.navRight>img{
    width: 8px;
    height: 13px;
    object-fit: cover;
    vertical-align: middle;
    margin-left: 8px;
}
.chooseList{
    width: 100%;
    height: calc(100% - 223px);
    margin: 12px 0px;
    
    overflow-y:scroll 
}
.chooseList>ul{
    width: 100%;
    padding: 0px 0px 0px 16px;
    box-sizing: border-box;
    background: #FFFFFF;
}

</style>