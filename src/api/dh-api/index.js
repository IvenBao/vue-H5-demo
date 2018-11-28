import {
    axios
} from 'base/request'

// 获取线下活动主题列表
export const getOfflineActivityThemeList = (data) => {
    return axios.request({
        url: '/api/auth/activityProduct/getActivityProductList',
        method: 'post',
        data: data

    })
}

// 获取线下活动主题详情
export const getActivityProductDetailById = (data) => {
    return axios.request({
        url: '/api/auth/activityProduct/getActivityProductDetailById',
        method: 'post',
        data: data

    })
}

// 获取线上课程列表
export const getCourseProductList = (data) => {
    return axios.request({
        url: '/api/auth/courseProduct/getCourseProductList',
        method: 'post',
        data: data

    })
}

// 获取线上课程详情
export const getCourseProductDetailById = (id) => {
    return axios.request({
        url: '/api/auth/courseProduct/getCourseProductDetailById',
        method: 'post',
        data: {
            id
        }

    })
}

// 首页－获取banner
export const getBannerList = (data) => {
    return axios.request({
        url: '/api/auth/banner/getBannerList',
        method: 'post',
        data: {
            portType: 1,
            ...data
        }
    })
}

// 获取线上课程音频列表
export const getCourseAudioList = (courseId) => {
    return axios.request({
        url: '/api/auth/courseAudio/getCourseAudioList',
        method: 'post',
        data: {
            courseId
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

// 我的 - 订单列表
export const getOrderList = (data) => {
    return axios.request({
        url: '/getOrderList',
        method: 'post',
        data: data
    })
}
