<template>
	<div>
		<swiper></swiper>
		<modone></modone>
		<modtwo></modtwo>
		<modthree></modthree>
	</div>
</template>

<script>
import swiper from '../components/swiper.vue'
import modone from '../components/module-1.vue'
import modtwo from '../components/module-2.vue'
import modthree from '../components/module-3.vue'

export default {
	data: function(){
		return {
			page: 'index'
		}
	},
	mounted: function(){
		this.$http.get('/mock').then(function(data){
			console.log(data)
		},function(){
			console.log("error");
		})
	},
	components: {
		swiper,
		modone,
		modtwo,
		modthree
	}
}
</script>