import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vantComponents from './utils/vantComponents';
// css
import './main.less';


// 引入组件
Vue.use(vantComponents);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
