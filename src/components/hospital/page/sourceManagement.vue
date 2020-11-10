<template>
    <div class="sourceManagement">
        <sourceManagementNav>
            <img slot="nav_top_left" draggable="false" src="../../../assets/system-backnew.png" @click="$common.backFn" alt="" style="width:9px;height:15px">
            <!-- <div slot="nav_top_left">2</div> -->
            <img slot="nav_top_center" draggable="false" src="../../../assets/sousuo@2x.png" alt="">
            <input slot="nav_top_center" type="search" placeholder="搜索病源">
            <span slot="nav_top_right" @click="conditionsData.screeningShow = true">筛选</span>
            <img slot="nav_top_right" @click="conditionsData.screeningShow = true" draggable="false" src="../../../assets/screen.png" alt="">
            <div slot="nav_type" ref="nav_type" class="nav_type">
                <div class="nav_type_add" @click="typeFn(0)">
                    <h3>全部</h3>
                </div>
                <div class="nav_type_noSee" @click="typeFn(1)">
                    <h3>未就诊</h3>
                </div>
                <div class="nav_type_yesSee" @click="typeFn(2)">
                    <h3>确认就诊</h3>
                </div>
                <div ref="xiahuaxian" class="navType_line"></div> 
            </div>
        </sourceManagementNav>
        <keep-alive>
            <screening @childFn="parentFn" :conditionsData="conditionsData" v-if="conditionsData.screeningShow"></screening>
        </keep-alive>
        <keep-alive>
            <component :is="componentName" ref="componentRef" :conditionsData="conditionsData" style="height:calc(100% - 86px);touch-action: pan-y;-webkit-overflow-scrolling: touch;overflow-y: scroll;"></component>
        </keep-alive>
    </div>
</template>
<script>
import clinicAll from '../functionPage/clinicAll'
import clinicNo from '../functionPage/clinicNo'
import clinicYes from '../functionPage/clinicYes'
import screening from '../functionPage/screening'
export default {
    name:'sourceManagement',
    data(){
        return{
            query:'',
            // 组件切换值
            componentName :'clinicAll',
            conditionsData:{
                screeningShow:false,
                kw:'',
                status:'',
                pushTimeStart:'',
                pushTimeEnd:'',
                hospitalConfirmTimeStart:'',
                hospitalConfirmTimeEnd:'',
            },
        }
    },
    components:{
        clinicAll,
        clinicNo,
        clinicYes,
        screening,
    },
    activated(){
        if(this.query != JSON.stringify(this.$route.query)){
            Object.assign(this.$data, this.$options.data());
            this.start()
        }
    },
    methods:{
        start(){
            this.$common.loginRefreshFn(true,()=>{
            this.query = JSON.stringify(this.$route.query);
            let width = this.$refs.nav_type.getBoundingClientRect().width/6
            this.$refs.xiahuaxian.style.webkitTransform = "translateX("+(width)+"px) translateX(-50%)"
            },()=>{})
        },
        typeFn(_value){
            let width = this.$refs.nav_type.getBoundingClientRect().width/6
            switch(_value){
                case 0 :
                this.componentName = 'clinicAll';
                this.$refs.xiahuaxian.style.webkitTransform = "translateX("+(width)+"px) translateX(-50%)"
                break;
                case 1 :
                this.componentName = 'clinicNo';
                this.$refs.xiahuaxian.style.webkitTransform = "translateX("+(width)*3+"px) translateX(-50%)"
                this.$nextTick(()=>{
                    // this.$refs.componentRef.start()
                })
                break;
                case 2 :
                this.componentName = 'clinicYes';
                this.$refs.xiahuaxian.style.webkitTransform = "translateX("+(width)*5+"px) translateX(-50%)"
                this.$nextTick(()=>{
                    // this.$refs.componentRef.start()
                })
                break;
            }
        },
        parentFn(_value){
            this.conditionsData.pushTimeStart =_value.pushTimeStart? this.$moment(_value.pushTimeStart).valueOf():'';
            this.conditionsData.pushTimeEnd =_value.pushTimeEnd? this.$moment(_value.pushTimeEnd).valueOf()+(1000*60*60*24-1):'';
            this.conditionsData.hospitalConfirmTimeStart =_value.hospitalConfirmTimeStart? this.$moment(_value.hospitalConfirmTimeStart).valueOf():'';
            this.conditionsData.hospitalConfirmTimeEnd =_value.hospitalConfirmTimeEnd? this.$moment(_value.hospitalConfirmTimeEnd).valueOf()+(1000*60*60*24-1):'';
            this.conditionsData.screeningShow = _value.screeningShow;
            this.$nextTick(()=>{
                this.$refs.componentRef.start()
            })
            console.log(_value)
        }
    }
}
</script>
<style scoped>
.sourceManagement{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>