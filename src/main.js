import Vue from 'vue';
import App from './App.vue';
import DesignSystem from '@nosto/design-system';
import '@nosto/design-system/dist/system/fonts.min.css';
import '@nosto/design-system/dist/system/system.min.css';

Vue.config.productionTip = false;
Vue.use(DesignSystem);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
