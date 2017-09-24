import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './app.vue';
import routerConfig from './router';

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter(routerConfig);

require('./mock/mock.js');

new Vue({
	el: "#app",
	router: router,
	render: h => h(App)
})