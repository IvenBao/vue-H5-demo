export default [{
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/test'),
    meta: {
        title: 'demo项目',
        shareInfo: {}
    }
}, {
    path: '/bind-mobile',
    name: 'bindMobile',
    component: () => import('@/views/bind-mobile/index'),
    meta: {
        title: '绑定手机号',
        shareInfo: {}
    }
}, {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    meta: {
        title: '登录',
        shareInfo: {}
    }
}]
