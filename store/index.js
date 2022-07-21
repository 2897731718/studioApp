import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		pageName: 'home',
		departmentIndex: 0,
		studioName:'764'
		
	},
	mutations: {
		// bottomTabbar
		changePageindex(state, pageName) {
			// console.log(pageName)
			state.pageName = pageName
		},
		// sideTabbar
		changeDepartmentIndex(state, index) {
			state.departmentIndex = index
			console.log(index)
		},
		changeStudioName(state,studioName) {
			state.studioName = studioName
			console.log(state.studioName)
			// console.log(index)
		}
	}
})

export default store