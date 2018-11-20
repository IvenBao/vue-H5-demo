export default [
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/test'),
    meta: {
      title: 'demo项目',
      shareInfo: {
      }
    }
  }
]
