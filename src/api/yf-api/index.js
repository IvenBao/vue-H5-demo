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
// 微信登录
export const getAccessTokenByWxCode = (code) => {
    return axios.request({
        url: '/api/auth/wx/wx_code',
        method: 'get',
        data: {
            code
        }
    }).then(res => {
        if (!res.errno) {
            window.localStorage.setItem('token', res.data.userAccessToken.token)
            window.localStorage.setItem('access_token', res.data.userAccessToken)
            router.push({
                path: window.sessionStorage.getItem('backVueRouter') || '/home'
            })
        }
        return res
    }, rej => {
        return rej
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
                window.localStorage.setItem('access_token', res.data.userAccessToken)
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
        url: '/api/user/my/bindCellphone',
        method: 'get',
        data: {
            cellphone: data.phone,
            code: data.code
        }
    })
}

// 购买下单接口
export const buy = (data) => {
    return axios.request({
        url: '/api/user/order/pay',
        method: 'get',
        data: {
            ...data
        }
    })
}

// 获取海报背景图
export const getPosterInfo = (data) => {
    return axios.request({
        url: `/api/user/shareImg/getShareImg`,
        method: 'get',
        data: {
            ...data
        }
    })
}

// 获取报名信息
export const getActivityFormByOrderSn = (data) => {
    return axios.request({
        url: `/api/user/getActivityFormByOrderSn?orderSn=${data.orderSn}`,
        method: 'post'
    })
}

// 发送手机验证码
export const sendCode = (data) => {
    return axios.request({
        url: `/api/auth/send_code`,
        method: 'post',
        data: {
            ...data
        }
    })
}
