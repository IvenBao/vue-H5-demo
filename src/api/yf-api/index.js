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
