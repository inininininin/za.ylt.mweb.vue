<template>
    <div class="operatingCenterDetails">
        <topNavBottomBorder>
            <img draggable="false" slot="returnImg" src="../../../assets/shape@3x.png" alt=""  @click="$common.backFn" id="navback">
			<h1 slot="title">服务内容</h1>
        </topNavBottomBorder>
        <div class="content">
            
        </div>
    </div>
</template>
<script>
export default {
    name:'operatingCenterDetails',
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.operatingCenterDetails{

}

</style>