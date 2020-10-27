<template>
    <div class="searchNav">
        <div class="searchNavBox">
            <div class="searchLeft">
                <slot name="search"></slot>
                
            </div>
            <div class="searchRight">
                <slot name="screening"></slot>
                
            </div>
        </div>
        <div style="height:46px"></div>
    </div>
    
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
<style scoped> 
.searchNav{
    width: 100%;
    height: 46px;
    line-height: 46px;
}
.searchNavBox{
    padding: 0px 16px;
    box-sizing: border-box;
    font-size: 0px;
}
.searchLeft,.searchRight{
    display: inline-block;
    vertical-align: middle;
    width: calc(100% - 66px)
}
.searchLeft{
    height: 34px;
    position: relative;
    margin: 6px 0px;
}
.searchLeft>img{
    width: 13px;
    height: 15px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 15px;
    bottom: 0;
    margin: auto 0px;
}
.searchLeft>input{
    font-size: 15PX;
    height: 34px;
    width: 100%;
    background: #ffffff;
    border-radius: 17px;
    border: none;
    padding: 0px 15px 0px 39px;
    box-sizing: border-box;
}
.searchRight{
    width: 66px;
    height: 21px;
    line-height: 21px;
    text-align: right;
    margin: 12.5px 0px;
}
.searchRight>span{
    font-size: 15px;
    position: static;
    vertical-align: middle;
}
.searchRight>img{
    width: 12px;
    height: 13px;
    object-fit: cover;
    position: static;
    vertical-align: middle;
    margin-left: 4px;
}
</style>