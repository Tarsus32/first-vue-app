<template>
	<div class="card-content has-text-centered">
    		<div class="content is-size-1 has-text-weight-bold">
				<span v-if="score >= 15"  >🎉</span>
    			{{score}}
    			<span v-if="score >= 15" >🎉</span>
    		</div>
			<p  v-for = "firstName in people"
				class=" animate__animated animate__jackInTheBox">
    			{{ firstName  }}
    		</p>
			<div v-if="score >= 15" class="has-text-grey">
				<p class="animate__animated animate__zoomInRight">Suuuuupeeeer !!!! </p>
    		</div>
    		<div v-else-if="score < 15 && score >= 8" class="has-text-grey">
				<p class="animate__animated animate__tada">Daj mi ešte Like :) </p>
    		</div>
    		<div v-else-if="score < 8 && score > 0" class="has-text-grey">
				<p class="animate__animated animate__wobble" >Neodoberaj mi Like :( </p>
    		</div>
    		<div v-else class="has-text-grey">
				<p class="animate__animated  animate__hinge" >Už nemám žiadny Like :( </p>
    		</div>
    </div>
</template>

<script>


export default {
	props: [
		'score' ,'people'
	],
	data(){
		return{

		}
	},
	methods: {
		capitalize(string){
			return _.capitalize(string)
		}
	}
}

</script>

<style lang="scss">

.card-content {
 	border: 2px solid #ccc;
 }

.card-content {
	border-bottom: none;
	border-top: none;
}
.animate__tada{
	color: #badd55;
	font-weight: bold;
}

.animate__zoomInRight {
	color: #14afdddd;
}

.animate__wobble {
	color: gold;
}

.animate__hinge {
	color:red;
}

</style>

