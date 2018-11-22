import axios from 'base/request'

// 获取线下活动主题列表
export const getOfflineActivityThemeList = (data) => {
  return axios.request({
    url: '/qudao-offlineactivity/saas/offlineActivity/getOfflineActivityThemeList',
    method: 'post',
    data: data

  })
}

// 首页－获取banner
export const getBannerList = (data) => {
  return axios.request({
    url: '/qudao-offlineactivity/saas/getBannerList',
    method: 'post',
    data: {
      portType: 1,
      ...data
    }
  })
}

// 我的 - 首页
export const getmineData = (data) => {
  return axios.request({
    url: '/qudao-member/saas/member/auth/getAllUserInfo',
    method: 'post',
    data: data
  })
}

export const browerCourse = (id) => {
  return axios.request({
    url: '/qudao-member/saas/classset/addClassSetBrowseCount',
    method: 'post',
    data: {
      classInfoId: id
    }
  }).then(res => {
    if (res.reCode === '200') {
      return res
    } else {
      res.message = res.reMsg
      throw res
    }
  })
}
