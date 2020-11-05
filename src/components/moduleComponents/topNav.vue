<template>
	<div>
		<div class="topNavBox">
			<div class="topNav">
				<div class="leftImg">
					<slot name="leftImg"></slot>
				</div>
				<div class="centerNav">
					<slot name="title"></slot>
				</div>
				<div class="rightNav">
					<slot name="rightNav"></slot>
				</div>
			</div>
			
		</div>
		<div style="height:47px"></div>
	</div>
	
    
</template>
<script>
export default {
    name : 'topNav',
    data () {
        return{

        }
    },
    methods:{
    }
}
</script>
<style scoped>
.topNavBox{
	width: 100%;
	height: 47px;
	padding: 0px 17px;
	box-sizing: border-box;
	position: fixed;
	top:0;
	z-index: 999;
	background-color: #FFFFFF;
}
.topNav{
	width: 100%;
	height: 47px;
	line-height: 47px;
	text-align: center;
	
}
.zhangwei{
	width: 100%;
	height: 47px;
}
.leftImg img{
	width: 9px;
	height: 15px;
	object-fit: cover;
	position: absolute;
	left: 16px;
	top:16px;
}
.leftImg{
	width: 100px;
	height: 100%;
	/* display: inline; */
	float:left;
}
.centerNav{
	width: calc(100% - 200px);
	height: 100%;
	float:left;
}
.centerNav h1{
	font-size: 18px;
	letter-spacing: 1px;
	font-weight: bold;
    display: inline-block;
    margin-block-start: 0rem !important;
	margin-block-end: 0rem !important;
}
.rightNav{
	width: 100px;
	height: 100%;
	float:left;
}
.rightNav span{
	font-size: 15px;
}
>>>.van-dropdown-menu__bar{
	box-shadow:none!important;
	height: 48px!important;
}
>>>.van-dropdown-menu__item{
	justify-content: flex-end!important
}
</style>