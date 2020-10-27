<template>
    <div class="screening">
        <van-popup v-model="conditionsData.screeningShow" position="right" :style="{ height: '100%',width:'78.67%','min-width':'295px','max-width':'295px'}">
            <div class="screening_content">
                <div class="screening_content_state">
                    <div class="screening_content_stateTitle">状态</div>
                    <div @click="screeningFn(0)" :class="[screening.status==1? 'chooseColor':'']">未就诊</div>
                    <div @click="screeningFn(1)" :class="[screening.status==4? 'chooseColor':'']">已就诊</div>
                </div>
                <div class="screening_content_confirmTime">
                    <div class="screening_content_confirmTimeTitle">
                        确认就诊时间
                    </div>
                    <div @click="screeningFn(2)" :class="[screening.hospitalConfirmTimeStart? 'chooseColor':'']">{{screening.hospitalConfirmTimeStart? screening.hospitalConfirmTimeStart:'开始时间'}}</div>
                    <div @click="screeningFn(3)" :class="[screening.hospitalConfirmTimeEnd? 'chooseColor':'']">{{screening.hospitalConfirmTimeEnd? screening.hospitalConfirmTimeEnd:'结束时间'}}</div>
                </div>
                <div class="screening_content_pushTime">
                    <div class="screening_content_pushTimeTitle">
                        门诊推送时间
                    </div>
                    <div @click="screeningFn(4)" :class="[screening.pushTimeStart? 'chooseColor':'']">{{screening.pushTimeStart? screening.pushTimeStart:'开始时间'}}</div>
                    <div @click="screeningFn(5)" :class="[screening.pushTimeEnd? 'chooseColor':'']">{{screening.pushTimeEnd? screening.pushTimeEnd:'结束时间'}}</div>
                </div>
            </div>
        </van-popup>
        <div class="button">
            <div @click="resetFn">重选</div>
            <div @click="submitFn">确定</div>
        </div>
        <van-popup v-model="chooseTimeShow" @close="cancelTimeFn" class="chooseTime" position="bottom" style="height:40%;width:100%;">
            <van-datetime-picker
                type="date"
                v-model="currentDate"
                title="选择年月日"
                @confirm="confirmTimeFn"
                @cancel="cancelTimeFn"
                style="z-index:9999"
                />
        </van-popup>
    </div>
    
</template>
<script>
export default {
    name:'screening',
    data(){
        return{
            currentDate: '',
            screening:{
                show:false,
                status:'',
                pushTimeStart:'',
                pushTimeEnd:'',
                hospitalConfirmTimeStart:'',
                hospitalConfirmTimeEnd:'',
            },
            screeningState:'',
            chooseTimeShow:false,
        }
    },
    props:['conditionsData'],
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
                    this.screening.status = 1;
                    break;
                case 1:
                    this.screening.status = 4;
                    break;
                case 2: case 3: case 4: case 5:
                    this.chooseTimeShow = true;
                    this.currentDate = ''   
                    break;
            }
            
        },
        resetFn(){
            debugger
            Object.assign(this.$data, this.$options.data());
            this.start();
            this.conditionsData.screeningShow = false
            this.$emit('childFn', this.screening);
        },
        submitFn(){
            debugger
            this.conditionsData.screeningShow = false
            this.$emit('childFn', this.screening);
            Object.assign(this.$data, this.$options.data());
        },
        confirmTimeFn(_value){
            debugger
            this.chooseTimeShow = false;
            let _time = '';
            if(_value)
                _time = this.$moment(_value).format('YYYY/MM/DD')
            console.log(_value)
            switch(this.screeningState){
                case 2:
                    this.screening.hospitalConfirmTimeStart = _time;
                    break;
                case 3:
                    this.screening.hospitalConfirmTimeEnd = _time;
                    break;
                case 4:
                    this.screening.pushTimeStart = _time
                    break;
                case 5:
                    this.screening.pushTimeEnd = _time
                    break;
            }
        },  
        cancelTimeFn(){ 
            this.chooseTimeShow = false
        }
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
.screening_content_confirmTime>div:nth-child(3)::before,
.screening_content_pushTime>div:nth-child(3)::before{
    content: "";
    position: absolute;
    /* bottom: 0; */
    top: 44px;
    left: 138px;
    width: 16px;
    height: 1px;
    border-radius: 6px;
    background: #999999;
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
.chooseTime{
    z-index: 9999!important;
}
.chooseColor{
    color: #333333!important;
    background: #FFE1BE!important
}
</style>