import wx from 'weixin-js-sdk'
import {
    isWX,
    urlParameData
} from './tools.js'
import {
    Toast
} from 'mint-ui'
import {
    getWXconfig
} from '@/api'
import router from '@/router'
// 微信公众号appid
export const appId = '123456'
// 当前环境变量 development/production
export const env = process.env.NODE_ENV
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
export const WXAuthorize = (url) => {
    let uri = url || window.location.href
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${uri}&response_type=code&scope=snsapi_userinfo&state=login#wechat_redirect`
}
/**
 * share
 * 微信分享功能
 * @param {Object} data 自定义分享的参数，不传则使用默认的配置
 * {
 *  title: ..., 分享标题
 *  desc: ..., 分享副标题
 *  link: ..., 分享链接
 *  imgUrl: ..., 分享小图片
 *  success: ()=>{}, 分享成功回调
 *  cancel: ()=>{} 取消分享回调
 * }
 */
export const WXshare = (data) => {
    // 分享时判断是否是在微信环境
    if (isWX) {
        WXconfig().then(res => {
            let opt = {
                title: '微谷商城', // 分享标题
                desc: '我发现了一个好东西，想与你分享', // 分享描述
                link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181122/939048311fec4b6ca7f0ef6c5cd1d644.png', // 分享图标
                type: 'link', // 分享类型,music、video或link，不填默认为link
                success: (resData) => {
                    // 用户点击了分享后执行的回调函数
                    tips({
                        message: '分享成功'
                    })
                },
                cancel: (rejData) => {
                    // 用户取消分享后执行的回调函数
                    tips({
                        message: '取消分享'
                    })
                },
                ...data
            }
            // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口（即将废弃）
            wx.onMenuShareTimeline(opt)
            // 获取“分享给朋友”按钮点击状态及自定义分享内容接口（即将废弃）
            wx.onMenuShareAppMessage(opt)
            // 获取“分享到QQ”按钮点击状态及自定义分享内容接口（即将废弃）
            wx.onMenuShareQQ(opt)
            // 获取“分享到QQ空间”按钮点击状态及自定义分享内容接口（即将废弃）
            wx.onMenuShareQZone(opt)
        }).catch(rej => {
            tips({
                message: '分享功能设置出错'
            })
        })
    } else {
        tips({
            message: '亲,分享只能在微信中使用'
        })
    }
}
/**
 * 微信config
 */
// 获取微信config (wx.config)
export const WXconfig = (link) => {
    // alert('WXconfig')
    return new Promise((resolve, reject) => {
        if (isWX) { // 是否是在微信环境
            getWXconfig({
                url: encodeURIComponent(window.location.href.split('#')[0]) // encodeURIComponent(window.location.href.split("#")[0])
            }).then(res => {
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: res.data.appId || appId, // 必填，公众号的唯一标识
                    timestamp: res.data.timestamp, // 必填，生成签名的时间戳
                    nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
                    signature: res.data.signature, // 必填，签名
                    jsApiList: res.data.jsApiList || ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'chooseWXPay'] // 必填，需要使用的JS接口列表
                })
                wx.ready(() => {
                    resolve(res)
                })
                wx.error(res => {
                    console.log('微信配置校验失败!')
                    reject(res)
                })
            }, rej => {
                console.log('获取微信配置失败!')
                reject(rej)
            })
        } else {
            console.log('需要在微信中使用该程序哦!')
            reject(new Error('需要在微信中使用该程序哦!'))
        }
    })
}

/**
 * toast-g
 * 全局提示方法
 * 方法提供给全局组件使用，不适合在业务逻辑频繁使用，会降低用户体验，
 * 使用时请务必回调结束后再执行之后的逻辑
 * http://mint-ui.github.io/docs/#/zh-cn2/toast
 * use:
 * @param {Object} data 传入的参数
 * {
 *  message: '请传入提示内容',
 *  position: 'middle', 弹窗位置
 *  duration: 2000, 延时时间
 * }
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
