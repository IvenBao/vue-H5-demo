import {
    axios
} from 'base/request'

export const getAccessToken = () => {
    let accessToken = window.localStorage.getItem('access_token')
    return accessToken
}

export const refreshToken = () => {
    return axios.request({
        url: 'getWXconfig',
        method: 'post',
        data: {
            'ab': 'cd'
        }
    })
}
