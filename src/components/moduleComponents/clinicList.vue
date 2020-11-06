<template>
    <div class="clinicList">
        <ul>
            <slot name = "clinicList"></slot>
        </ul>
    </div>
</template>
<script>
export default {
    name:'clinicList',
    data(){
        return{
            
        }
    },

}
</script>
<style >
.clinicList{
    width: 100%;
    
    overflow-y: scroll;
    touch-action: pan-y;
    -webkit-overflow-scrolling: touch;
}
.clinicList>ul{
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
}
.clinicList>ul li{
    width: calc( 50% - 5px);
    height: 110px;
    background: #ffffff;
    display: inline-block;
    margin-bottom: 10px;
    text-align: center;
}
.clinicList>ul li:nth-child(2n){
    margin-left: 10px;
}
.clinicList>ul li>h3{
    font-size: 16px;
    margin-block-start: 19px;
    margin-block-end: 0;
}
.clinicList>ul li>p{
    margin-block-start: 9px;
    margin-block-end: 9px;
    color: #999999;
}
.clinicList>ul li>button{
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
