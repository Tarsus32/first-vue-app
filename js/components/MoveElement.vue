
<template>
	<transition name="drop" v-on:after-enter="$emit('remove-sun')"  >
		<img src="img/sun.png" v-show="showSun" alt="moveElement"  class="sun">
	</transition>
</template>

<script>


export default {
	props: [
		 'showSun'
	],
	data(){
		return{

		}
	},
}

</script>

<style lang="scss" scoped>

	.drop-enter-active {
		transition: transform 4s;
	}
	.drop-enter{
		transform: translateY(0px);
	}
	.drop-enter-to{
		transform: translateY(1000px);
	}

</style>
