export default [{
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/test'),
    meta: {
        title: 'demo项目'
    }
}, {
    path: '/bind-mobile',
    name: 'bindMobile',
    component: () => import('@/views/bind-mobile/index'),
    meta: {
        title: '绑定手机号'
    }
}, {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    meta: {
        title: '登录'
    }
}, {
    path: '/register-information',
    name: 'registerInformation',
    component: () => import('@/views/register-information/index'),
    meta: {
        title: '填写报名信息'
    }
}, {
    path: '/poster',
    name: 'poster',
    component: () => import('@/views/poster/index'),
    meta: {
        title: '我的海报'
    }
}]
