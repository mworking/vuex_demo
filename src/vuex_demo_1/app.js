// 根组件
import Vue from 'vue';
import Vuex from 'vuex';
import store from './store.js';
import Counter from './counter.js';

Vue.use(Vuex);

const app = new Vue({
    el: '#app',
    store,
    components: {
        Counter
    },
    template: `<div class="app"><Counter></Counter></div>`
})