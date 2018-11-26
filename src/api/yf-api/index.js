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
