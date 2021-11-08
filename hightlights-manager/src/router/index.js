import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

// import Hightlightheader from '../components/Hightlightheader.vue';

// import Index from '../components/Index.vue';

// import Login from '../components/Login.vue';
// import zhuce from '../components/Login/zhuce.vue';
// import forgetpass from '../components/Login/forgetpass.vue';


// import Myhightlight from '../components/Myhightlight.vue';

// import Uploadhightlight from '../components/Uploadhightlight.vue';

// import Allhightlights from '../components/Allhightlights.vue';

// import Watchhightlight from '../components/Watchhightlight.vue';


// import Userinfo from '../components/Userinfo.vue';

Vue.use(VueRouter)

const routes = [
	{
		path: '/Hightlightcheck',
		name: 'Hightlightcheck',
		component: () =>
			import("../components/Hightlightcheck.vue"),
	},
	{
		path: '/login',
		name: 'Login',
		component: () =>
			import("../components/Login.vue"),
		meta: {
			name: "管理员登录",
		},
	},
	{
		path: '/',
		name: 'Videolist',
		component: () =>
			import("../components/Videolist.vue"),
		meta: {
			name: "游戏集锦后台管理",
		},
	},
	{
		path: '/userlist',
		name: 'Userlist',
		component: () =>
			import("../components/Userlist.vue"),
		meta: {
			name: "用户列表",
		},
	},
	{
		path: '/commentlist',
		name: 'Commentlist',
		component: () =>
			import("../components/Commentlist.vue"),
		meta: {
			name: "评论列表",
		},
	},
	{
		path: '/checkhightlight',
		name: 'Checkhightlight',
		component: () =>
			import("../components/Checkhightlight.vue"),
		meta: {
			name: "审核集锦",
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
]
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