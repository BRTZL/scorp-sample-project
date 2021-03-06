import Vue from "vue";
import VueMeta from 'vue-meta';
import App from "./App.vue";
import i18n from './i18n';
import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
