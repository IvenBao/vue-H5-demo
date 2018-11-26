import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import promise from 'es6-promise'
import MintUI, {
    Toast
    // Indicator
} from 'mint-ui'
import 'mint-ui/lib/style.css'
promise.polyfill()
Vue.use(MintUI)
console.log(process)
Vue.config.productionTip = false
Vue.component(Toast.name, Toast)
// Vue.component(Indicator.name, Indicator)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
