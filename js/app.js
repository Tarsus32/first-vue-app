

window._= require('lodash');
window._= require('animate.css');

import Pictures from "./components/Pictures.vue"
import TextMarvel from "./components/TextMarvel.vue"
import Buttons from "./components/Buttons.vue"
import InputName from "./components/InputName.vue"
import MoveElement from "./components/MoveElement.vue"

const app = new Vue ({
	el:'#app',
	components: {
		Pictures,
		TextMarvel,
		Buttons,
		InputName,
		MoveElement
	},

	data:{

		score: 11,
		showSun: false,
		people: [   ],
		firstName:' '

		}

})