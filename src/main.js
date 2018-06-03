// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// 导入bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// 导入自定义样式文件css
import '@/assets/css/index.css';

// 原始的写法
// import axios from 'axios';
// 让vue实例中可以直接拿到axios对象

// 插件的使用
import MyAxios from '@/piugins/myaxios.js';
// 让vue直接调用Myaxios.install方法
Vue.use(MyAxios);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
