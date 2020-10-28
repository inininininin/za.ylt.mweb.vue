<template>
    <div class="screening">
        <van-popup v-model="hospitalData.screeningShow" @close="hospitalData.screeningShow = false" position="right" :style="{ height: '100%',width:'78.67%','min-width':'295px','max-width':'295px'}">
            <div class="screening_content">
                <div class="screening_content_state">
                    <div class="screening_content_stateTitle">状态</div>
                    <div @click="screeningFn(0)" :class="[!screening.axiosData? 'chooseColor':'']">全部医院</div>
                    <div @click="screeningFn(1)" :class="[screening.axiosData? 'chooseColor':'']">我的医院</div>
                </div>  
                <div class="screening_content_confirmTime">
                    <div class="screening_content_confirmTimeTitle">
                        确认就诊时间
                    </div>
                    <div @click="screeningFn(2)" :class="[screening.sorts=='clinicCount'? 'chooseColor':'']">{{screening.hospitalConfirmTimeStart? screening.hospitalConfirmTimeStart:'门诊数量最多'}}</div>
                    <div @click="screeningFn(3)" :class="[screening.sorts=='patientCount'? 'chooseColor':'']">{{screening.hospitalConfirmTimeEnd? screening.hospitalConfirmTimeEnd:'病源数量最多'}}</div>
                </div>
                <div class="screening_content_pushTime">
                    <div class="screening_content_pushTimeTitle">
                        <!-- 门诊推送时间 -->
                    </div>
                    <div @click="screeningFn(4)" :class="[screening.sorts=='addTime'? 'chooseColor':'']">{{screening.pushTimeStart? screening.pushTimeStart:'创建时间最近'}}</div>
                    <div @click="screeningFn(5)" :class="[screening.sorts=='hospitalName'? 'chooseColor':'']">{{screening.pushTimeEnd? screening.pushTimeEnd:'医院名称A-Z'}}</div>
                </div>
            </div>
        </van-popup>
        <div class="button">
            <div @click="resetFn">重选</div>
            <div @click="submitFn">确定</div>
        </div>
    </div>
    
</template>
<script>
export default {
    name:'screening',
    data(){
        return{
            currentDate: '',
            screening:{
                axiosData:1,
                sorts:'',
                orders:''
            },
            screeningState:'',
        }
    },
    props:['hospitalData'],
    activated(){
        if(this.query != JSON.stringify(this.$route.query)){
            Object.assign(this.$data, this.$options.data());
            this.start()
            console.log(this.$store.state.user.loginRefreshData)
        }
    },
    methods:{
         start(){
            this.query = JSON.stringify(this.$route.query);
        },
        screeningFn(_value){
            this.screeningState = _value;
            switch(_value){
                case 0:
                    this.screening.axiosData = 0;
                    break;
                case 1:
                    this.screening.axiosData = 1;
                    break;
                case 2:
                    this.screening.sorts = 'clinicCount';
                    this.screening.orders = 'desc';
                    break;
                case 3:
                    this.screening.sorts = 'patientCount';
                    this.screening.orders = 'desc';
                    break;
                case 4:
                    this.screening.sorts = 'addTime';
                    this.screening.orders = 'desc';
                    break;
                case 5:
                    this.screening.sorts = 'hospitalName';
                    this.screening.orders = 'asc';
                    break;
            }
            
        },
        resetFn(){
            Object.assign(this.$data, this.$options.data());
            this.start();
            this.hospitalData.screeningShow = false
            this.$emit('childFn', this.screening);
        },
        submitFn(){
            this.hospitalData.screeningShow = false
            this.$emit('childFn', this.screening);
            // Object.assign(this.$data, this.$options.data());
        },  
    }
}
</script>
<style scoped>
.screening_content{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #FFFFFF;
    padding: 33px 0px 25px;
    box-sizing: border-box;
    position: relative;
}
.screening_content_state,.screening_content_confirmTime,.screening_content_pushTime{
    height: 60px;
    padding: 0px 20px;
    box-sizing: border-box;
    position: relative;
}
.screening_content_state{
    padding-bottom: 12px;
    box-sizing: content-box;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.4)
}
.screening_content_stateTitle,.screening_content_confirmTimeTitle,.screening_content_pushTimeTitle{
    font-size: 14px;
    margin-bottom: 10px;
}
.screening_content_state>div:nth-child(2),.screening_content_state>div:nth-child(3),
.screening_content_confirmTime>div:nth-child(2),.screening_content_confirmTime>div:nth-child(3),
.screening_content_pushTime>div:nth-child(2),.screening_content_pushTime>div:nth-child(3){
    width: 115px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #EEEEEE;
    border-radius: 15px;
    font-size: 13px;
    display: inline-block;
    cursor: pointer;
    color: #999999;
}
.screening_content_state>div:nth-child(3),
.screening_content_confirmTime>div:nth-child(3),
.screening_content_pushTime>div:nth-child(3){
    margin-left: 20px;
}

.screening_content_confirmTime{
    margin-top: 12px;
    margin-bottom: 25px;
}
.screening_content_pushTime{
    margin-bottom: 25px;
}
.button{
    width: 160px;
    height: 30px;
    line-height: 30px;
    font-size: 0px;
    position: absolute;
    right: 20px;
    bottom: 25px;
    z-index: 8888;
}
.button>div{
    width: 50%;
    color: #FFFFFF;
    font-size: 13px;
    display: inline-block;
    text-align: center;
    cursor: pointer;
}
.button>div:first-child{
    background: #1ECAC6;
    border-radius: 50px 0px 0px 50px;
}
.button>div:last-child{
    background: #FF951B;
    border-radius: 0px 50px 50px 0px;
}
.chooseColor{
    color: #333333!important;
    background: #FFE1BE!important
}
</style>