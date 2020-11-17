<template>
    <div class="list">
        <slot name="listImg"></slot>
    </div>
</template>
<script>
export default {
    name:'list',
    data(){
        return{

        }
    },
    activited(){
      
    },
    methods:{

    }
}
</script>
<style>
.list li{
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #EEEEEE;
    padding: 0px 18px 0px 2px;
    box-sizing: border-box;
    font-size: 0px;
    
}
.chooseOptions_left{
    width: 50%;
    display: inline-block;
    vertical-align: middle;
}
.chooseOptions_left>h4{
    font-size: 17px;
    font-weight: 400;
    margin-block-start: 0;
    margin-block-end: 0;
}
.chooseOptions_right{
    width: 50%;
    text-align: right;
    display: inline-block;
    vertical-align: middle;
}
.chooseOptions_right>img{
    width: 8px;
    height: 13px;
    object-fit: cover;
    vertical-align: middle;
}
</style>