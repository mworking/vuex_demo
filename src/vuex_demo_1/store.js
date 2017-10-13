import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
   state: {
       count:0
   },
    mutations:{
        increment(state){
            state.count++
        }
    }
});

//使用store.commit方法触发mutations改变state:
store.commit('increment');

console.log(store.state.count)  // 1

export default new Vuex.Store({
    store
})