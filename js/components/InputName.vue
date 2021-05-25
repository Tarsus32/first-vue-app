<template>

	<div class="new-input">
		<h2>Zadaj Meno a Priezvisko</h2>
		<form class="add-new" @submit.prevent="addNewName" >
			<input type="text" ref="clear" v-model="newFirst" placeholder="Napíš čo chceš">
		</form>
		<p class="preview">
			{{newFirst }}
		</p>
	</div>

</template>

<script>


export default {
	props: [

	],
	data(){
		return{
			newFirst: '',

		}
	},
	methods:{
		addNewName(){
			if(!this.newFirst )return
			this.$emit('add-first', this.newFirst )
			this.$refs.clear.value = ' '
			this.$refs.clear.focus()
			this.newFirst = ''
		}
	}
}

</script>

<style lang="scss" scoped>
h2 {
	text-align: center;
	font-weight: 500;

}

.new-input{
	padding: 1em 0 ;
}

.preview {
  font-size: 20px;
  text-align: center;
}

</style>
