import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store.js";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets
import "./assets/css/base.scss";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "./promission.js";
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
