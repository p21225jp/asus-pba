<template>
	
</template>
<script>
	export default {
		data() {
			arr = []
		},
		methods: {
			getarrs() {
				return arr
			},
		    mathrandom() {
		     	Math.floor(Math.random()*arr.length) 
		    }
  		}
	}
</script>