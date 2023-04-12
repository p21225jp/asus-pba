<template>
	<div class="Cate" v-if="goods">
	        <nut-drag @click.native="goBack">
			  	<div class="touch-dom"><img src="//img11.360buyimg.com/cms/jfs/t1/165243/22/14390/1711/605048faE37859777/eb03580a3eb8a792.png" alt=""></div>
			</nut-drag>
			<nut-row>
				<router-link :to="'/goods/'+index" v-for="(item,index) in goods" :key = "index">
				    <nut-col :span="24">
				    	<img :src="item.imgurl" alt="">
				    </nut-col>
				</router-link>
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
		padding-top:250px;
	}
	.ROG-logo {
		margin-top: 100px;
	}
</style>