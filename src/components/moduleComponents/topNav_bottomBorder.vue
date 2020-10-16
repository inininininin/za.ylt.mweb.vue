<template>
	<div style="height: 47px;">
		<div class="topNav_bottomBorder">
			<div class="backImg">
				<slot name="returnImg"></slot>
			</div>
			<div class="centerNav">
				<slot name="title"></slot>
			</div>
			<div>
			</div>
		</div>
		<div style="height:30px"></div>
	</div>
    
</template>
<script>
export default {
    name : 'topNav_bottomBorder',
    data () {
        return{

        }
    },
    methods:{
    }
}
</script>
<style scoped>
.topNav_bottomBorder{
	width: 100%;
	height: 47px;
	line-height: 47px;
	text-align: center;
	position: fixed;
	top:0;
	z-index: 999;
	background-color: #FFFFFF;
	border-bottom: 1px solid #efecec;
}
.zhangwei{
	width: 100%;
	height: 47px;
}
.backImg img{
	width: 9px;
	height: 15px;
	position: absolute;
	left: 16px;
	top:16px;
}
.backImg{
	width: 10%;
	height: 100%;
	/* display: inline; */
	float:left;
}
.centerNav{
	width: 80%;
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
</style>