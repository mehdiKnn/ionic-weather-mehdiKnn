import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import Ionic from '@ionic/vue';
import './registerServiceWorker'
import '@ionic/core/css/ionic.bundle.css';
import moment from 'moment';


Vue.use(Ionic);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$date = moment;

new Vue({
  router,
  moment,
  render: h => h(App)
}).$mount('#app');