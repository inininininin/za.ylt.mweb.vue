<template>
    <div class="transition">
        <transition :name="$store.state.common.transitionName">
            <slot name="title"></slot>
        </transition>
    </div>
</template>
<script>
export default {
    name:'transitions'
}
</script>
<style>
.transition{
    height: 100%;
    width: 100%;
}
.routreView{
    /* position: absolute; */
    /* width:  100%!important; */
    transition: all 0.4s ease;
}
.slide-left-enter,.slide-right-leave-active{
    opacity :0;
    -webkit-transform:  translate(-100%,0);
    transform:  translate(-100%,0);
}     
.slide-left-leave-active,.slide-right-enter{
    opacity: 0;
    background: red;
    -webkit-transform:  translate(100%,0);
    transform:  translate(100%,0);
}
</style>