import Vue from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import "croppie/croppie.css";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
