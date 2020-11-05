<template>
    <div class="hospitalList">
        <ul>
            <slot name = "hospitalList"></slot>
        </ul>
    </div>
</template>
<script>
export default {
    name:'hospitalList',
    data(){
        return{
            
        }
    },

}
</script>
<style >
.hospitalList{
    width: 100%;
    
    overflow-y: scroll;
    touch-action: pan-y;
    -webkit-overflow-scrolling: touch;
}
.hospitalList>ul{
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
}
.hospitalList>ul li{
    width: calc( 50% - 5px);
    height: 110px;
    background: #ffffff;
    display: inline-block;
    margin-bottom: 10px;
    text-align: center;
}
.hospitalList>ul li:nth-child(2n){
    margin-left: 10px;
}
.hospitalList>ul li>h3{
    font-size: 16px;
    margin-block-start: 19px;
    margin-block-end: 0;
}
.hospitalList>ul li>p{
    margin-block-start: 9px;
    margin-block-end: 9px;
    color: #999999;
}
.hospitalList>ul li>button{
    width: 90px;
    height: 24px;
    color: #FF951B;
    text-align: center;
    line-height: 24px;
    border-radius: 50px;
    border: 1px solid #FF951B;
    margin-bottom: 19px;
    background: #ffffff;
}
</style>
