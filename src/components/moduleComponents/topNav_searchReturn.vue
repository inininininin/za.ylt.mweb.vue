<template>
    <div class="searchNav">
        <div class="searchNavBox">
            <div class="searchleft">
                <slot name="searchleft"></slot>
                <!-- <img draggable="false" src="../../assets/shape@3x.png" alt=""> -->
            </div>
            <div class="searchRight">
                <slot name="searchRight"></slot>
                <!-- <img draggable="false" src="../../assets/sousuo@2x.png" alt=""> -->
                <!-- <input type="text" placeholder="搜索门诊"> -->
            </div>
            
        </div>
        <div class="index_title">
            <div class="index_title_left">
                <slot name="index_title_left"></slot>
                <!-- <h3>合作医院</h3>
                <span> {{hospitalSum}}</span> -->
            </div>
            <div class="index_title_right">
                <slot name="index_title_right"></slot>
                <!-- <span>新增医院</span> -->
                <!-- <img draggable="false" src="../../assets/right@2x.png" alt=""> -->
            </div>
        </div>
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
    font-size: 0px;
    display: flex;
    justify-content:space-between;
}
.searchRight,.searchRight{
    display: inline-block;
    vertical-align: middle;
    width: calc(100% - 40px)
}
.searchRight{
    height: 34px;
    position: relative;
    margin: 6px 0px;
    padding-right: 16px;
    box-sizing: border-box;
}
.searchRight>img{
    width: 13px;
    height: 15px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 15px;
    bottom: 0;
    margin: auto 0px;
}
.searchRight>input{
    font-size: 15PX;
    height: 34px;
    width: 100%;
    background: #f5f5f5;
    border-radius: 17px;
    border: none;
    padding: 0px 15px 0px 39px;
    box-sizing: border-box;
}
.searchleft{
    width: 40px;
    height: 21px;
    line-height: 21px;
    text-align: right;
    margin: 12.5px 0px;
    text-align: center;
}

.searchleft>img{
    width: 9px;
    height: 15px;
    object-fit: cover;
    position: static;
    vertical-align: middle;
    
}
.index_title{
  width: 100%;
  height: 27px;
  line-height: 27px;
  font-size: 0px;
  margin-top: 11px;
  margin-bottom: 15px;
  padding: 0px 16px;
  box-sizing: border-box;
}
.index_title_left,.index_title_right{
  width: 50%;
  height: 27px;
  line-height: 27px;
  display: inline-block;
  vertical-align: middle;
}
.index_title_left>h3{
  font-size: 19px;
  margin-block-start: 0;
  margin-block-end: 0;
  display: inline-block;
}
.index_title_left>span{
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  margin-left: 7px;
}
.index_title_right{
  text-align: right;
}
.index_title_right>span{
  font-size: 16px;
  vertical-align: middle;
  color: #2B77EF;
}
.index_title_right>img{
  width: 8px;
  height: 13px;
  vertical-align: middle;
  margin-left: 5px;
}
</style>