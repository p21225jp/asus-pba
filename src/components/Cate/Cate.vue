<template>
	<div class="Cate" v-if="goods">
	        <nut-drag @click.native="goBack">
			  	<div class="touch-dom"><img src="//img11.360buyimg.com/cms/jfs/t1/165243/22/14390/1711/605048faE37859777/eb03580a3eb8a792.png" alt=""></div>
			</nut-drag>
			<nut-row>
				<div class="gundam gundam-zagu"><img src="./zagu.png" alt=""></div>
				<div class="gundam gundam-rx78"><img src="./rx78-2.png" alt=""></div>
				<router-link :to="'/goods/'+index" v-for="(item,index) in goods" :key = "index">
				    <nut-col :span="24">
				    	<img :src="item.imgurl" alt="">
				    </nut-col>
				</router-link>
				<nut-col :span="24" class="ROG-logo">
					<img src="https://img13.360buyimg.com/cms/jfs/t1/144822/23/20000/11311/5fe42e92E7166462e/f7f34cbbfc1f42c5.png" alt="">
				</nut-col>
			</nut-row>
		</div>
		
	</div>
</template>
<script>
	const ERR_OK = 0
	export default {
		data() {
			return {
				goods:[]
			}
		},
		created() {
			this.$http.get('api/goods').then((response) => {
				response = response.data
				if (response.errno === ERR_OK) {
					this.goods = response.data
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
<style scoped>
	.gundam {
		position: absolute;
	}
	.gundam-zagu {
		left: 10%;
    	top: 230px;
	}
	.gundam-rx78 {
		right: 7%;
    	top: 125px;
	}
	.nut-drag {
		left: 18px;
		top: 612px;
	}
	.Cate {
		width:100%;
		height: 1920px;
		background-size: 100%;
		background-image:url('./bg.jpg');
		position: relative;
	}
	.nut-row {
		padding-top:150px;
	}
	.ROG-logo {
		margin-top: 100px;
	}
</style>