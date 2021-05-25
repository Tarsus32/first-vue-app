<template>

	 <div class="card-image">
    	<figure class="image">
			<img v-if="score >= 15" src="img/one.jpg" alt="capitanAmerica" class=" animate__animated animate__backInDown">
				<img v-else-if="score < 15 && score >= 6" src="img/two.jpg" alt="ironMan">
				<img v-else-if="score < 6 && score > 1" src="img/four.jpg" alt="ultron" class=" animate__animated animate__fadeInLeft">
				<img v-else src="img/three.jpg" alt="thanos" class=" animate__animated animate__heartBeat">
    	</figure>
  	</div>

</template>

<script>


export default {
	props: [
		'score'
	],
	data(){
		return{

		}
	},

}

</script>

<style lang="scss">
 .card-image {
 	border: 2px solid #ccc;
 }

</style>
