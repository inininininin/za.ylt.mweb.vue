<template>
    <div class="operating">
        <topNavBottomBorder>
            <img draggable="false" slot="returnImg" src="../../../assets/shape@3x.png" alt=""  @click="$common.backFn" id="navback">
			<h1 slot="title">运营手册</h1>
            <img draggable="false" slot="rightNav" src="../../../assets/jilu@2x.png" alt="">
        </topNavBottomBorder>
    </div>
</template>
<script>
export default {
    name:'operating',
    data(){
        return{

        }
    },
    activited(){

    },
}
</script>
<style scoped>
.operating{

}
</style>