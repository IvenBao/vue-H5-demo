export default [
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/test'),
    meta: {
      title: '项目测试',
      shareInfo: {
      }
    }
  }
]
