import {
    axios
} from 'base/request'
import router from '@/router'
export const xx = (data) => {
    return axios.request({
        url: '/api-member/saas/member/login',
        method: 'post',
        data: {
            ...data
        }
    })
}
// 获取微信配置 getWXconfig todo 联调
export const getWXconfig = (data) => {
    return axios.request({
        url: 'getWXconfig',
        method: 'post',
        data: {
            ...data
        }
    })
}
// web端登录接口
export const weblogin = (data) => {
    return new Promise((resolve, reject) => {
        axios.request({
            url: `/api/auth/phone_code?phone=${data.phone}&code=${data.code}`,
            method: 'post'
        }).then(res => {
            if (!res.errno) {
                window.localStorage.setItem('token', res.data.userAccessToken.token)
                router.push({
                    path: window.sessionStorage.getItem('backVueRouter') || '/home'
                })
            }
            resolve(res)
        }, rej => {
            reject(rej)
        })
    })
}

// 绑定手机号接口
export const bindMobile = (data) => {
    return axios.request({
        url: 'bindMobile',
        method: 'post',
        data: {
            ...data
        }
    })
}

// 购买下单接口
export const buy = (data) => {
    return axios.request({
        url: '/api/user/order/pay',
        method: 'post',
        data: {
            ...data
        }
    })
}
// 获取海报背景图
export const getPosterInfo = (data) => {
    return axios.request({
        url: `/api/user/shareImg/getShareImg?goodsId=${data.goodsId}`,
        method: 'post'
    })
}

// 获取报名信息
export const getActivityFormByOrderSn = (data) => {
    return axios.request({
        url: `/api/user/getActivityFormByOrderSn?orderSn=${data.orderSn}`,
        method: 'post'
    })
}
