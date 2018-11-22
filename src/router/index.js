import Vue from 'vue'
import Router from 'vue-router'
import yf from './yf-router'
import dh from './dh-router'

Vue.use(Router)
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        ...yf, {
            path: '*',
            redirect: '/test',
            meta: {
                title: ''
            }
        },
        ...dh
    ],
    scrollBehavior(to, from, savedPosition) {
        // return {
        //     y: 0
        // }
    }
})
router.beforeEach((to, from, next) => {
    console.log('router.beforeEach')
    let {
        meta: {
            title = '微谷商城'
        } = {}
    } = to
    document.title = title || '微谷商城'
    next()
})
router.afterEach((to) => {
    console.log('router.afterEach')
})
router.onReady(() => {
    console.log('router.onReady,一次生命周期只运行一次')
})

export default router
