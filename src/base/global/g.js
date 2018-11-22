import wx from 'weixin-js-sdk'
import {
    isWX,
    urlParameData
} from './tools.js'
import {
    Toast
} from 'mint-ui'
import router from '@/router'
const appId = '123456'

/**
 * 登录方法
 * callbackUrl 登录成功后需要会跳的业务逻辑，默认从哪里来回哪里去
 */
export const login = (callbackUrl) => {
    let redirecturl = callbackUrl || window.location.href
    let query = urlParameData(redirecturl)
    if (query.code) {
        delete query.code
    }
    // eslint-disable-next-line
    function* objectEntries() {
        let propKeys = Object.keys(this)
        for (let propKey of propKeys) {
            yield [propKey, this[propKey]]
        }
    }
    query[Symbol.iterator] = objectEntries
    let backUrl = window.location.origin + window.location.pathname + '?'
    for (let [k, v] of query) {
        backUrl += `${k}=${v}&`
    }
    backUrl = backUrl.slice(0, -1)
    window.sessionStorage.setItem('backUrl', backUrl)
    if (isWX) {
        // 微信中登录
        window.location.href = window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appId + '&redirect_uri=' + backUrl + '&response_type=code&scope=snsapi_base&state=test#wechat_redirect'
    } else {
        // web中登录
        router.push({
            name: 'login'
        })
    }
}
/**
 * 微信授权
 */
export const wxAuthorize = (url) => {
    let uri = url || window.location.href
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${uri}&response_type=code&scope=snsapi_userinfo&state=login#wechat_redirect`
}
/**
 * 唤起微信h5支付
 */
export const openwechatpay = (config, callback) => {
    function jsApiCall() {
        // eslint-disable-next-line
        WeixinJSBridge.invoke(
            'getBrandWCPayRequest',
            config,
            function(res) {
                console.log(res)
                Object.assign(res.data || {})
                if (res.err_msg === 'get_brand_wcpay_request:ok') {
                    // 支付成功
                    tips({
                        message: '取消支付'
                    }).then(() => {
                        callback && callback()
                    })
                } else if (res.err_msg === 'get_brand_wcpay_request:cancel') {
                    tips({
                        message: '取消支付'
                    })
                } else {
                    // 支付失败
                    tips({
                        message: '支付失败'
                    })
                }
            }
        )
    }
    if (typeof WeixinJSBridge === 'undefined') {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', jsApiCall, false)
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', jsApiCall)
            document.attachEvent('onWeixinJSBridgeReady', jsApiCall)
        }
    } else {
        jsApiCall()
    }
}
/**
 * share
 * 微信分享功能
 */
export const share = (data) => {
    // 分享时判断是否是在微信环境
    if (isWX) {} else {
        tips({
            message: '微信分享只支持在微信中使用'
        })
    }
}
/**
 * toast-g
 * 全局提示方法
 * 方法提供给全局组件使用，不适合在业务逻辑频繁使用，会降低用户体验，
 * 使用时请务必回调结束后再执行之后的逻辑
 * use:
 * tip({...}).then(...)
 */
export const tips = (data) => {
    return new Promise((resolve, reject) => {
        Toast({
            message: '请传入提示内容',
            position: 'middle',
            duration: 2000,
            ...data
        })
        setTimeout(resolve, data.duration || 2000)
    })
}
