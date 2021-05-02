import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// export default new
// import VueDadata from 'vue-dadata'
// Vue.use(VueDadata)
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
