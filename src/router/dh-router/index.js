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
}
]
