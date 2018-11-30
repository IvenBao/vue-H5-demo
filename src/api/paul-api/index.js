import {
    axios
} from 'base/request'
/**
 * 获取用户的accessToken,如果未登陆返回null
 */
export const getAccessToken = () => {
    let accessToken = window.localStorage.getItem('access_token')
    if (accessToken) {
        try {
            return JSON.parse(accessToken)
        } catch (error) {
            window.localStorage.removeItem('access_token')
        }
    } else {
        return null
    }
}

export const setAccessToken = (accessToken) => {
    window.localStorage.setItem('access_token', JSON.stringify(accessToken))
}

export const getAccessTokenByWxCode = (code) => {
    return axios.request({
        url: '/api/auth/wx/wx_code?code=' + code,
        method: 'get'
    }).then(res => {
        if (!res.errno) {
            const accessToken = res.data
            window.localStorage.setItem('token', res.data.userAccessToken.token)
            setAccessToken(accessToken)
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
