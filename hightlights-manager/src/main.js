import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import element from './elementui/index.js';
// import axios from 'axios';
// import "../public/css/swiper.min.js";
// import "../src/assets/importjsandcss/swiper.js";
// import "../src/assets/importjsandcss/swiper.min.css";
// import "../src/assets/importjsandcss/swiper.css";
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'

// Vue.use(VueAwesomeSwiper)

Vue.prototype.axios = axios;
axios.defaults.baseURL = "http://localhost:8099";
axios.defaults.withCredentials = true;

Vue.use(element);

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')