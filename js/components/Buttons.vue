 <template>
	 <footer class="card-footer">
    	<a  class="card-footer-item" @click = "$emit('add-like')">Like 👍</a>
   		<a  class="card-footer-item" @click = "$emit('remove-like')" >Unlike 👎</a>
    	<a  class="card-footer-item" :disabled="score < 1" @click ="$emit('add-sun')"   >Suprise 💩</a>
  	</footer>

</template>

<script>
export default {
	props: [
		'score' , 'show-sun'
	],
	data(){
		return{

		}
	},

}

</script>

<style lang="scss">
 .card-footer-item {
 	border: 2px solid #ccc;
 }

</style>