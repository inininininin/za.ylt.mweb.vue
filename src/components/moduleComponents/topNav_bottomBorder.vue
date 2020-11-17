<template>
	<div style="height: 47px;">
		<div class="topNav_bottomBorder">
			<div class="backImg">
				<slot name="returnImg"></slot>
			</div>
			<div class="centerNav">
				<slot name="title"></slot>
			</div>
			<div class="rightNav"> 
				<slot name="rightNav"></slot>
			</div>
		</div>
		<div style="height:47px;"></div>
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
	box-shadow: rgba(217, 211, 211, 0.5) 0px 1px 2px 0px;
	display: flex;
	justify-content:space-between
}
.zhangwei{
	width: 100%;
	height: 47px;
}
.backImg img{
	width: 9px;
	height: 15px;
	object-fit: cover;
	vertical-align: middle;
	/* position: absolute; */
	/* left: 16px; */
	/* top:16px; */
}
.backImg{
	width: 10%;
	height: 100%;
	/* display: inline; */
	/* float:left; */
	line-height: 47px;
	/* vertical-align: middle */
}
.centerNav{
	width: 80%;
	height: 100%;
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
	width: 10%;
	height: 100%;
}
.rightNav>img{
	width: 20px;
	height: 19px;
	object-fit: cover;
	vertical-align: middle;
}
</style>