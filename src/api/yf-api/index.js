import request from 'base/global/request'
export const xx = (data) => {
  return request.request({
    url: '/api-member/saas/member/login',
    method: 'post',
    data: {
      ...data
    }
  })
}
