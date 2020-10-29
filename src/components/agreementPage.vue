<template>
	<div class="agreementPage">
		<topNavBottomBorder>
			<img draggable="false" slot="returnImg" src="../assets/shape@3x.png" alt=""  @click="$common.backFn" id="navback">
			<h1 slot="title">用户协议与隐私政策</h1>
		</topNavBottomBorder>
		<div class="center" ref='agreementRef' >
		</div>
	</div>
</template>

<script>
export default {
	name: 'agreementPage',
	data () {
		return {

		}
	},
	computed:{

	},
	components:{

	},
	mounted () {
		this.$publicRequest.getAgreementData(res=>{
			this.$refs.agreementRef.innerHTML = res
		})
	},
	methods: {
	},
}
</script>

<style scoped>
.agreementPage{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.center{
	padding: 5px;
	height: calc(100% - 47px);
	overflow-y:scroll;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	touch-action: pan-y;
  	-webkit-overflow-scrolling: touch;
}
</style>
