<template>
    <!-- <div class="footerNav"> -->
        <van-tabbar  v-model="active" route style="box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5);">
            <van-tabbar-item replace :to="{path : '/clinic/index',query:{time: new Date().getTime().toString()}}">
                <span>首页</span>
                <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? nav[0].inactive : nav[0].active"
                />
            </van-tabbar-item>
            <van-tabbar-item replace :to="{path:'',query:{time: new Date().getTime().toString()}}">
                <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? nav[1].inactive : nav[1].active"
                >
                <span>医院</span>
            </van-tabbar-item>
            <!-- /hospital/hospital_gene -->
            <van-tabbar-item replace :to="{path:'',query:{time: new Date().getTime().toString()}}">
                <span>基因</span>
                <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? nav[2].inactive : nav[2].active"
                >
            </van-tabbar-item>
            <van-tabbar-item replace :to="{path:'',query:{time: new Date().getTime().toString()}}">
                <span>我的</span>
                <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? nav[3].inactive : nav[3].active"
                >
            </van-tabbar-item>
        </van-tabbar>
    <!-- </div>   -->
</template>
<script>
export default {
    name :'bottomNav',
    data(){
        return {
            active: 0,
            nav:[
                {
                    active: require('../../../assets/shouye@2x.png'),
                    inactive: require('../../../assets/shouye-blue@2x.png')
                },
                {
                    active: require('../../../assets/Hospital@2x.png'),
                    inactive: require('../../../assets/Hospital-blue@2x.png')
                },
                {
                    active: require('../../../assets/jiyin-gray@2x.png'),
                    inactive: require('../../../assets/jiyin-blue@2x.png')
                },
                {
                    active: require('../../../assets/wode@2x.png'),
                    inactive: require('../../../assets/wode-blue@2x.png')
                },
            ]
        }
    }
}
</script>
<style scoped>
</style>