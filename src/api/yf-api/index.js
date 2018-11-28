import {
    axios
} from 'base/request'
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
        url: `/api/auth/shareImg/getShareImg?goodsId=${data.goodsId}`,
        method: 'post',
        data: {
            ...data
        }
    })
}
