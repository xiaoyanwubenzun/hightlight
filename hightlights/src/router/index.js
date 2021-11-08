import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/hightlightheader',
		name: 'Hightlightheader',
		component: () =>
			import("../components/Hightlightheader.vue"),
	},
	{
		path: '/login',
		name: 'Login',
		component: () =>
			import("../components/Login.vue"),
		meta: {
			name: "登录集锦系统",
		},
	},
	{
		path: '/zhuce',
		name: 'zhuce',
		component: () =>
			import("../components/Login/zhuce.vue"),
		meta: {
			name: "用户注册",
		},
	},
	{
		path: '/forgetpass',
		name: 'forgetpass',
		component: () =>
			import("../components/Login/forgetpass.vue"),
		meta: {
			name: "忘记密码",
		},
	},

	{
		path: '/',
		name: 'Index',
		component: () =>
			import("../components/Index.vue"),
		meta: {
			name: "焱午的游戏集锦网站",
		},
	},
	{
		path: '/myhightlight',
		name: 'Myhightlight',
		component: () =>
			import("../components/Myhightlight.vue"),
		meta: {
			name: "我的集锦",
		},
	},
	{
		path: '/uploadhightlight',
		name: 'Uploadhightlight',
		component: () =>
			import("../components/Uploadhightlight.vue"),
		meta: {
			name: "上传新的集锦",
		},
	},
	{
		path: '/allhightlights',
		name: 'Allhightlights',
		component: () =>
			import("../components/Allhightlights.vue"),
		meta: {
			name: "大神们的集锦",
		},
	},
	{
		path: '/watchhightlight',
		name: 'Watchhightlight',
		component: () =>
			import("../components/Watchhightlight.vue"),
		meta: {
			name: "观看集锦",
		},
		beforeEnter(to, from, next) {
			if (!to.query.vid) {
				alert("别乱来");
				router.push("/");
			} else {
				next();
			}
		}
	},
	{
		path: '/userinfo',
		name: 'Userinfo',
		component: () =>
			import("../components/Userinfo.vue"),
		meta: {
			name: "个人信息",
		},
	},
]
// router.beforeEach((to, from, next) => {
//     // window.document.title = this.$route.meta.name;
//     // console.log(window);
//     // next();
// })

// router.beforeRouteEnter(to, from, next) {
//     window.document.title = this.$route.meta.name;
//     next();
// }

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	window.document.title = to.meta.name;
	// console.log(to.meta.name);
	// console.log(to);
	next();
})
export default router