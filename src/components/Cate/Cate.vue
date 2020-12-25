<template>
	<div class="Cate" v-if="goods">
			<nut-row>
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
		}
	}
</script>
<style scoped>
	.Cate {
		width:100%;
		height: 1920px;
		background-size: 100%;
		background-image:url('https://img11.360buyimg.com/cms/jfs/t1/137727/15/19975/386801/5fe402d7E532e151e/8e6ece2fe3d09090.jpg');
	}
	.nut-row {
		padding-top:150px;
	}
	.ROG-logo {
		margin-top: 100px;
	}
</style>