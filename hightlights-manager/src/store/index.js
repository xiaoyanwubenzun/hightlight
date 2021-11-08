import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		img: [
			"http://localhost:8090/public/img/image2019-09-08ompu2.jpg",
			"http://localhost:8090/public/img/image2019-09-08ompu8.png",
			"http://localhost:8090/public/img/image2019-09-08ompu13.jpg",
			"http://localhost:8090/public/img/image2019-09-08ompu29.jpg",
			"http://localhost:8090/public/img/image2019-09-08ompu30.jpg",
			"http://localhost:8090/public/img/image2019-09-08ompu41.jpg",
			"http://localhost:8090/public/img/image2019-09-08ompu59.jpg",
			"http://localhost:8090/public/img/image2019-09-08ompu61.jpg",
			"http://localhost:8090/public/img/image2019-09-08ompu117.jpg",
			"http://localhost:8090/public/img/image2019-09-08ompu123.png",
		],
		backgroundStyle: "",
	},
	mutations: {
		suijibackgroundimg(state) {
			let imgName = state.img[Math.floor(Math.random() * 10)]; //进行计算随机
			state.backgroundStyle =
				"background-image:url('" +
				imgName +
				"');background-repeat: no-repeat;background-size: cover;background-position: center;background-position-y: 61px;";
		},
	},
	actions: {},
	modules: {}
})