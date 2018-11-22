export default [{
        path: '/mine',
        name: 'mine',
        meta: {
            keepAlive: true,
            title: '我的',
            shareInfo: {
                title: '',
                desc: ''
            }
        },
        component: () =>
            import('@/views/mine/index.vue')
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            keepAlive: true,
            title: '主页',
            shareInfo: {
                title: '',
                desc: ''
            }
        },
        component: () =>
            import('@/views/home/home.vue')
    },
    {
        path: '/dredge',
        name: 'dredge',
        meta: {
            keepAlive: true,
            title: '渠道革命',
            shareInfo: {
                title: '',
                desc: ''
            }
        },
        component: () =>
            import('@/views/dredge/index.vue')
    },
    {
        path: '/online-detail',
        name: 'online-detail',
        meta: {
            keepAlive: true,
            title: '线上课程',
            shareInfo: {
                title: '',
                desc: ''
            }
        },
        component: () =>
            import('@/views/online-detail/index.vue')
    },
    {
        path: '/offline-detail',
        name: 'offline-detail',
        meta: {
            keepAlive: true,
            title: '线下课程',
            shareInfo: {
                title: '',
                desc: ''
            }
        },
        component: () =>
            import('@/views/offline-detail/index.vue')
    },
    {
        path: '/order-result',
        name: 'order-result',
        meta: {
            keepAlive: true,
            title: '订单详情',
            shareInfo: {
                title: '',
                desc: ''
            }
        },
        component: () =>
            import('@/views/order/order-result.vue')
    },
    {
        path: '/order-list',
        name: 'order-list',
        meta: {
            keepAlive: true,
            title: '订单列表',
            shareInfo: {
                title: '',
                desc: ''
            }
        },
        component: () =>
            import('@/views/order/order-list.vue')
    }
]
