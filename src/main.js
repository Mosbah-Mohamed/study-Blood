import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// start Vuelidate

import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

// end Vuelidate

// start bootstrap

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// end bootstrap

// =================== start font awesome ===================

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);
/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

// ================ end font awesome =============================

// start carousel

// import carousel from "vue-owl-carousel";
// Vue.component("carousel", carousel);

// end carousel

// start animate.css

import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(AOS);

// end animate.css

// =================== start lazy image =========================

// =================== end lazy image ===========================

//=================  start import MultiSelect ======================

// import vSelect from "vue-select";

// import "vue-select/dist/vue-select.css";

// Vue.component("v-select", vSelect);

// import Multiselect from "vue-multiselect";

// Vue.component("multi-select", Multiselect);

// import "vue-multiselect/dist/vue-multiselect.min.css";

//  =================  end import MultiSelect ======================

// start translation

import i18n from "@/Plugins/i18n.js";

// end translation

// start axios installation

import "@/Services/axios.js";

// end axios installation

// start sweet alert vue

import VueSweetalert2 from "vue-sweetalert2";

// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);

// start sweet alert vue

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
  // start animate.css
  mounted() {
    AOS.init();
  },
  // start animate.css
}).$mount("#app");
