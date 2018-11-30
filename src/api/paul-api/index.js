import {
    axios
} from 'base/request'

export const getAccessToken = () => {
    let accessToken = window.localStorage.getItem('access_token')
    return accessToken
}

export const getAccessTokenByWxCode = (code) => {
    return axios.request({
        url: '/api/auth/wx/wx_code?code=' + code,
        method: 'get'
    }).then(res => {
        if (!res.errno) {
            window.localStorage.setItem('token', res.data.userAccessToken.token)
            window.localStorage.setItem('access_token', res.data.userAccessToken)
        }
        return res
    })
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
