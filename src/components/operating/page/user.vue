<template>
    <div class="user">
        <userModel>
            <img slot="setUp" draggable="false" src="../../../assets/set_up@2x.png" alt="">
            <img slot="navLeft" draggable="false" src="../../../assets/logo.png" alt="">
            <span slot="navLeft">已认证</span>
            <h3 slot="navCenter" class="line-1">{{$store.state.user.loginRefreshData? $store.state.user.loginRefreshData.hospitalName:''}}</h3>
            <p slot="navCenter" class="line-1">账号：{{$store.state.user.loginRefreshData? $store.state.user.loginRefreshData.account:''}}</p>
            <!-- <span slot="navRight">营业执照</span> -->
            <!-- <img slot="navRight" draggable="false" src="../../../assets/ChevronCopy2@2x.png" alt=""> -->
            <li slot="chooseOptions" v-for="(item,inx) in chooseOptions" :key="inx" @click="optionsFn(item.name)">
                <div class="chooseOptions_left">
                    <h4>{{item.name}}</h4>
                </div>
                <div class="chooseOptions_right">
                    <img src="../../../assets/ChevronCopy2@2x.png" alt="">
                </div>
            </li>
        </userModel>
        <bottomNav></bottomNav>
    </div>
</template>
<script>
import bottomNav from '../functionPage/bottomNav'
import userModel from '../../moduleComponents/userModel'
export default {
    name:'user',
    data(){
        return{
            chooseOptions:[
                {
                    name:'账号与安全',
                    methods:''
                },
                {
                    name:'退出登录',
                    methods:'exitFn'
                }
            ],
            hospital:{},
            query:''
        }
    },
    components:{
        bottomNav,
        userModel
    },
    activated(){
        if(this.query != JSON.stringify(this.$route.query)){
            Object.assign(this.$data, this.$options.data());
            this.start()
        }
    },
    methods:{
        start(){
            this.query = JSON.stringify(this.$route.query);
            this.$common.loginRefreshFn(true,()=>{
            },()=>{
                return
            })
        },
        optionsFn(_name){
            switch(_name){
                case '账号与安全':
                    this.$toast('正在开发中')
                    break;
                case '退出登录':
                    this.$dialog.confirm({
                        message: '是否确定退出经理端',
                    })
                    .then( ()=>{
                        this.$common.loginOutFn()
                    })
                    break;
                }
        },
    }
}
</script>
<style scoped>
.user{
    height: 100%;
    width: 100%;
    background: #f5f5f5;
}
</style>