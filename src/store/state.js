import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const state={
	
	singer:{}
}

const mutations={

	SET_SINGER(state,singer){
		state.singer=singer
	}
	
}

const actions={
	
}

const getters={
	singer(){
		return state.singer
	}
}

const debug=process.env.NODE_ENV !=='production'

export default new Vuex.Store({
		state,
		mutations,
		actions,
		getters,
		strict:debug,
		plugins:debug?[createLogger()]:[]
})