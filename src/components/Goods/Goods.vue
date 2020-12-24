<template>
	<div class="contain">
		<nut-navbar @on-click-back="goBack" :rightShow="false"><a class="fanhui" slot="left" @click="goBack">返回</a>{{goods_info[$route.params.id].title}}</nut-navbar>
		<nut-tab>
		    <nut-tab-panel v-for="(item,index) in goods_info[$route.params.id].goods" :tab-title="item.name" :key="index">
		    	<img :src="item.img" alt="">
			</nut-tab-panel>
		</nut-tab>
	</div>
</template>
<script>
	const ERR_OK = 0
	export default {
		data() {
			return {
				goods_info:[]
			}
		},
		created() {
			this.$http.get('api/goods').then((response) => {
				response = response.data
				if (response.errno === ERR_OK) {
					this.goods_info = response.data
				}
			}).catch(() =>{})
		},
		methods: {
		    goBack() {
		      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
		    }
  		}
	}
</script>
<style>
	body {
		margin: 0 auto;
	}
	.contain {
		width: 100%;
		height: 100%;
	}
	.nut-tab {
		padding: 0;
		border: 0;
	}
	.nut-navbar {
	    height: 50px;
	    line-height: 50px;
	}
	.nut-navbar .fanhui {
		vertical-align: middle;
	}
	.nut-navbar .nav-center .nav-title {
		font-size: 2em;
	}
	.nut-tab-link {
		font-size: 1.5em;
	}
	.nut-tab-item {
		height: 100%;
		padding: 0;
	}
</style>