<template>
	<div class="contain" v-if="goods_info[$route.params.id]">
		<nut-drag @click.native="goBack">
		  	<div class="touch-dom"><img src="//img11.360buyimg.com/cms/jfs/t1/165243/22/14390/1711/605048faE37859777/eb03580a3eb8a792.png" alt=""></div>
		</nut-drag>
		<nut-swiper :paginationVisible="true" direction="horizontal" :autoPlay="5000">
			<div  v-for="(item,index) in goods_info[$route.params.id].goods" :key="index"  class="nut-swiper-slide">
		        <img :src="item.img" alt="">
		    </div>
		</nut-swiper>
		<!-- <nut-tab position-nav="left" :is-scroll="true">
		    <nut-tab-panel v-for="(item,index) in goods_info[$route.params.id].goods" :tab-title="item.name" :key="index">
		    	<img :src="item.img" alt="">
			</nut-tab-panel>
		</nut-tab> -->
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
	.contain .top-banner {
		width: 1080px;
		height: 345px;
	}
	.nut-tab {
		padding: 0;
		border: none;

	}
	.nut-drag {
		left: 18px;
		top: 612px;
	}
	.nut-drag .touch-dom {
		color: #fff;
	}
	.nut-navbar {
	    height: 50px;
	    line-height: 50px;
	    top: 0;
	    width: 100%;
	    background: #eee;
	}
	.nut-tab-title-leftnav {
		width: 279px;
	}
	.nut-navbar .fanhui {
		vertical-align: middle;
		font-size: 18px;
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
	.nut-swiper {
		height: 1920px;
	}
	.nut-swiper .nut-swiper-pagination .swiper-pagination-bullet {
		width: 16px;
		height: 16px;
	}
</style>