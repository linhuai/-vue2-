import index from './views/index.vue'

export default {
	routes: [
		{
			path: '/',
			redirect: '/index'
		},
		{
			path: '/index',
			component: index
		}
	]
}