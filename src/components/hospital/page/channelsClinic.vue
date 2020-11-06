<template>
    <div class="channelsClinic">
        <topNavSearchReturn>
            <img slot="searchleft" draggable="false" src="../../../assets/shape@3x.png" alt="">
            <img slot="searchRight" draggable="false" src="../../../assets/sousuo@2x.png" alt="">
            <input slot="searchRight" type="text" placeholder="搜索门诊">
            <h3 slot="index_title_left">合作医院</h3>
            <span slot="index_title_left"> {{hospitalSum}}</span>
            <span slot="index_title_right">新增医院</span>
            <img slot="index_title_right" draggable="false" src="../../../assets/right@2x.png" alt="">
        </topNavSearchReturn>
    </div>
</template>
<script>
export default {
    name:'channelsClinic',
    data(){
        return{
            hospitalSum:0,
        }
    }
}
</script>
<style scoped>
.channelsClinic{
    
}

</style>