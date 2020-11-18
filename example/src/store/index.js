import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        mergeData: {}
    },
    mutations: {
        setMergeData(state, data) {
            state.mergeData = data;
        }
    },
    actions: {
    },
    modules: {
    }
})
