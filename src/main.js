import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import promise from 'es6-promise'
import {
    Toast
} from 'mint-ui'
import 'mint-ui/lib/style.css'
promise.polyfill()
console.log(process.env.NODE_ENV)
Vue.config.productionTip = false
Vue.component(Toast.name, Toast)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
