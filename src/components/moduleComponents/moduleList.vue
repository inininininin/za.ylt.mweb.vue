<template>
    <div class="moduleList">
        <div class="operation">
            <div class="operationTitle" :style="{'border-top':typeValue=='hospital'? '1px solid #E5E5E5':'none'}">
                <div class="operationTitle_left">
                    <slot name="operationTitle_left"></slot>
                </div>
                <div class="operationTitle_right">
                </div>
                
            </div>
            <ul>
                <slot name="ul"></slot>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        console.log(this.$route.path);
        if(this.$route.path.split('/')[1] == 'hospital'){
            this.typeValue = this.$route.path.split('/')[1]
            console.log(this.$route.path);
        }
    },
    mounted(){
        console.log(this.$route.path);
        if(this.$route.path.split('/')[1] == 'hospital'){
            this.typeValue = this.$route.path.split('/')[1]
            console.log(this.$route.path);
        }
    },

    methods:{

    }
}
</script>
<style>
.moduleList{
    height: auto;
    width: 100%;
}
.operation{
  height: auto;
  width: 100%;
  padding: 0px 16px;
  box-sizing: border-box;
}
.operationTitle{
  width: 100%;
  height: 24px;
  line-height: 25px;
  border-top: 1px solid #E5E5E5;
  padding: 20px 0px 8px;
  display: flex;
  justify-content: space-between;
}
.operationTitle_left>img{
  width: 18px;
  height: 21.5px;
  display: inline-block;
  float: left;
}
.operationTitle_left>h4{
  font-size: 17px;
  font-weight: bold;
  letter-spacing: 1px;
  display: inline-block;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-left: 12px;
}
.operation>ul{
  width: 100%;
}
.operation>ul li{
  height: 109px;
  border-bottom: 1px solid #D8D8D8;
  padding: 12px 0px;
  box-sizing: border-box;
}
.operation>ul li>img{
  width: 108px;
  height: 85px;
  float: right;
  object-fit: cover;
}
.operationTitle_content{
  height: 100%;
  width: calc(100% - 135px);
  display: inline-block;
  position: relative;
}
.operationTitle_content>p{
  font-size: 16px;
  margin-block-start: 0px;
  margin-block-end: 0px;
}
.operationTitle_content>div{
  position: absolute;
  left: 0;
  bottom: 0;
  height: 16.5px;
  line-height: 16.5px
}
.operationTitle_content>div>img{
  height: 11px;
  width: 11px;
  object-fit: cover;
  /* float: left; */
  display: inline-block;
}
.operationTitle_content>div>span{
  color: #999999;
  display: inline-block;
}
</style>